package com.alicankargin.simplechat.chat.business.service;

import com.alicankargin.simplechat.chat.business.model.MessageModel;
import com.alicankargin.simplechat.message.business.MessageService;
import com.alicankargin.simplechat.message.data.entity.MessageEntity;
import com.alicankargin.simplechat.message.data.repository.MessageRepository;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Date;
import java.util.List;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.beans.SamePropertyValuesAs.samePropertyValuesAs;
import static org.hamcrest.collection.IsIterableContainingInOrder.contains;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.refEq;
import static org.mockito.BDDMockito.given;
import static org.mockito.BDDMockito.when;

@RunWith(SpringRunner.class)
@SpringBootTest
public class ChatServiceTests {

    @MockBean
    private MessageRepository messageRepository;

    @MockBean
    private MessageEntity entity;

    @Autowired
    private MessageService service;

    @Before
    public void setup() {
        when(entity.getId()).thenReturn(1L);
        when(entity.getCreatedDate()).thenReturn(new Date(0));
        when(entity.getText()).thenReturn("mockText");
        when(entity.getUsername()).thenReturn("mockUsername");

        List<MessageEntity> entityList = new ArrayList<>(Arrays.asList(entity, entity));
        given(messageRepository.findAll()).willReturn(entityList);
        given(messageRepository.save(any(MessageEntity.class))).willReturn(entity);
    }

    @Test
    public void findAllMessagesCallsFindAllOnRepository() {
        service.findAllMessages();

        Mockito.verify(messageRepository, Mockito.times(1)).findAll();
    }

    @Test
    @SuppressWarnings("unchecked")
    public void findAllMessagesReturnsAllMessages() {
        MessageModel model = new MessageModel(1L, new Date(0), "mockText", "mockUsername");
        List<MessageModel> actual = service.findAllMessages();

        assertThat(actual, contains(samePropertyValuesAs(model), samePropertyValuesAs(model)));
    }

    @Test
    public void saveMessageCallsSaveOnRepositoryWithTheGivenEntity() {
        MessageModel model = new MessageModel(null, null, "mockText", "mockUsername");
        service.saveMessage(model);

        MessageEntity entityArg = new MessageEntity(model.getText(), model.getUsername());

        Mockito.verify(messageRepository, Mockito.times(1)).save(refEq(entityArg));
    }

    @Test
    public void saveMessageReturnsTheSavedMessage() {
        MessageModel modelArg = new MessageModel(null, null, "mockText", "mockUsername");
        MessageModel actual = service.saveMessage(modelArg);

        MessageModel expected = new MessageModel(1L, new Date(0), "mockText", "mockUsername");

        assertThat(actual, samePropertyValuesAs(expected));
    }
}
