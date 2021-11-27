import React from 'react';
import { Link } from "react-router-dom";
import Rating from 'react-rating';

// mongodb+srv://raed:16101974@cluster0.vhuyr.mongodb.net/mern-ecommerce

const Product = ({ product }) => {
    return (
        <div >
            {/* className="col-md-3 m-3 card p-2" */}
            <div>
                <Link to={`/product/${product._id}`} >
                    <img src={product.image} className="img-fluid" alt="" />
                    <h1 className="bold">{product.name}</h1>


                    <Rating
                        className="ratings"
                        initialRating={product.rating}
                        emptySymbol={<img src="https://img.icons8.com/ios/50/000000/star--v1.png" className="icon" height="20px" />}
                        fullSymbol={<img src="https://img.icons8.com/material/50/000000/star--v1.png" height="20px" />}
                        readonly={true}


                    />
                    <h1>Price: {product.price}</h1>
                </Link>
            </div>
        </div>
    )
}

export default Product;