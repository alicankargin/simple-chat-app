package com.alicankargin.simplechat.chat.business.service;

import com.alicankargin.simplechat.chat.business.model.MessageModel;
import com.alicankargin.simplechat.message.business.MessageService;
import com.alicankargin.simplechat.message.data.entity.MessageEntity;
import com.alicankargin.simplechat.message.data.repository.MessageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.stream.Collectors;

@Component
public class ChatService implements MessageService {

    @Autowired
    private MessageRepository repository;

    public List<MessageModel> findAllMessages() {
        List<MessageEntity> entities = repository.findAll();
        return entities.stream().map(entity ->
                new MessageModel(entity.getId(), entity.getText(), entity.getUsername())
        ).collect(Collectors.toList());
    }

    public MessageModel saveMessage(MessageModel message) {
        MessageEntity entity = repository.save(new MessageEntity(message.getText(), message.getUsername()));
        return new MessageModel(entity.getId(), entity.getText(), entity.getUsername());
    }

}
