package com.nithin.portfoliobackend.repository;

import com.nithin.portfoliobackend.model.Message;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MessageRepository extends JpaRepository<Message, Long> {
    // That's it! Spring Data JPA provides all the CRUD methods.
}