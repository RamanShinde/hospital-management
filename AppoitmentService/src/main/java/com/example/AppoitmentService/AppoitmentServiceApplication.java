package com.example.AppoitmentService;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.client.RestTemplate;

@SpringBootApplication
public class AppoitmentServiceApplication {

	public static void main(String[] args) {
		SpringApplication.run(AppoitmentServiceApplication.class, args);
	}
    @Bean
	public RestTemplate template(){
		return new RestTemplate();
	}
}