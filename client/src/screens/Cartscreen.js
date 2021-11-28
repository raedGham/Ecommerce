import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart, deleteFromCart } from '../actions/cartActions';


const Cartscreen = () => {

    const cartreducer = useSelector(state => state.cartReducer)
    const { cartItems } = cartreducer;
    const dispatch = useDispatch();

    let subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.qty), 0);

    return <div>
        <div className="row  mt-5 justify-content-center">
            <div className="col-md-8 card">
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
                                    <td className="text-left"> {item.name}  </td>
                                    <td> {item.price}  </td>
                                    <td>
                                        <select

                                            value={item.qty}
                                            name="qty"
                                            id=""
                                            onChange={(e) => { dispatch(addToCart(item, e.target.value)) }}
                                        >

                                            {[...Array(item.countInStock).keys()].map((x, i) => {
                                                return <option value={i + 1}>{i + 1}</option>
                                            })}
                                        </select>  </td>
                                    <td> {item.price * item.qty}  </td>
                                    <td> <i className="far fa-trash-alt"
                                        onClick={() => dispatch(deleteFromCart(item))}></i>  </td>


                                </tr>)
                        })}

                    </tbody>




                </table>
                <hr />
                <h2 className="text-center">SUBTOTAL : {subtotal} RS</h2>
                <hr />
                <div className="text-center p-3">
                    <button className="btn">PAY NOW</button>
                </div>
            </div>
        </div>
    </div>;
}



export default Cartscreen;