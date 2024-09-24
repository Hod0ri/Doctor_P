package kr.ac.daelim.search.service;

import java.io.IOException;
import java.util.List;
import java.util.Map;

import org.springframework.http.MediaType;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;

import kr.ac.daelim.diseaseList.entity.Disease;
import kr.ac.daelim.diseaseList.service.DiseaseService;
import kr.ac.daelim.search.convertor.SearchConvertor;
import kr.ac.daelim.search.dto.PredictDTO;
import kr.ac.daelim.search.dto.SearchInputDTO;
import kr.ac.daelim.search.dto.SearchResDTO;
import lombok.RequiredArgsConstructor;
import reactor.core.publisher.Mono;

@Service
@RequiredArgsConstructor
public class SearchService {
    private final WebClient webClient;
    private final DiseaseService diseaseService;
    private final SearchConvertor convertor;

    public SearchResDTO search(SearchInputDTO dto){
		PredictDTO predictResult = null;
		try {
			predictResult = predict(dto).block();
		} catch (IOException e) {
			throw new RuntimeException(e);
		}
		Map<String, Double> predictDisease = predictResult.getResult();

		SearchResDTO.SearchResDTOBuilder resBuilder = null;
		try {
			resBuilder = SearchResDTO.builder()
					.image(dto.getImage().getBytes().toString())
					.family(dto.getFamily())
					.result(predictDisease);
		} catch (IOException e) {
			throw new RuntimeException(e);
		}

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

    private Mono<PredictDTO> predict(SearchInputDTO inputDTO) throws IOException {
        return webClient.post()
                .uri(inputDTO.getFamily() + "/")
                .accept(MediaType.APPLICATION_JSON)
                .bodyValue(inputDTO.getImage().getBytes())
                .retrieve()
                .bodyToMono(PredictDTO.class);
    }
}
