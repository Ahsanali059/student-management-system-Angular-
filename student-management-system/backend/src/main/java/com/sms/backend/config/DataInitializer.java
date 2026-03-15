package com.sms.backend.config;

import com.sms.backend.entity.Role;
import com.sms.backend.repository.RoleRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class DataInitializer {

    @Bean
    CommandLineRunner init(RoleRepository roleRepository) {
        return args -> {
            if (roleRepository.findByName(Role.RoleName.ADMIN).isEmpty()) {
                roleRepository.save(new Role(null, Role.RoleName.ADMIN));
            }
            if (roleRepository.findByName(Role.RoleName.TEACHER).isEmpty()) {
                roleRepository.save(new Role(null, Role.RoleName.TEACHER));
            }
            if (roleRepository.findByName(Role.RoleName.STUDENT).isEmpty()) {
                roleRepository.save(new Role(null, Role.RoleName.STUDENT));
            }
        };
    }
}
