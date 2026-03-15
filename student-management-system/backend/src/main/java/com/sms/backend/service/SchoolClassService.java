package com.sms.backend.service;

import com.sms.backend.entity.SchoolClass;
import com.sms.backend.repository.SchoolClassRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SchoolClassService {
    @Autowired
    private SchoolClassRepository classRepository;

    public List<SchoolClass> getAllClasses() {
        return classRepository.findAll();
    }

    public SchoolClass createClass(SchoolClass schoolClass) {
        return classRepository.save(schoolClass);
    }

    public void deleteClass(Long id) {
        classRepository.deleteById(id);
    }
}
