import React, { ButtonHTMLAttributes, useState, FormEvent } from 'react';
import Modal from 'react-modal';
// import './App.css';
import { IProduct } from '../types/product.interface';
import { render } from '@testing-library/react';
import { stat } from 'fs';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};

interface IProductModalProps {
    product?: IProduct,
    saveProduct: (product: IProduct) => void;
    closeModel: () => void;
    showModal: boolean;
}
interface IProductModalState {
    name: string,
    quantity: number,
    category: string,
    status: string,
    price: number,
}
export default class ProductModal extends React.Component<IProductModalProps,IProductModalState> {
    constructor(props: IProductModalProps) {
        super(props);
        this.state = {
            name: '',
            quantity : 0,
            category: '',
            status: '',
            price: 0,
        }
    }
    afterOpenModal = () => {
        console.log('component did mount')
        if(this.props.product?.id) {
            console.log('coming here', this.props.product.quantity);
            this.setState({quantity: this.props.product.quantity!});
        }
    }
    onInputChange = (event: any) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        console.log('eventTarget', event.target.name, value);
        this.setState({
            [name]: value
          } as Pick<IProductModalState, keyof IProductModalState>);
    }
    onHandleSubmit = (e: FormEvent<HTMLFormElement>) => {
        const product: IProduct = {
            name: this.state.name,
            category: this.state.category,
            status: this.state.status,
            quantity: parseInt(this.state.quantity as unknown as string),
            price : parseInt(this.state.price as unknown as string)
        }
        console.log('product', product);
        this.props.saveProduct(product);
        e.preventDefault();
        this.props.closeModel();
    }

    onHandleUpdateSubmit =(e: FormEvent<HTMLFormElement>) => {
        const product: IProduct = {
            quantity: this.state.quantity,
            id: this.props.product?.id,
        }
        this.props.saveProduct(product)
        e.preventDefault();
        this.props.closeModel();
    }

    render() {
        const {showModal, product, closeModel} = this.props;
        const {name, quantity, category, status, price}= this.state;
        return (
            <div className="product-modal">
                <Modal
                    isOpen={showModal}
                    onAfterOpen={this.afterOpenModal}
                    onRequestClose={closeModel}
                    style={customStyles}
                    contentLabel="Example Modal"
                >
    
                    <h2 ref={_subtitle => (_subtitle = _subtitle)}>Product</h2>
                    <button onClick={closeModel}>close</button>
                    {product && product.id ?
                     (
                        <form onSubmit={this.onHandleUpdateSubmit}>
                        <label>
                            Quantity:
                        <input type="number" value={this.state.quantity} name="quantity" onChange={this.onInputChange} required/>
                        </label>
                        <input type="submit" value="Submit" />
                    </form>
                     ) : (
                        <form onSubmit={this.onHandleSubmit}>
                        <label>
                            Name: 
                        <input type="text" value={name} name="name" onChange={this.onInputChange} required/>
                        </label>
                        <label>
                            Category: 
                        <input type="text" value={category} name="category" onChange={this.onInputChange} required/>
                        </label>
                        <label>
                            Price: 
                        <input type="number" value={price} name="price" onChange={this.onInputChange} required/>
                        </label>
                        <label>
                            Status: 
                        <input type="text" value={status} name="status" onChange={this.onInputChange} required/>
                        </label>
                        <label>
                            Quantity: 
                        <input type="number" value={quantity} name="quantity" onChange={this.onInputChange} required/>
                        </label>
                        <input type="submit" value="Submit" />
                    </form>
                     )}

                </Modal>
            </div>
        );
    }

}

