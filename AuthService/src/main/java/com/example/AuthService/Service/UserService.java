package com.example.AuthService.Service;

import com.example.AuthService.Entity.User;
import com.example.AuthService.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {
    @Autowired
    UserRepository userRepository;
    public List<User> getAllUser() {
        return userRepository.findAll();
    }

    public void singUp(User user) {
        userRepository.save(user);
    }


    public boolean login(String email, String password, String role) {
        Optional<User> useropt=userRepository.findByEmail(email);
        if(useropt.isPresent()){
            User user=useropt.get();
            return user.getPassword().equals(password) && user.getRole().equalsIgnoreCase(role);
        }
        return false;
    }
}
