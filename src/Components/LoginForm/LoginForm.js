import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const LoginForm = () => {
    return (
        <form className="
        w-50 mx-auto 
        bg-secondary 
        p-5 shadow-lg my-5">
            <h3 className=" text-white">
                <i className="fas fa-sign-in-alt"></i> Login Please</h3>
            <div className="mb-3">
                <label className="form-label text-white"><i className="fas fa-envelope"></i> Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div className="mb-3">
                <label className="form-label text-white"><i className="fas fa-unlock-alt"></i> Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1" />
            </div>
            <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                <label className="form-check-label text-white">Check me out</label>
            </div>
            <Link to=''> <button type="submit" className="btn btn-primary me-4 text-white"><i className="fas fa-sign-in-alt"></i> LogIn</button></Link>
            <Link to=''><Button type="submit" className="btn btn-primary"><i className="fas fa-sign-in-alt"></i> SingUp</Button></Link>

            <br />
            <small >Forget Possword?</small>
        </form>
    );
};

export default LoginForm;