import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../actions/userActions';
import Error from '../components/error';
import Loader from '../components/loader';

function Login() {
    
    const loginreducer = useSelector(state => state.loginReducer);
    const {error, loading} = loginreducer;

  console.log(error);
    

    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');


    const dispatch = useDispatch();

    useEffect(() => {
        if (localStorage.getItem("currentUser")) {
            window.location.href = "/"
        }
    }, [])

    const login = (e) => {
        e.preventDefault()


        const user = {

            email: email,
            password: password
        }

        dispatch(loginUser(user));


    }
    return (

        <div >



            <div className="row justify-content-center">

                <div className="col-md-4 card p-5" style={{ marginTop: '150px' }}>

                    <div>
                        <h2 className="text-center">Login</h2>
                        <form onSubmit={login}>


                        {error && (<Error error="Invalid Credentials"/>)}
                        {loading && (<Loader/>)}
                                                            <input type="text" placeholder="email" className="form-control" value={email} required onChange={(e) => { setemail(e.target.value) }} />
                            <input type="password" placeholder="password" className="form-control" value={password} required onChange={(e) => { setpassword(e.target.value) }} />


                            < div className="text-right">
                                <button type="Submit" className="btn mt-3"  >Login</button>

                            </div>
                            <a href="/register">Click Here to Register</a>
                        </form>

                    </div>

                </div>

            </div>





        </div>
    );

}

export default Login;