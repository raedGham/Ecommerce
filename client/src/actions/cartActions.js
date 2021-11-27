export const addToCart = (product, qty) => (dispatch, getState) => {

    const cartItem = {
        name: product.name,
        _id: product._id,
        price: product.price,
        countInStock: product.countInStock,
        qty: qty
    }
    dispatch({ type: "ADD_TO_CART", payload: cartItem })

    localStorage.setItem("cartItems", JSON.stringify(getState().addToCartReducer.cartItems))
}