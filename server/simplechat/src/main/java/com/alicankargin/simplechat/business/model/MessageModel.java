package com.alicankargin.simplechat.business.model;

public class MessageModel {
    private String text;
    private String username;


    public MessageModel() {
    }

    public MessageModel(String username, String text) {
        this.text = text;
        this.username = username;
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
