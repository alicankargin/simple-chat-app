package com.alicankargin.simplechat.chat.business.model;

import java.util.Date;

public class MessageModel {
    private Long id;
    private Date date;
    private String text;
    private String username;

    public MessageModel() {
    }

    public MessageModel(Long id, Date date, String text, String username) {
        this.id = id;
        this.date = date;
        this.text = text;
        this.username = username;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

}
