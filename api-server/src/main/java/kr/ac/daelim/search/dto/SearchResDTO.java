package kr.ac.daelim.search.dto;


import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonValue;
import com.fasterxml.jackson.databind.PropertyNamingStrategies;
import com.fasterxml.jackson.databind.annotation.JsonNaming;
import lombok.Builder;
import lombok.Data;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;
import java.util.Map;

@Builder
@Data
@JsonNaming(PropertyNamingStrategies.UpperSnakeCaseStrategy.class)
public class SearchResDTO {
    private List<MultipartFile> image;
    private String type;
    private String family;
    private Map<String, String > result;
    private List<Doubt> doubt;

    @Data
    private class Doubt {
        String type;
        Float percent;
        kr.ac.daelim.search.dto.Description description;
    }
}
