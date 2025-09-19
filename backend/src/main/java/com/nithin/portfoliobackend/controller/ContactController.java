package com.nithin.portfoliobackend.controller;

import com.nithin.portfoliobackend.model.Message;
import com.nithin.portfoliobackend.repository.MessageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api") // Sets a base path for all endpoints in this class
@CrossOrigin(origins = "http://localhost:5173")
public class ContactController {

    // Spring will automatically create an instance of MessageRepository and inject it here
    @Autowired
    private MessageRepository messageRepository;

    // This method will handle HTTP POST requests to "/api/contact"
    @PostMapping("/contact")
    public Message saveMessage(@RequestBody Message message) {
        // @RequestBody tells Spring to convert the incoming JSON into a Message object
        return messageRepository.save(message);
    }
}