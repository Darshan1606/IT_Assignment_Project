import React, { Component } from "react";

export default class Login extends Component {
    render() {
        return (
            <form class="form-group col-md-6 m-5">
                <h3>Log In</h3>

                <div className="form-group mb-3">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group mb-3">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>

                <div className="form-group mb-3">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                <button type="submit" className="btn btn-primary btn-block mb-3">Submit</button>
                <p className="forgot-password text-right mb-3">
                    Forgot <a href=" #">password?</a>
                </p>
            </form>
        );
    }
}