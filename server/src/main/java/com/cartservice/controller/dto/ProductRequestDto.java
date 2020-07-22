package com.cartservice.controller.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter()
@NoArgsConstructor()
public class ProductRequestDto {
    private String id;
    private String name;
    private String category;
    private String status;
    private Integer quantity;
}
