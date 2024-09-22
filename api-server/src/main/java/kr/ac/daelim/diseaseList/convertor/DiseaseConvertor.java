package kr.ac.daelim.diseaseList.convertor;

import kr.ac.daelim.diseaseList.dto.DiseaseListDTO;
import kr.ac.daelim.diseaseList.entity.Disease;
import org.springframework.stereotype.Component;

@Component
public class DiseaseConvertor {
    public DiseaseListDTO toDto(Disease entity){
        return DiseaseListDTO.builder()
                .family(entity.getFamily())
                .description(entity.getDescription())
                .build();
    }

    public Disease toEntity(DiseaseListDTO dto, String family){
        return Disease.builder()
                .family(family)
                .description(dto.getDescription())
                .build();
    }
}
