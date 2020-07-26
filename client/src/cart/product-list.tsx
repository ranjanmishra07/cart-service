import React, { ButtonHTMLAttributes, useState } from 'react';
// import './App.css';
import { IProduct } from '../types/product.interface';

interface IProductListProps {
    productList: IProduct[],
    updateProduct: (p: IProduct) => void;
    deleteProduct: (id?: string) => void;
}
function ProductList(props: IProductListProps) {
    const { updateProduct, productList, deleteProduct } = props;
    return (
        <div className="product-list">
            <table>
                <th>Name</th>
                <th>Category</th>
                <th>Price</th>
                <th>Status</th>
                <th>Quantity</th>
                {productList && productList.map(p => (
                    <>
                        <tr>
                            <td>{p.name}</td>
                            <td>{p.category}</td>
                            <td>{p.price}</td>
                            <td>{p.status}</td>
                            <td>{p.quantity}</td>
                            <td><button onClick={() => updateProduct(p)}>edit</button></td>
                            <td><button onClick={() => deleteProduct(p.id)}>delete</button></td>
                        </tr>
                    </>
                ))}
            </table>
        </div>
    );
}

export default ProductList;
