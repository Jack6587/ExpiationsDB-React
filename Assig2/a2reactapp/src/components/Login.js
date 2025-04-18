﻿import React, { useState } from 'react';
import SHA256 from 'crypto-js/sha256';
import { Link, useNavigate } from "react-router-dom";
import './style/Login.css'

const Login = ({ }) => {
    const [userName, setUsername] = useState('');
    const [pwd, setPwd] = useState('');
    const [login, setLogin] = useState(false);
    const navigate = useNavigate();
    let url = 'http://localhost:5147/api/Login';
    
    function onSubmit(e) {
        e.preventDefault();

        if (!userName || !pwd) {
            alert("Please enter both username and password.");
            return;
        }
        
        fetch(`${url}?userName=${userName}&passwordHash=${SHA256(pwd).toString()}`)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                if (data) {
                    alert("Login success!");
                    navigate("/Dashboard");
                } else {
                    alert("Login failed");
                }
            })
            .catch(err => {
                console.log(err);
            });
    }

    function loginQuery(evt) {
        const login = document.querySelector('[name="userName"]').value;
        const pwd = document.querySelector('[name="password"]').value;
        setUsername(login);
        setPwd(pwd);
    }

    return (
        <div className="page-container">
            <div className="card">
                <h2>Login</h2>
                <form method="post" onSubmit={onSubmit} className="row justify-content-start mb-3">
                    <div className="col-12 mb-3">
                        <input type="text" name="userName" className="form-control" placeholder="Username" />
                    </div>
                    <div className="col-12 mb-3">
                        <input type="text" name="password" className="form-control" placeholder="Password" />
                    </div>
                    <div className="col-12 text-left">
                        <button type="submit" onClick={loginQuery}>LOGIN</button>
                        <Link className="nav-link" to="/Register">Register</Link>
                    </div>
                </form>
            </div>
        </div>

    )
}

export default Login;