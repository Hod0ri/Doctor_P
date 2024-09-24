package kr.ac.daelim.diseaseList.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import kr.ac.daelim.diseaseList.dto.DiseaseList;
import kr.ac.daelim.diseaseList.dto.DiseaseListDTO;
import kr.ac.daelim.diseaseList.service.DiseaseService;
import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
@RequestMapping("disease")
public class DiseaseListController {
	private final DiseaseService service;

	@GetMapping()
	public DiseaseList getDiseaseList(@RequestParam String family){
		return service.getDiseaseList(family);
	}

	@GetMapping("info")
	public DiseaseListDTO getDiseaseById(@RequestParam String family, @RequestParam String id){
		return service.getDiseaseById(id);
	}
}
