import React, { useState } from 'react';
import SHA256 from 'crypto-js/sha256';
import { Link, useNavigate } from "react-router-dom";
import './style/Login.css'

const Register = ({ }) => {
    const [userName, setUsername] = useState('');
    const [pwd, setPwd] = useState('');
    const navigate = useNavigate();
    let url = 'http://localhost:5147/api/Register';

    function onSubmit(e) {
        e.preventDefault();
        console.log(userName);
        console.log(pwd);
        console.log(SHA256(pwd).toString());

        if (!userName || !pwd) {
            alert("Username and Password are required!");
            return;
        }

        fetch(`${url}?userName=${userName}&passwordHash=${SHA256(pwd).toString()}`)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                if (data) {
                    navigate("/Login");
                } else {
                    alert("Register failed");
                }
            })
            .catch(err => {
                console.log(err);
            });
    }

    function registerQuery(evt) {
        const userName = document.querySelector('[name="userName"]').value;
        const pwd = document.querySelector('[name="password"]').value;
        alert("Username: " + userName);
        setUsername(userName);
        alert("Password: " + pwd);
        setPwd(pwd);
    }

    return (
        <div className="page-container">
            <div className="card">
                <h2>Register</h2>
                <form method="post" onSubmit={onSubmit} className="row justify-content-start mb-3">
                    <div className="col-12 mb-3">
                        <input type="text" name="userName" className="form-control" placeholder="Username" />
                    </div>
                    <div className="col-12 mb-3">
                        <input type="text" name="password" className="form-control" placeholder="Password" />
                    </div>
                    <div className="col-12 text-left">
                        <button type="submit" onClick={registerQuery}>Register</button>
                        <Link className="nav-link" to="/Login">Log in</Link>
                    </div>
                </form>
        </div>
        </div>

    )
}

export default Register;