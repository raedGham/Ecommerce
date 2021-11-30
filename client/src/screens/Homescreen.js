import React, { useEffect } from 'react';
import Product from '../components/Product';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts } from '../actions/productActions';
import Loader from '../components/loader';
import Error from '../components/error';

const Homescreen = () => {

    const getallproductsstate = useSelector(state => state.getAllProductsReducer);
    const { products, error, loading } = getallproductsstate;


    const dispatch = useDispatch();

    useEffect(() => {

        dispatch(getAllProducts());

    }, [])


    return (
        <div>

            <div className="row justify-content-center">
                {loading ? ( <Loader/>) : error ? (<Error error="Something went Wrorg"/>) : (
                    products.map(product => {
                        return (<div className="col-md-3 m-3 card p-2 card">
                            <Product product={product} />
                        </div>)
                    })

                )}
            </div>
        </div>
    )

}


export default Homescreen;