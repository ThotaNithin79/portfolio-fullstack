package com.nithin.portfoliobackend;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController // Tells Spring that this class will handle web requests
public class ApiController {

    @GetMapping("/api/hello") // Maps HTTP GET requests for "/api/hello" to this method
    public String sayHello() {
        return "Hello from the Spring Boot Backend!";
    }
}