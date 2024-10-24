import React, { useState } from 'react';
import SHA256 from 'crypto-js/sha256';
import { Link, useNavigate } from "react-router-dom";

const Register = ({ }) => {
    const [userName, setUsername] = useState('');
    const [pwd, setPwd] = useState('');
    const navigate = useNavigate();
    let url = 'http://localhost:5147/api/Register';

    function onSubmit(e) {
        e.preventDefault();

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
                    alert("Login failed");
                }
            })
            .catch(err => {
                console.log(err);
            });
    }

    function registerQuery(evt) {
        const login = document.querySelector('[name="userName"]').value;
        const pwd = document.querySelector('[name="password"]').value;
        alert("Login: " + login);
        setUsername(login);
        alert("Password: " + pwd);
        setPwd(pwd);
    }

    return (
        <div className="card col-4 mb-2">
            <h2>Register</h2>
            <form method="post" onSubmit={onSubmit} className="row justify-content-start mb-3">
                <div className="col-3">
                    <input type="text" name="userName" className="form-control" placeholder="Username" />
                </div>
                <div className="col-3">
                    <input type="text" name="password" className="form-control" placeholder="Password" />
                </div>
                <div className="col-3 text-left">
                    <button type="submit" onClick={registerQuery}>Register</button>
                    <Link className="nav-link" to="/Login">Login</Link>
                </div>
            </form>
        </div>
    )
}

export default Register;