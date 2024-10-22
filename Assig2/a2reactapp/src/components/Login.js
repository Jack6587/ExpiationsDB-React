import React, { useState } from 'react';
import SHA256 from 'crypto-js/sha256';

const Login = ({ }) => {
    const [username, setUsername] = 'cool_fred';
    const [pwd, setPwd] = 'hunter2';
    const [login, setLogin] = useState(false);
    let url = 'http://localhost:5147/api/Login';

    React.useEffect(() => {
        fetch(`${url}?username=${username}&passwordHash=${SHA256(pwd)}`)
            .then(response => response.json())
            .then(data => setLogin(data))
            .catch(err => {
                console.log(err);
            });
    }, [])

    return (
        <div className="card col-4 mb-2">
            <h2>Login</h2>
            <form method="post" className="row justify-content-start mb-3">
                <div className="col-3">
                    <input type="text" name="username" className="form-control" placeholder="Username" />
                </div>
                <div className="col-3">
                    <input type="text" name="password" className="form-control" placeholder="Password"/>
                </div>
                <div className="col-3 text-left">
                    <button type="submit">Log in</button>
                    <button type="submit">Register</button>
                </div>
            </form>
        </div>
    )
}

export default Login;