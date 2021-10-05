import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './LoginForm.css'

const LoginForm = () => {
    return (
        <Container>
            <form className="
            form-container 
        p-5 shadow-lg my-5">
                <h3 style={{ color: 'orange', textShadow: '1px 1px gray' }} className=" text-center">
                    Login or SingUp</h3>
                <div className="mb-3">
                    <label className="form-label"><i className="fas fa-envelope"></i> Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label className="form-label"><i className="fas fa-unlock-alt"></i> Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" />
                </div>
                <div className="mb-3 form-check">
                    <label className="form-check-label">Check me out</label>
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />

                </div>
                <div className="text-center">
                    <Link to=''> <button type="submit" className="btn btn-warning me-4"><i className="fas fa-sign-in-alt"></i> LogIn</button></Link>
                    <Link to=''><Button type="submit" className="btn btn-warning"><i className="fas fa-sign-in-alt"></i> SingUp</Button></Link>
                    <br />
                    <small className=" form-text">Forget Possword?</small>
                </div>

            </form>
        </Container>
    );
};

export default LoginForm;