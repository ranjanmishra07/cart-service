package com.cartservice.service;

import com.cartservice.controller.dto.ProductRequestDto;
import com.cartservice.dao.entity.Product;
import com.cartservice.dao.repository.ProductRepository;
import com.cartservice.service.interfaces.ICartService;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;

@Service()
public class CartServiceImpl implements ICartService {
    private ProductRepository productRepository;
    @Override
    public Product getProduct(String id) {
        Optional<Product> optionalProduct = productRepository.findById(id);
        Product product = optionalProduct.orElse(null);
        return product;
    }

    @Override
    public Product addProduct(ProductRequestDto productRequestDto) {
        Product product = null;
        if(productRequestDto.getCategory() !=null) product.setCategory(productRequestDto.getCategory());
        if(productRequestDto.getName() !=null) product.setName(productRequestDto.getName());
        if(productRequestDto.getStatus() !=null) product.setStatus(productRequestDto.getStatus());
        if(productRequestDto.getQuantity() !=null) product.setQuantity(productRequestDto.getQuantity());
        product.setCreatedAt(new Date());
        Product p = productRepository.save(product);
        return product;
    }

    @Override
    public List<Product> listProducts() {
        List<Product> products = new ArrayList<>();
        productRepository.findAll().forEach(products::add);
        return products;
    }

    @Override
    public Product updateProduct(ProductRequestDto productRequestDto) {
        Optional<Product> optionalProduct = productRepository.findById(productRequestDto.getId());
        Product product = optionalProduct.orElse(null);
        if(product == null) throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "no entity found for this id");
        if(productRequestDto.getQuantity() !=null) product.setQuantity(productRequestDto.getQuantity());
        Product p = productRepository.save(product);
        return p;
    }
}
