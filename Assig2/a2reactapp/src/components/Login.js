import React, { useState } from 'react';
import SHA256 from 'crypto-js/sha256';
import { Link, useNavigate } from "react-router-dom";

const Login = ({ }) => {
    const [userName, setUsername] = useState('');
    const [pwd, setPwd] = useState('');
    const [login, setLogin] = useState(false);
    const navigate = useNavigate();
    let url = 'http://localhost:5147/api/Login';
    
    function onSubmit(e) {
        e.preventDefault();
        
        fetch(`${url}?userName=${userName}&passwordHash=${SHA256(pwd).toString()}`)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                if (data) {
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
        alert("Login: " + login);
        setUsername(login);
        alert("Password: " + pwd);
        setPwd(pwd);
    }

    return (
        <div className="card col-4 mb-2">
            <h2>Login</h2>
            <form method="post" onSubmit={onSubmit} className="row justify-content-start mb-3">
                <div className="col-3">
                    <input type="text" name="userName" className="form-control" placeholder="Username" />
                </div>
                <div className="col-3">
                    <input type="text" name="password" className="form-control" placeholder="Password" />
                </div>
                <div className="col-3 text-left">
                    <button type="submit" onClick={loginQuery}>Log in</button>
                    <button type="submit">Register</button>
                    <Link className="nav-link" to="/Register">Register</Link>
                </div>
            </form>
        </div>
    )
}

export default Login;