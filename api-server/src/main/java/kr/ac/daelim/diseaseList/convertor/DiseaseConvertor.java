package kr.ac.daelim.diseaseList.convertor;

import kr.ac.daelim.diseaseList.dto.DiseaseInfo;
import kr.ac.daelim.diseaseList.entity.Disease;
import org.springframework.stereotype.Component;

@Component
public class DiseaseConvertor {
    public DiseaseInfo toDto(Disease entity){
        return DiseaseInfo.builder()
                .family(entity.getFamily())
                .image(entity.getImage())
                .description(entity.getDescription())
                .build();
    }

    public Disease toEntity(DiseaseInfo dto, String family){
        return Disease.builder()
                .family(family)
                .description(dto.getDescription())
                .build();
    }
}
