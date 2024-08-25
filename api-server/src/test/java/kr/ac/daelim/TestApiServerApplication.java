package kr.ac.daelim;

import org.springframework.boot.SpringApplication;

public class TestApiServerApplication {

    public static void main(String[] args) {
        SpringApplication.from(ApiServerApplication::main).with(TestcontainersConfiguration.class).run(args);
    }

}
