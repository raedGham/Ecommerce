const cartReducer = (state = { cartItems: [] }, action) => {

    switch (action.type) {


        case "ADD_TO_CART":

            const alreadyexist = state.cartItems.find(item => item._id == action.payload._id)
            console.log(alreadyexist);
            if (alreadyexist) {
                console.log("exists");
                return {
                    ...state,
                    cartItems: state.cartItems.map(item => item._id == action.payload._id ? action.payload : item)
                }
            }
            else {
                console.log("Does not exists");
                return {
                    ...state,
                    cartItems: [...state.cartItems, action.payload]
                }
            }

        case "DELETE_FROM_CART":
            return {
                ...state,
                cartItems: state.cartItems.filter(item => { return item._id !== action.payload._id })

            }


        default: return state

    }
}

export default cartReducer;