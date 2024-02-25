//Browserrouter saved in index.js
import React, { useState } from 'react'
import './signup.css'
import pic1 from "./pic/amazon.jpeg"
import { NavLink } from 'react-router-dom'

const Sign_in = () => {
    //to get value of sign-in form we use usestate
    const [logdata, setData] = useState({
        email: "",
        password: ""
    });
    console.log(logdata);

    const adddata = (e) => {
        const { name, value } = e.target;

        setData(()=>{
            return{
                ...logdata,
                [name]:value
            }
        })
    }



    return (
        <>
            <section>
                <div className="sign_container">
                    <div className="sign_header">
                        <img src={pic1} alt="amazonlogo" />
                    </div>
                    <div className="sign_form">
                        <form >
                            <h1>Sign-In</h1>
                            <div className="form_data">
                                <label htmlFor="email">Email</label>
                                <input type="text" name='email'
                                    id='email'
                                    onChange={adddata}
                                    value={logdata.password} />
                            </div>
                            <div className="form_data">
                                <label htmlFor="password">Password</label>
                                <input type="password" name='password'
                                    id='password'
                                    placeholder='At least 6 char'
                                    onChange={adddata}
                                    value={logdata.password} />
                            </div>
                            <button className='signin_btn'>Continue</button>
                        </form>
                    </div>
                    <div className="create_accountinfo">
                        {/* navlink added later */}
                        <p>New To Amazon</p>
                        <NavLink to={'/register'} > <button>Create your amazon account </button></NavLink>

                    </div>
                </div>
            </section>
        </>
    )
}

export default Sign_in