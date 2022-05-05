import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { NavLink } from "react-router-dom";
const Login = () => {

    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const auth = localStorage.getItem('users');
        if (auth) {
            navigate("/")
        }
    }, [])

    const handleLogin = async () => {
        let result = await fetch("http://localhost:5000/login", {
            method: 'post',
            body: JSON.stringify({ email, password }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        result = await result.json();
        console.warn(result)
        if (result.auth) {
            localStorage.setItem('users', JSON.stringify(result.users));
            localStorage.setItem('token', JSON.stringify(result.auth));
            navigate("/")
        } else {
            alert("Please enter connect details")
        }
    }

    return (
        <>
            <section className="signin">
                <div className="container mt-5">
                    <div className="signin-content">
                        <div className="signin-form text-center">
                            <h2 className="form-title">Login</h2>
                            <form className="signin-form-group" id="signin-form">
                                <div className="form-group">
                                    <label htmlFor="email">
                                        <i className="zmdi zmdi-email"></i>
                                    </label>
                                    <input type="email" name="email" id="email"
                                        placeholder="Enter your email"
                                        onChange={(e) => setEmail(e.target.value)} value={email} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password">
                                        <i className="zmdi zmdi-lock"></i>
                                    </label>
                                    <input type="password" name="password" id="password"
                                        placeholder="Enter your password"
                                        onChange={(e) => setPassword(e.target.value)} value={password} />
                                </div>
                                <div className="form-group">
                                    <button onClick={handleLogin} className="form-submit" type="submit"  
                                    name="login" id="login" value="login">Login</button><br />
                                </div>
                                <NavLink to="/register" className="register-link">New Register</NavLink>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Login;