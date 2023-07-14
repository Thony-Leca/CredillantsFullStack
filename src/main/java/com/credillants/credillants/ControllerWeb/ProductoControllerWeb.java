
package com.credillants.credillants.ControllerWeb;
import com.credillants.Dto.ProductoDto;
import com.credillants.credillants.Repository.ProductoRepository;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;

import com.credillants.credillants.Service.ProductoService;

@Controller
public class ProductoControllerWeb {

    @Autowired
    private ProductoService servicio;

    @Autowired
    private ProductoRepository prodRep;



    @GetMapping("/catalogo")
    public String mostrarCatalogo(Model modelo) {
        modelo.addAttribute("productos", prodRep.findByEstadoProducto(true));
        return "catalogo";
    }


    @ModelAttribute("producto")
    public ProductoDto RegistroProductos() {
        return new ProductoDto();
    }
  
}
