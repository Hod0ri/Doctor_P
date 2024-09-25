package kr.ac.daelim.diseaseList.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import kr.ac.daelim.common.dto.Description;
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
	@JsonIgnore
	private Long id;
	@JsonIgnore
	private String family;
	private String name;
	private String image;
	@Embedded
	private Description description;

}
