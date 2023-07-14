package com.credillants.credillants.ControllerWeb;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class CarritoControllerWeb {
    @GetMapping("/carrito")
    public String mostrarCarrito(){
        return "carrito";
    }
}
