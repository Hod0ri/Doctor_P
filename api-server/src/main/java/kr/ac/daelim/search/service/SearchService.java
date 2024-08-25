package kr.ac.daelim.search.service;

import kr.ac.daelim.search.dto.SearchInputDTO;
import kr.ac.daelim.search.dto.SearchResDTO;
import org.springframework.stereotype.Service;

@Service
public class SearchService {
    public SearchResDTO search(SearchInputDTO dto){
        return SearchResDTO.builder().build();
    }
}
