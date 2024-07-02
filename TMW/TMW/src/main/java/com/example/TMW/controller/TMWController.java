package com.example.TMW.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class TMWController {
    @GetMapping("/signUp")
    public String signUp(){
        return "signUp";
    }

    @GetMapping("/login")
    public String login(){
        return "login";
    }
}
