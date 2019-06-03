package com.alicankargin.simplechat.chat.business.model;

public class MessageModel {
    private Long id;
    private String text;
    private String username;


    public MessageModel() {
    }

    public MessageModel(Long id, String text, String username) {
        this.id = id;
        this.text = text;
        this.username = username;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }
}
