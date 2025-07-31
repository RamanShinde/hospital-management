package com.example.AuthService.Service;

import com.example.AuthService.Entity.User;
import com.example.AuthService.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

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
        User user=userRepository.findByEmail(email).orElseThrow(()->new RuntimeException("User not found!!"));
        if(user.getPassword().equals(password) && user.getRole().equals(role)){
            return true;
        }
        else {
            throw new RuntimeException("Invalid credentials or role");
        }


    }
}
