import axios, { Axios } from 'axios';


export const registerNewUser = (user) => dispatch => {

    dispatch({ type: 'USER_REGISTER_REQUEST' })

    axios.post("/api/users/register", user)
        .then(res => {
            dispatch({ type: 'USER_REGISTER_SUCCESS' });

        })

        .catch(err => {
            dispatch({ type: 'USER_REGISTER_FAILED' });
            console.log(err)
        })
};


export const loginUser = (user) => dispatch => {

    dispatch({ type: 'USER_LOGIN_REQUEST' })

    axios.post("/api/users/login", user)
        .then(res => {
            dispatch({ type: 'USER_LOGIN_SUCCESS' })
            console.log(res.data);
            localStorage.setItem("currentUser", JSON.stringify(res.data));
            window.location.href = "/";
        })

        .catch(err => {
            dispatch({ type: 'USER_LOGIN_FAILED' })
            console.log(err)
        })
};