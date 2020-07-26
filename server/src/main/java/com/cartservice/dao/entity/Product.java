package com.cartservice.dao.entity;

import com.mongodb.lang.NonNull;
import com.mongodb.lang.Nullable;
import com.sun.istack.internal.NotNull;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.experimental.FieldDefaults;
import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;

@Getter()
@Setter()
@NoArgsConstructor()
@FieldDefaults(level = AccessLevel.PRIVATE)
@Document("Product")
public class Product {
    @Id
    String id;

    @Nullable
    String category;

    @NotNull
    Integer quantity;

    @NotNull
    String name;

    @NotNull
    Integer price;

    @NotNull
    String status;

    @Nullable
    Date createdAt;

    @Nullable
    Date updatedAt;
}
