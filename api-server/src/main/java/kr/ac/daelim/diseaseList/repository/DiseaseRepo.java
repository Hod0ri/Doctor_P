package kr.ac.daelim.diseaseList.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import kr.ac.daelim.diseaseList.dto.Disease;

@Repository
public interface DiseaseRepo extends JpaRepository<Disease, String > {
	List<Disease> findAllByFam();
}
