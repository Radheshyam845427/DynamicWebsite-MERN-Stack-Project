import React, { useEffect, useState, user } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";
import { NavLink } from "react-router-dom";

const Register = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [cpassword, setCpassword] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        const auth = localStorage.getItem('users');
        if (auth) {
            navigate('/')
        }
    }, [])

    const collectData = async () => {
        console.warn(name, email, phone, password, cpassword);
        let result = await fetch("http://localhost:5000/register", {
            method: 'post',
            body: JSON.stringify({ name, email, phone, password, cpassword }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        result = await result.json();
        console.warn(result);
        if(result.auth){
        localStorage.setItem("users", JSON.stringify(result.result));
        localStorage.setItem('token', JSON.stringify(result.auth));
        navigate("/")
    
    }
    }

    return (
        <>
            <section className="signin">
                <div className="container mt-5">
                    <div className="signin-content">
                        <div className="signin-form text-center">
                            <h2 className="form-title">Register</h2>
                            <form className="signin-form-group" id="signin-form">
                                <div className="form-group">
                                    <label htmlFor="name">
                                        <i className="zmdi zmdi-account"></i>
                                    </label>
                                    <input type="text" name="name" id="name"
                                        placeholder="Enter your name"
                                        value={name} onChange={(e) => setName(e.target.value)} />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="email">
                                        <i className="zmdi zmdi-email"></i>
                                    </label>
                                    <input type="email" name="email" id="email"
                                        placeholder="Enter your email"
                                        value={email} onChange={(e) => setEmail(e.target.value)} />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="phone">
                                        <i className="zmdi zmdi-phone-in-talk"></i>
                                    </label>
                                    <input type="number" name="phone" id="phone"
                                        placeholder="Enter your phone"
                                        value={phone} onChange={(e) => setPhone(e.target.value)} />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="password">
                                        <i className="zmdi zmdi-lock"></i>
                                    </label>
                                    <input type="password" name="password" id="password"
                                        placeholder="Enter your password"
                                        value={password} onChange={(e) => setPassword(e.target.value)} />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="cpassword">
                                        <i className="zmdi zmdi-lock"></i>
                                    </label>
                                    <input type="password" name="cpassword" id="cpassword"
                                        placeholder="Enter confirm your password"
                                        value={cpassword} onChange={(e) => setCpassword(e.target.value)} />
                                </div>

                                <div className="form-group">
                                    <button onClick={collectData} className="form-submit" type="submit" name="register"
                                        id="register" value="register">Register</button><br />
                                </div>
                                <NavLink to="/login" className="register-link">I am already register</NavLink>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};
export default Register;