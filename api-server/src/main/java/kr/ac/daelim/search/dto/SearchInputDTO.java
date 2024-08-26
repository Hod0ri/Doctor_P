package kr.ac.daelim.search.dto;

import lombok.Builder;
import lombok.Data;
import org.springframework.web.multipart.MultipartFile;

@Builder
@Data
public class SearchInputDTO {
    private MultipartFile image;
    private String family;
    private String type;
}
