import React from "react";
import {Link} from "react-router-dom";

const Register = () => {
    return (
        <div className="register">
            <div className="register_main">
                <h2 className="register_text">Registration</h2>
                <form action="#" className="register_form">
                    <div className="input-box">
                        <input className="register-input" type="text" placeholder="Enter your name" required/>
                    </div>
                    <div className="input-box">
                        <input className="register-input" type="text" placeholder="Enter your email" required/>
                    </div>
                    <div className="input-box">
                        <input className="register-input" type="password" placeholder="Create password" required/>
                    </div>
                    <div className="input-box">
                        <input className="register-input" type="password" placeholder="Confirm password" required/>
                    </div>
                    <div className="policy">
                        <input  type="checkbox"/>
                        <h3 className="register-h3">I accept all terms & condition</h3>

                    </div>
                    <div className="input-box button">
                        <input className="register-input register-box" type="Submit" value="Register Now"/>
                    </div>
                    <div className="text">
                        <h3 className="register-h3-text register-h3">Already have an account? <Link className="register-link" to='/'>Login now</Link></h3>
                    </div>
                </form>
            </div>
        </div>
    );
}
export default Register;