package kr.ac.daelim.search.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.PropertyNamingStrategies;
import com.fasterxml.jackson.databind.annotation.JsonNaming;

import lombok.Builder;
import lombok.Data;

@Builder
@Data
@JsonNaming(PropertyNamingStrategies.UpperSnakeCaseStrategy.class)
public class Description {
    @JsonProperty(value="ko-KR")
    private String ko;
    private String symptom;
    private String overview;

    @JsonProperty(value="full_desc")
    private String fullDesc;
    private String reason;
}
