package com.cartservice.dao.repository;

import com.cartservice.dao.entity.Product;
import org.springframework.data.repository.CrudRepository;

public interface ProductRepository extends CrudRepository<Product,String> {
}
