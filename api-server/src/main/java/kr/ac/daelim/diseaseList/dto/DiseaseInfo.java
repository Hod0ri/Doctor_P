package kr.ac.daelim.diseaseList.dto;

import kr.ac.daelim.common.dto.Description;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class DiseaseInfo {
    private String family;
    private String image;
    private Description description;
}
