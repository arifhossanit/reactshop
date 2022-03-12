import React from 'react';
import { Link } from 'react-router-dom';

export default function CartList() {
  return (
    <>
         {/* search result section */}
        <main className="veiw-h">
            <div className="col-8 m-auto bg-white p-3 mt-3">
                <div className="row g-1 border-bottom">
                    <h2 className="col-9">Shopping Cart</h2>
                    <Link className="btn btn-primary col-3 mb-1" to="/checkout">Order Now</Link>
                </div>
                
                <div className="border-bottom">
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src="" className="img-fluid rounded-start" alt="product pic" />
                        </div>
                        <div className="col-md-6">
                            <div className="card-body">
                                <a href="detail/{{$product['id']}}" className="text-decoration-none underline">
                                    <h5 className="card-title">product name</h5>
                                    <p className="card-text text-truncate">product description</p>
                                </a>
                                <p className="card-text">
                                    <small className="text-danger"><b> Unit price:</b> ৳ product price</small>
                                    <small className="text-danger"><b> Qty:</b>product qty</small>
                                </p>
                            </div>
                        </div>
                        <div className="col-md-2">
                            <a className="btn btn-warning mt-3" href=" " >Remove Item</a>
                        </div>
                    </div>
                </div>
                
                <div className="text-danger fs-4 text-center">Soory, Cart is empty!!</div>
                
            </div>
        </main>
    </>
  )
}
