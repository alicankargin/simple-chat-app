package com.alicankargin.simplechat.chat.controller;

import com.alicankargin.simplechat.chat.business.model.MessageModel;
import com.alicankargin.simplechat.message.business.MessageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@Controller
@RestController
public class ChatController {
    @Autowired
    MessageService service;

    @MessageMapping("/sendMessage")
    @SendTo("/chat/public")
    public MessageModel sendMessage(MessageModel message) {
        MessageModel model = service.saveMessage(message);
        return model;
    }

    @RequestMapping("/messages")
    public List<MessageModel> getMessages() {
        List<MessageModel> msgs = service.findAllMessages();
        return msgs;
    }
}
