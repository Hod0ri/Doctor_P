package kr.ac.daelim.search.dto;

import lombok.Builder;
import lombok.Data;
import kr.ac.daelim.search.dto.Description;

@Builder
@Data
public class Doubt {
    String type;
    Double percent;
    Description description;
}
