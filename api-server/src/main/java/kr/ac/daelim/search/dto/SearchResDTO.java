package kr.ac.daelim.search.dto;

import java.util.List;
import java.util.Map;

import com.fasterxml.jackson.databind.PropertyNamingStrategies;
import com.fasterxml.jackson.databind.annotation.JsonNaming;

import lombok.Builder;
import lombok.Data;

@Builder
@Data
@JsonNaming(PropertyNamingStrategies.SnakeCaseStrategy.class)
public class SearchResDTO {
    private String  image;
    private String type;
    private String family;
    private Map<String, Double > result;
    private List<Doubt> doubt;

}
