package kr.ac.daelim.diseaseList.service;

import java.util.List;

import org.springframework.stereotype.Service;

import kr.ac.daelim.diseaseList.convertor.DiseaseConvertor;
import kr.ac.daelim.diseaseList.dto.DiseaseList;
import kr.ac.daelim.diseaseList.dto.DiseaseListDTO;
import kr.ac.daelim.diseaseList.entity.Disease;
import kr.ac.daelim.diseaseList.repository.DiseaseRepo;
import lombok.RequiredArgsConstructor;

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

	public DiseaseListDTO getDiseaseById(String id){
		var entity = repo.findById(id);

		if(entity.isEmpty()) return null;

		return convertor.toDto(entity.get());
	}

	public List<Disease> getDiseaseListByIdAndFamily(Iterable<String> ids, String family){
		return repo.findByFamilyAndIdIn(family, ids);
	}
}
