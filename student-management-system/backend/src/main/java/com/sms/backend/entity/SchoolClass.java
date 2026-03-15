package com.sms.backend.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Set;

@Entity
@Table(name = "classes")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class SchoolClass {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String className;
    private String section;
    private Integer capacity;

    @ManyToOne
    @JoinColumn(name = "teacher_id")
    private Teacher classTeacher;

    @OneToMany(mappedBy = "schoolClass")
    private Set<Student> students;
}
