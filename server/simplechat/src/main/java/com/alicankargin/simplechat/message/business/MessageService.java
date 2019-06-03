package com.alicankargin.simplechat.message.business;

import com.alicankargin.simplechat.chat.business.model.MessageModel;

import java.util.List;

public interface MessageService {

    List<MessageModel> findAllMessages();

    MessageModel saveMessage(MessageModel message);
}
