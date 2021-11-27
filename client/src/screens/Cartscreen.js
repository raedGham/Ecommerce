import React from 'react';
import { useState, UseDispatch, useSelector } from 'react-redux';


const Cartscreen = () => {

    const addtocartreducer = useSelector(state => state.addToCartReducer)
    const { cartItems } = addtocartreducer;


    return <div>
        <div className="row  mt-5 justify-content-center">
            <div className="col-md-8">
                <h1 className="text-center m-3"> MY CART</h1>
                <table className="table table-bordered text-center">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Total Price</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cartItems.map(item => {
                            return (
                                <tr>
                                    <td> {item.name}  </td>
                                    <td> {item.price}  </td>
                                    <td>
                                        <select

                                            value={item.qty}
                                            name="qty"
                                            id=""
                                        //onChange={(e) => { setqty(e.target.value) }}
                                        >

                                            {[...Array(item.countInStock).keys()].map((x, i) => {
                                                return <option value={i + 1}>{i + 1}</option>
                                            })}
                                        </select>  </td>
                                    <td> {item.price * item.qty}  </td>
                                    <td> <i className="far fa-trash-alt"></i>  </td>


                                </tr>)
                        })}

                    </tbody>

                </table>

            </div>
        </div>
    </div>;
}



export default Cartscreen;