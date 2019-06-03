package com.alicankargin.simplechat.chat.controller;

import com.alicankargin.simplechat.chat.business.model.MessageModel;
import com.alicankargin.simplechat.message.business.MessageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;

import java.util.List;

@Controller
public class ChatController {
    @Autowired
    MessageService service;

    @MessageMapping("/sendMessage")
    @SendTo("/chat/public")
    public MessageModel sendMessage(MessageModel message) {
        MessageModel model = service.saveMessage(message);
        return model;
    }

    @MessageMapping("/getMessages")
    @SendTo("/chat/public")
    public List<MessageModel> getMessages() {
        return service.findAllMessages();
    }
}
