package kr.ac.daelim.search.controller;

import kr.ac.daelim.search.dto.SearchInputDTO;
import kr.ac.daelim.search.dto.SearchResDTO;
import kr.ac.daelim.search.service.SearchService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
public class SearchController {
    private final SearchService service;

    @PostMapping("search")
    public SearchResDTO imageSearch(SearchInputDTO inputDTO){
        return service.search(inputDTO);
    }
}
