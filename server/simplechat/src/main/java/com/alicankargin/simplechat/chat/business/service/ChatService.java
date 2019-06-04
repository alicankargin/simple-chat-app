package com.alicankargin.simplechat.chat.business.service;

import com.alicankargin.simplechat.chat.business.model.MessageModel;
import com.alicankargin.simplechat.message.business.MessageService;
import com.alicankargin.simplechat.message.data.entity.MessageEntity;
import com.alicankargin.simplechat.message.data.repository.MessageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.function.Function;
import java.util.stream.Collectors;

@Component
public class ChatService implements MessageService {

    @Autowired
    private MessageRepository repository;

    public List<MessageModel> findAllMessages() {
        List<MessageEntity> entities = repository.findAll();
        return entities.stream().map(this::createMessageModel).collect(Collectors.toList());
    }

    public MessageModel saveMessage(MessageModel message) {
        MessageEntity entity = repository.save(createMessageEntity(message));
        return this.createMessageModel(entity);
    }

    private MessageModel createMessageModel(MessageEntity entity) {
        return new MessageModel(entity.getId(), entity.getCreatedDate(), entity.getText(), entity.getUsername());
    }

    private MessageEntity createMessageEntity(MessageModel model) {
        return new MessageEntity(model.getText(), model.getUsername());
    }
}
