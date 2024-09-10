package kr.ac.daelim.diseaseList.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import kr.ac.daelim.diseaseList.dto.DiseaseList;
import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
@RequestMapping("disease")
public class DiseaseListController {
	@GetMapping()
	public DiseaseList getDiseaseList(@RequestParam String family){
		return
	}
}
