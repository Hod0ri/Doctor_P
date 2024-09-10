package kr.ac.daelim.diseaseList.dto;

import kr.ac.daelim.search.dto.Description;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class DiseaseDTO {
	private String family;
	private Description description;
}
