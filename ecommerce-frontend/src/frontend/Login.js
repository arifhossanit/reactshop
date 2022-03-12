import React from 'react'

export default function Login() {
  return (
    <>
        <div className="container vh-100">
            <div className="row my-5">
                <div className="col-md-4 m-auto bg-white rounded p-5">
                    <h4>Hell<i className="fas fa-power-off fs-6"></i>! let's get started </h4>
                    <h6 className="fw-light">Sign in to continue.</h6>
                    
                        <div className="alert alert-success"></div>
                    
                    <form action="/user_login" method="POST" className="mt-4">
                        
                        <div className="form-group mt-3">
                            <label for="email">Email address</label>
                            <input type="email" className="form-control" id="email" name="email" placeholder="Email" />
                        </div>
                        <div className="form-group mt-3">
                            <label for="password">Password</label>
                            <input type="password" className="form-control" id="password" name="password" placeholder="Password" />
                        </div>
                        <div id="emailHelp" className="form-text">Don't have an account? <a className="text-decoration-none" href="/register">Create</a></div>
                        
                        <div className="d-grid mt-3">
                            <button type="submit" className="btn btn-primary rounded-pill" name="login">LOGIN</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </>
  )
}
