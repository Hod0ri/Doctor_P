package kr.ac.daelim.search.dto;


import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonValue;
import com.fasterxml.jackson.databind.PropertyNamingStrategies;
import com.fasterxml.jackson.databind.annotation.JsonNaming;
import lombok.Builder;
import lombok.Data;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@Builder
@Data
@JsonNaming(PropertyNamingStrategies.UpperSnakeCaseStrategy.class)
public class SearchResDTO {
    @JsonProperty(value="ko-KR")
    private String ko;
    private String symptom;
    private String overview;

    @JsonProperty(value="full_desc")
    private String fullDesc;
    private String reason;
}
