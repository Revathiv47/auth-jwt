import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom';
import './Register.css';
import env from "./settings";

function Register() {
    const [username, setusername] = useState("");
    const [password, setpassword] = useState("");
    const [confirmpassword, setconfirmpassword] = useState("");
    const navigate = useNavigate()
    let handleSubmit = async (e) => {
        e.preventDefault()
        console.log({ username, password, confirmpassword })
        try {
            await axios.post(`${env.api}/register`, { username, password });
            alert("Registered successfully");
            navigate("/login")
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div className="register-screen">
        <center>
            <form onSubmit={(e) => {
                handleSubmit(e)
            }} className="register-screen__form" >
                <h1 class="h3 mb-3 fw-normal">Please Register</h1>

                <div class="form-floating">
                    <input type="email" value={username} onChange={e => setusername(e.target.value)} class="form-control" id="floatingInput" placeholder="name@example.com" />
                    <label for="floatingInput">Email address</label>
                </div>
                <div class="form-floating">
                    <input type="password" value={password} onChange={e => setpassword(e.target.value)} class="form-control" id="floatingPassword" placeholder="Password" />
                    <label for="floatingPassword">Password</label>
                </div>
                <div class="form-floating">
                    <input type="password" value={confirmpassword} onChange={e => setconfirmpassword(e.target.value)} class="form-control" id="floatingPassword" placeholder="Password" />
                    <label for="floatingPassword">Confirm Password</label>
                </div>

                <div class="checkbox mb-3">
                    <label>
                        <input type="checkbox" value="remember-me" /> Remember me
                    </label>
                </div>
                <input class="w-100 btn btn-lg btn-primary" type="submit" value="Sign up" />
                <span className="register-screen__subtext">
          Already have an account? <Link to="/login">Login</Link>
        </span>
            </form>          
     

            
            </center>
        </div>
   
    )
}

export default Register