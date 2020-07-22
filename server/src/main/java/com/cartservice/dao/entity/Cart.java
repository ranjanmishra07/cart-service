package com.cartservice.dao.entity;

import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.experimental.FieldDefaults;
import org.springframework.data.mongodb.core.mapping.Document;

@Getter()
@Setter()
@NoArgsConstructor()
@FieldDefaults(level = AccessLevel.PRIVATE)
@Document("Cart")
public class Cart {
    String id;

    String productId;

    Integer quantity;
}
