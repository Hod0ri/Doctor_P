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
    private List<MultipartFile> image;
    private String type;
    private String family;
    private InferenceResult result;
    private Doubt doubt;

    @Data
    private class InferenceResult {
        String conjunctivitis;
        String blepharelosis;
        String cornealUlcer;
    }

    @Data
    private class Doubt {
        String type;
        Float percent;
        Desc description;

        @Data
        private class Desc {
            @JsonProperty(value = "ko-KR")
            String koKR;
            String symptom;
        }
    }
}
