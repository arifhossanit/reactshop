import React from 'react'

export default function Registration() {
  return (
    <>
        <div className="container vh-100">
            <div className="row my-5">
                <div className="col-md-4 m-auto bg-white rounded p-5">
                    <h4>Hell<i className="fas fa-power-off fs-6"></i>! let's get started </h4>
                    <h6 className="fw-light">Sign up to continue.</h6>
                    <form action="/register" method="POST" className="mt-4">
                        
                        <div className="form-group">
                            <label for="name">Full Name</label>
                            <input type="text" className="form-control" id="name" name="name" placeholder="Name" />
                            
                        </div>
                        <div className="form-group mt-3">
                            <label for="email">Email Id</label>
                            <input type="email" className="form-control" id="email" name="email" placeholder="Email"/>
                            
                        </div>
                        <div className="form-group mt-3">
                            <label for="password">Password</label>
                            <input type="password" className="form-control" id="password" name="password" placeholder="Password"/>
                            
                        </div>
                        <div className="form-group mt-3">
                            <label for="confirm_password">Password</label>
                            <input type="password" className="form-control" id="confirm_password" name="confirm_password" placeholder="Retype password"/>
                            
                        </div>

                        <div id="emailHelp" className="form-text">Have an account? <a className="text-decoration-none" href="/login">Login</a></div>
                        
                        <div className="d-grid mt-3">
                            <button type="submit" className="btn btn-primary rounded-pill" name="register">Register</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </>
  )
}
