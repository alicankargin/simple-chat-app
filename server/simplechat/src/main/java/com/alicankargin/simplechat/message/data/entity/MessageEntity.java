package com.alicankargin.simplechat.message.data.entity;

import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;

import javax.persistence.*;
import java.util.Date;

@Entity
public class MessageEntity {

    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private Long id;
    private String text;
    private String username;

    @CreatedDate
    @Column(name = "created_date")
    private Date createdDate;

    @Column(name = "modified_date")
    @LastModifiedDate
    private long modifiedDate;

    protected MessageEntity() {}

    public MessageEntity(String text, String username) {
        this.text = text;
        this.username = username;
    }

    public Long getId() {
        return id;
    }

    public String getUsername() {
        return username;
    }

    public String getText() {
        return text;
    }
}
