package kr.ac.daelim.search.dto;

import kr.ac.daelim.common.dto.Description;
import lombok.Builder;
import lombok.Data;

@Builder
@Data
public class Doubt {
    private String id;
    private String type;
    private Double percent;
    private Description description;
}
