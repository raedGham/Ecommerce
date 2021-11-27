import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProductById } from '../actions/productActions';
import { addToCart } from '../actions/cartActions';


const ProductDesc = ({ match }) => {


    const productid = match.params.id;
    const dispatch = useDispatch();
    const [qty, setqty] = useState(1);

    const getproductsbyidstate = useSelector(state => state.getProductByIdReducer);
    const { product, error, loading } = getproductsbyidstate;



    useEffect(() => {

        dispatch(getProductById(productid));

    }, []);

    function addtocartclick() {

        dispatch(addToCart(product, qty));
    }
    return (<div>

        {loading ? (<h1>Loading ...</h1>) : error ? (<h1>Something went wrong</h1>) : (
            <div className="row">
                <div className="col-md-6">
                    <div className="card p-3 m-2">
                        <h1>{product.name}</h1>
                        <img src={product.image} className="img-fluid m-3 bigimg"></img>
                        <p>{product.description}</p>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="m-2">
                        <h1>Price: {product.price}</h1>
                        <hr />
                        <h1>Select Quantity</h1>
                        <select value={qty} onChange={(e) => {
                            setqty(e.target.value)
                        }}>
                            {[...Array(product.countInStock).keys()].map((x, i) => {
                                return <option value={i + 1}>{i + 1}</option>
                            })}
                        </select>
                        <hr />
                        <button className="btn btn-dark" onClick={addtocartclick}>Add to Cart</button>
                    </div>
                </div>
            </div>

        )
        }


    </div >);
}


export default ProductDesc;