package kr.ac.daelim.diseaseList.service;

import kr.ac.daelim.diseaseList.convertor.DiseaseConvertor;
import kr.ac.daelim.diseaseList.dto.DiseaseDTO;
import kr.ac.daelim.diseaseList.repository.DiseaseRepo;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import kr.ac.daelim.diseaseList.dto.DiseaseList;

@RequiredArgsConstructor
@Service
public class DiseaseService {
	private final DiseaseRepo repo;
	private final DiseaseConvertor convertor;

	public DiseaseList getDiseaseList(String family){
		return DiseaseList.builder()
				.family(family)
				.diseases(repo.findAllByFamily(family))
				.build();
	}

	public DiseaseDTO getDiseaseById(String id){
		var entity = repo.findById(id);

		if(entity.isEmpty()) return null;

		return convertor.toDto(entity.get());
	}
}
