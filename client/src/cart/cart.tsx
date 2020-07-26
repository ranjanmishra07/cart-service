import React, { useState, useEffect } from 'react';
import ProductModal from './product-modal';
import { IProduct } from '../types/product.interface';
import ProductList from './product-list';
import axios from 'axios';
import { cartApi } from '../api-call/api';

const ButtonStyle = {
    border: "none",
    color: "black",
    padding: "16px 32px",
    textAlign: "center" as "center",
    textDecoration: "none",
    display: "inlineBlock",
    fontSize: "16px",
    margin: "4px 2px",
    transitionDuration: "0.4s",
    cursor: "pointer",
}

function Cart() {
    const [showProductForm, setShowProductForm] = useState(false);
    const [product, setProduct] = useState<IProduct>();
    const [productList, setProductList] = useState<IProduct[]>([]);

    const refreshData = () => {
        axios.get(`${cartApi.url}/products/all`)
        .then(res => res.data.length && setProductList(res.data));
    }

    useEffect(() => {
        refreshData();
        console.log('this.setState', productList);
    }, []);
    const addProductForm = () => {
        setShowProductForm(!showProductForm);
    }
    const closeModal = () => {
        setShowProductForm(!showProductForm);
    }
    const saveProduct = (product: IProduct) => {
        if(product.id) {
            axios.post(`${cartApi.url}/product/update`, product).then(res=> refreshData());
        } else {
          axios.post(`${cartApi.url}/product`,product).then(res=> refreshData());
        }
        
    }
    const updateProduct = (product: IProduct) => {
        console.log('updating');
        setProduct(product);
        setShowProductForm(!showProductForm);
    };
    const deleteProduct = (id? : string) => {
        console.log('deleting id', id);
        axios.delete(`${cartApi.url}/product/delete?id=${id}`).then(res => refreshData());
    }
    return (
        <div className="App">
            <header className="App-header">
                Manage Cart
               <div className="add-product">
                    <button style={ButtonStyle} onClick={() => addProductForm()}>Add Product</button>
                </div>
                <ProductList
                    productList={productList}
                    updateProduct={updateProduct}
                    deleteProduct={deleteProduct}
                ></ProductList>
                <ProductModal
                    showModal={showProductForm}
                    product={product}
                    saveProduct={saveProduct}
                    closeModel={closeModal}
                ></ProductModal>
            </header>
        </div>
    );
}

export default Cart;
