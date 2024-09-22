package kr.ac.daelim.diseaseList.controller;

import kr.ac.daelim.diseaseList.dto.DiseaseListDTO;
import kr.ac.daelim.diseaseList.service.DiseaseService;
import org.springframework.web.bind.annotation.*;

import kr.ac.daelim.diseaseList.dto.DiseaseList;
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

	@GetMapping()
	public DiseaseListDTO getDiseaseById(@RequestParam String id){
		return service.getDiseaseById(id);
	}
}
