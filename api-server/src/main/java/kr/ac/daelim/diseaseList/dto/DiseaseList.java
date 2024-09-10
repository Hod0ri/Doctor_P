package kr.ac.daelim.diseaseList.dto;

import java.util.List;

import lombok.Data;

@Data
public class DiseaseList {
	private String family;
	private List<Disease> diseases;
}
