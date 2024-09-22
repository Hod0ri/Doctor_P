package kr.ac.daelim.diseaseList.repository;

import java.util.List;
import java.util.Optional;

import kr.ac.daelim.diseaseList.entity.Disease;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DiseaseRepo extends JpaRepository<Disease, String > {
	List<Disease> findAllByFamily(String family);

	List<Disease> findByIdAndFamily(Iterable<String> ids, String family);

	Optional<Disease> findByIdAndFamily(String id, String family);
}
