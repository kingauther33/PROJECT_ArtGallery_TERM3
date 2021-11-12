import React from "react";

const Register = () => {
    return (
        <>
            <div className="wrapper">
                <h2>Register</h2>
                <form action="#">
                    <div className="input-box">
                        <input type="text" placeholder="Enter your name" required/>
                    </div>
                    <div className="input-box">
                        <input type="text" placeholder="Enter your email" required/>
                    </div>
                    <div className="input-box">
                        <input type="password" placeholder="Enter your password" required/>
                    </div>
                    <div className="input-box">
                        <input type="password" placeholder="Confirm your password" required/>
                    </div>
                    <div className="policy">
                        <input type="checkbox">
                            <h3>I accept all terms and condittion</h3></input>
                    </div>
                    <div className="input-box button">
                        <input type="submit" value="Register now"/>
                    </div>
                    <div className="text">
                        <h3>Already have an account? <a href="#">Login now</a></h3>
                    </div>
                </form>
            </div>
        </>
    );
}
export default Register;