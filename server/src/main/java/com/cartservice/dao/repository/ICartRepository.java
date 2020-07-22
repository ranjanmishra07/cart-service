package com.cartservice.dao.repository;

import com.cartservice.dao.entity.Cart;
import org.springframework.data.repository.CrudRepository;

public interface ICartRepository extends CrudRepository<Cart,String> {
}
