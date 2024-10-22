import React, { useState } from 'react';
import SHA256 from 'crypto-js/sha256';

const Register = ({ }) => {

    return (
        <div className="card col-4 mb-2">
            <h2>Login</h2>
            <form method="post" className="row justify-content-start mb-3">
                <div className="col-3">
                    <input type="text" name="username" className="form-control" placeholder="Username" />
                </div>
                <div className="col-3">
                    <input type="text" name="password" className="form-control" placeholder="Password" />
                </div>
                <div className="col-3 text-left">
                    <button type="submit">Log in</button>
                    <button type="submit">Register</button>
                </div>
            </form>
        </div>
    )
}

export default Register;