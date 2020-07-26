package com.cartservice.service.interfaces;

import com.cartservice.controller.dto.ProductRequestDto;
import com.cartservice.dao.entity.Product;

import java.util.List;

public interface ICartService {
    Product getProduct(String id);
    Product addProduct(ProductRequestDto productRequestDto);
    List<Product> listProducts();
    Product updateProduct(ProductRequestDto productRequestDto);
    Void deleteProduct(String id);
}
