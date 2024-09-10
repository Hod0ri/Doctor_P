package kr.ac.daelim.diseaseList.dto;

import java.util.List;

import kr.ac.daelim.diseaseList.entity.Disease;
import lombok.Data;

@Data
public class DiseaseList {
	private String family;
	private List<Disease> diseases;
}
