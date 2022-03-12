import React from 'react'
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <>
        {/* Header banner */}
        <header className="py-5" style={{backgroundColor: '#0567fa'}}>
            <div className="container px-4 px-lg-5 my-5">
                <div className="text-center text-white">
                    <h1 className="display-4 fw-bolder">Shop in style</h1>
                    <p className="lead fw-normal text-white-50 mb-0">One-stop e-commerce solution</p>
                </div>
            </div>
        </header>
        <section className="py-5">
            <div className="container px-4 px-lg-5 mt-5">
                <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                    
                    <div className="col mb-5">
                        <div className="card h-100">
                            {/* Sale badge */}
                            <div className="badge bg-dark text-white position-absolute" style={{top: '0.5rem', right: '0.5rem'}}>Sale</div>
                            {/* Product image */}
                            <img className="card-img-top" src="" alt="pic" />
                            {/* Product details */}
                            <div className="card-body p-4">
                                <div className="text-center">
                                    {/* Product name */}
                                    <h5 className="fw-bolder">Product name</h5>
                                    {/* Product price */}
                                    ৳
                                </div>
                            </div>
                            {/* Product actions */}
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div className="text-center"><Link className="btn btn-outline-dark mt-auto" to="/product">View</Link></div>
                            </div>
                        </div>
                    </div>
                
                </div>
            </div>
        </section>
    </>
  )
}