package kr.ac.daelim.search.dto;

import lombok.Builder;
import lombok.Data;

import java.util.List;
import java.util.Map;

@Data
@Builder
public class PredictDTO {
    private String status;
    private String family;
    private Map<String, String> result;
    private List<String> doubt;
}
