package kr.ac.daelim.configs;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.web.reactive.function.client.WebClient;

@Configuration
public class WebAPIConfig {
    @Value("#{environment['ai.url']}")
    private String apiURL;

    @Bean
    public WebClient webClientConfig(WebClient.Builder builder){
        return builder
                .baseUrl(apiURL)
                .defaultHeaders(httpHeaders -> {
                    httpHeaders.add(HttpHeaders.CONTENT_TYPE, MediaType.IMAGE_JPEG_VALUE);
                })
                .build();
    }
}
