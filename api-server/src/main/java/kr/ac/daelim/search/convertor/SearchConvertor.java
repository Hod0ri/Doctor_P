package kr.ac.daelim.search.convertor;

import kr.ac.daelim.diseaseList.entity.Disease;
import kr.ac.daelim.search.dto.Doubt;
import org.springframework.stereotype.Component;

@Component
public class SearchConvertor {
    public Doubt toDoubt(Disease entity, Double percent){
        return Doubt.builder()
                .id(entity.getName())
                .type(entity.getFamily())
                .percent(percent)
                .description(entity.getDescription())
                .build();
    }
}
