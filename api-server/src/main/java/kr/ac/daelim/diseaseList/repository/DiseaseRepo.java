package kr.ac.daelim.diseaseList.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import kr.ac.daelim.diseaseList.entity.Disease;

@Repository
public interface DiseaseRepo extends JpaRepository<Disease, Long > {
	List<Disease> findAllByFamily(String family);

	Optional<Disease> findByName(String name);
	List<Disease> findByNameInAndFamily(Iterable<String> name, String family);

	Optional<Disease> findByNameAndFamily(String name, String family);
}
