package com.alicankargin.simplechat.chat.controller;

import com.alicankargin.simplechat.chat.business.model.MessageModel;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;


@Controller
public class ChatController {

    @MessageMapping("/sendMessage")
    @SendTo("/chat/public")
    public MessageModel sendMessage(MessageModel message) {
        return message;
    }

}
