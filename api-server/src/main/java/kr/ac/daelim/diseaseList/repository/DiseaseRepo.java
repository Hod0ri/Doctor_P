package kr.ac.daelim.diseaseList.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import kr.ac.daelim.diseaseList.entity.Disease;

@Repository
public interface DiseaseRepo extends JpaRepository<Disease, String > {
	List<Disease> findAllByFamily(String family);

	List<Disease> findByFamilyAndIdIn(String family, Iterable<String> ids);

	Optional<Disease> findByIdAndFamily(String id, String family);
}
