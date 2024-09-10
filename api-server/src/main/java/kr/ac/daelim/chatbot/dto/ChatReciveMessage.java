package kr.ac.daelim.chatbot.dto;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class ChatReciveMessage {
    private String client;
    private String response;
}
