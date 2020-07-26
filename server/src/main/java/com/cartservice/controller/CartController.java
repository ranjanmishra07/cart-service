package com.cartservice.controller;

import com.cartservice.controller.dto.ProductRequestDto;
import com.cartservice.dao.entity.Cart;
import com.cartservice.dao.entity.Product;
import com.cartservice.service.CartServiceImpl;
import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@RestController
@RequiredArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
@RequestMapping(value = {"/cart/"})
public class CartController {

    @Autowired()
    CartServiceImpl cartService;

    @PostMapping("/product")
    public Product addProductToCart(@RequestBody ProductRequestDto productRequestDto) {
        return cartService.addProduct(productRequestDto);
    }

    @PostMapping("/product/update")
    public Product updateProduct(@RequestBody ProductRequestDto productRequestDto) {
        if(productRequestDto.getId() == null) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "valid product id is requires");
        }
        return cartService.updateProduct(productRequestDto);
    }

    @GetMapping("/products/all")
    public List<Product> getProductsInCart() {
        return cartService.listProducts();
    }

    @GetMapping("product")
    public Product getProduct(@RequestParam("id") String id) {
        return cartService.getProduct(id);
    }

    @DeleteMapping("product/delete")
    public Void deleteProduct(@RequestParam("id") String id) {
        return cartService.deleteProduct(id);
    }

}
