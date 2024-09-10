package kr.ac.daelim.diseaseList.convertor;

import kr.ac.daelim.diseaseList.dto.DiseaseDTO;
import kr.ac.daelim.diseaseList.entity.Disease;
import kr.ac.daelim.search.dto.Description;
import org.springframework.stereotype.Component;

@Component
public class DiseaseConvertor {
    public DiseaseDTO toDto(Disease entity){
        return DiseaseDTO.builder()
                .family(entity.getFamily())
                .description(entity.getDescription())
                .build();
    }

    public Disease toEntity(DiseaseDTO dto, String family){
        return Disease.builder()
                .family(family)
                .description(dto.getDescription())
                .build();
    }
}
