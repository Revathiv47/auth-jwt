import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom';
import './Login.css';
import env from "./settings";


function Login() {
    const [username, setusername] = useState("");
    const [password, setpassword] = useState("");
    let navigate = useNavigate()
    let handleSubmit = async (e) => {
        e.preventDefault()
        try {
            let logindata = await axios.post(`${env.api}/login`, { username, password })
            console.log(logindata)
            window.localStorage.setItem("app_token",logindata.data.token)
            alert("logined successfully");
            navigate("/todo")
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div className="login-screen">
        <center>
            <form onSubmit={handleSubmit} className="login-screen__form">
                <h2 class="h3 mb-3 fw-normal">Login</h2>

                <div class="form-floating">
                    <input type="email" value={username} onChange={e => setusername(e.target.value)} class="form-control" id="floatingInput" placeholder="name@example.com" />
                    <label for="floatingInput">Email address</label>
                </div>
                <div class="form-floating">
                    <input type="password" value={password} onChange={e => setpassword(e.target.value)} class="form-control" id="floatingPassword" placeholder="Password" />
                    <label for="floatingPassword">Password</label>
                </div>

                
                <input class="w-100 btn btn-lg btn-primary" type="submit" value="Sign in" />
                <span className="login-screen__subtext">
          Don't have an account? <Link to="/register">Register</Link>
        </span>
               </form>
              
   </center>
        </div>
    )
}

export default Login