//Browserrouter saved in index.js
import React, { useState } from 'react'
import './signup.css'
import pic1 from "./pic/amazon.jpeg"
import { NavLink } from 'react-router-dom'

const Signup = () => {
    const [udata, setUdata] = useState({
        fname:"",
        email: "",
        mobile:"",
        password: "",
        cpassword:""
    });
    console.log(udata);

    const adddata = (e) => {
        const { name, value } = e.target;

        setUdata(()=>{
            return{
                ...udata,
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
                            <h1>Sign-Up</h1>
                            <div className="form_data">
                                <label htmlFor="fname">Your name</label>
                                <input type="text" name='fname' id='fname' 
                                //this is one way of doing onhange
                                onChange={(e)=>setUdata({...udata,fname:e.target.value})} 
                                value={udata.fname}/>
                            </div>
                            <div className="form_data">
                                <label htmlFor="email">Email</label>
                                <input type="text" name='email' 
                                id='email' 
                                //rest are the other way of doing on change
                                onChange={adddata} 
                                value={udata.email}/>
                            </div>
                            <div className="form_data">
                                <label htmlFor="number">Mobile</label>
                                <input type="text" name='mobile' 
                                id='mobile' 
                                onChange={adddata} 
                                value={udata.mobile}/>
                            </div>
                            <div className="form_data">
                                <label htmlFor="password">Password</label>
                                <input type="password" name='password' 
                                id='password' placeholder='At least 6 char' 
                                onChange={adddata} 
                                value={udata.password}/>
                            </div>
                            <div className="form_data">
                                <label htmlFor="password">Password Again</label>
                                <input type="password" name='cpassword' 
                                id='cpassword' 
                                onChange={adddata} 
                                value={udata.cpassword}/>
                            </div>
                            <button className='signin_btn'>Continue</button>
                            <div className="signin_info">
                                <p>Already have an account?</p>
                                <NavLink to={'/login'} >Signin</NavLink>
                            </div>
                        </form>
                    </div>

                </div>
            </section>
        </>
    )
}

export default Signup