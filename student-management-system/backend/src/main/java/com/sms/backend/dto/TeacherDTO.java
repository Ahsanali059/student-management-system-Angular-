package com.sms.backend.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class TeacherDTO {
    private Long id;
    private String name;
    private String email;
    private String phone;
    private String qualification;
    private Integer experience;
}
