package kr.ac.daelim.diseaseList.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.Embeddable;
import jakarta.persistence.Embedded;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import kr.ac.daelim.search.dto.Description;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Disease {
	@Id
	private String id;
	@JsonIgnore
	private String family;
	@Embedded
	private Description description;

}
