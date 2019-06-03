package com.alicankargin.simplechat.message.data.repository;

import com.alicankargin.simplechat.message.data.entity.MessageEntity;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface MessageRepository extends CrudRepository<MessageEntity, Long> {

    List<MessageEntity> findAll();
}