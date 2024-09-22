package kr.ac.daelim.search.service;

import kr.ac.daelim.diseaseList.dto.DiseaseListDTO;
import kr.ac.daelim.diseaseList.entity.Disease;
import kr.ac.daelim.diseaseList.service.DiseaseService;
import kr.ac.daelim.search.convertor.SearchConvertor;
import kr.ac.daelim.search.dto.PredictDTO;
import kr.ac.daelim.search.dto.SearchInputDTO;
import kr.ac.daelim.search.dto.SearchResDTO;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;
import reactor.core.publisher.Mono;

import java.util.List;
import java.util.Map;

@Service
@RequiredArgsConstructor
public class SearchService {
    private final WebClient webClient;
    private final DiseaseService diseaseService;
    private final SearchConvertor convertor;

    public SearchResDTO search(SearchInputDTO dto){
        var predictResult = predict(dto).block();
        Map<String, Double> predictDisease = predictResult.getResult();

        var resBuilder = SearchResDTO.builder()
                .image(dto.getImage())
                .family(dto.getFamily())
                .result(predictDisease);

        if (predictDisease.isEmpty()){
            return resBuilder.doubt(null).build();
        }

        List<Disease> diseaseList = diseaseService.getDiseaseListByIdAndFamily(predictDisease.keySet(),
                dto.getFamily());

        return resBuilder.doubt(
                diseaseList.stream()
                        .map(disease -> convertor.toDoubt(disease, predictDisease.get(disease.getId()))
                        )
                        .toList()
        ).build();
    }

    private Mono<PredictDTO> predict(SearchInputDTO inputDTO){
        return webClient.post()
                .uri(inputDTO.getFamily())
                .bodyValue(inputDTO.getImage())
                .retrieve()
                .bodyToMono(PredictDTO.class);
    }
}
