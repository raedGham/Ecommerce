import React, { useState } from 'react';
import { useDispatch , useSelector } from 'react-redux';
import {registerNewUser} from '../actions/userActions';
import Loader from '../components/loader';
import Error from '../components/error';
import Success from '../components/success';


function Register() {

    const [name, setname] = useState('');
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    const [cpassword, setcpassword] = useState('');

    const dispatch = useDispatch();

    const registernewuserreducer = useSelector(state => state.registerNewUserReducer);
    const {error, loading, success} = registernewuserreducer;

 
    
const register = (e) => {
e.preventDefault()


    const user =  {
        name:name,
        email:email,
        password:password
    }
    if (password==cpassword) {
        dispatch(registerNewUser(user))
    } else {   
    alert("Passwords does not match")
}

}
    return (

        <div >



            <div className="row justify-content-center">

                <div className="col-md-4 card p-5" style = {{marginTop:'150px'}}>
                 
                    <div>
                     <h1 className="text-center">Register</h1> 

                     {loading && (<Loader/>)}
                     {error && (<Error error="Email Address Exists"/>)}
                     {success && (<Success success ="Registration successfull"/>)}
                     


                     <form onSubmit={register}>                  

                            <input type="text" placeholder="name" className="form-control" value={name} required onChange={(e)=>{setname(e.target.value)}}/>
                            <input type="text" placeholder="email" className="form-control" value={email} required onChange={(e)=>{setemail(e.target.value)}}/>
                            <input type="password" placeholder="password" className="form-control" value={password} required onChange={(e)=>{setpassword(e.target.value)}}/>
                            <input type="password" placeholder="confirm password" className="form-control" value={cpassword} required onChange={(e)=>{setcpassword(e.target.value)}}/>
                            
                            < div className="text-right">
                            <button  type = "Submit" className="btn mt-3"  >Register</button>
                            
                            </div>
                     </form>
                            
                    </div>   
                        
                </div>

            </div>





        </div>
    );
}

export default Register;