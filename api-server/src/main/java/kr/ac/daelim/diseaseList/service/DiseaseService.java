package kr.ac.daelim.diseaseList.service;

import java.util.List;

import kr.ac.daelim.diseaseList.dto.DiseaseInfo;
import org.springframework.stereotype.Service;

import kr.ac.daelim.diseaseList.convertor.DiseaseConvertor;
import kr.ac.daelim.diseaseList.dto.DiseaseList;
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

	public DiseaseInfo getDiseaseByNameAndFamily(String name, String family){
		var entity = repo.findByNameAndFamily(name, family);

		if(entity.isEmpty()) return null;

		return convertor.toDto(entity.get());
	}

	public List<Disease> getDiseaseListByNameAndFamily(Iterable<String> names, String family){
		return repo.findByNameInAndFamily(names, family);
	}
}
