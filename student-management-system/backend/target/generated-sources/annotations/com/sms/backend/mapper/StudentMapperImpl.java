package com.sms.backend.mapper;

import com.sms.backend.dto.StudentDTO;
import com.sms.backend.entity.SchoolClass;
import com.sms.backend.entity.Student;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2026-03-15T12:08:07+0500",
    comments = "version: 1.5.5.Final, compiler: Eclipse JDT (IDE) 3.45.0.v20260128-0750, environment: Java 21.0.9 (Eclipse Adoptium)"
)
@Component
public class StudentMapperImpl implements StudentMapper {

    @Override
    public StudentDTO toDto(Student student) {
        if ( student == null ) {
            return null;
        }

        StudentDTO studentDTO = new StudentDTO();

        studentDTO.setClassId( studentSchoolClassId( student ) );
        studentDTO.setClassName( studentSchoolClassClassName( student ) );
        studentDTO.setAddress( student.getAddress() );
        studentDTO.setDateOfBirth( student.getDateOfBirth() );
        studentDTO.setEmail( student.getEmail() );
        studentDTO.setFirstName( student.getFirstName() );
        studentDTO.setGender( student.getGender() );
        studentDTO.setId( student.getId() );
        studentDTO.setLastName( student.getLastName() );
        studentDTO.setPhone( student.getPhone() );
        studentDTO.setRollNumber( student.getRollNumber() );
        studentDTO.setStatus( student.getStatus() );

        return studentDTO;
    }

    @Override
    public Student toEntity(StudentDTO studentDTO) {
        if ( studentDTO == null ) {
            return null;
        }

        Student student = new Student();

        student.setSchoolClass( studentDTOToSchoolClass( studentDTO ) );
        student.setAddress( studentDTO.getAddress() );
        student.setDateOfBirth( studentDTO.getDateOfBirth() );
        student.setEmail( studentDTO.getEmail() );
        student.setFirstName( studentDTO.getFirstName() );
        student.setGender( studentDTO.getGender() );
        student.setId( studentDTO.getId() );
        student.setLastName( studentDTO.getLastName() );
        student.setPhone( studentDTO.getPhone() );
        student.setRollNumber( studentDTO.getRollNumber() );
        student.setStatus( studentDTO.getStatus() );

        return student;
    }

    private Long studentSchoolClassId(Student student) {
        if ( student == null ) {
            return null;
        }
        SchoolClass schoolClass = student.getSchoolClass();
        if ( schoolClass == null ) {
            return null;
        }
        Long id = schoolClass.getId();
        if ( id == null ) {
            return null;
        }
        return id;
    }

    private String studentSchoolClassClassName(Student student) {
        if ( student == null ) {
            return null;
        }
        SchoolClass schoolClass = student.getSchoolClass();
        if ( schoolClass == null ) {
            return null;
        }
        String className = schoolClass.getClassName();
        if ( className == null ) {
            return null;
        }
        return className;
    }

    protected SchoolClass studentDTOToSchoolClass(StudentDTO studentDTO) {
        if ( studentDTO == null ) {
            return null;
        }

        SchoolClass schoolClass = new SchoolClass();

        schoolClass.setId( studentDTO.getClassId() );

        return schoolClass;
    }
}
