import React from 'react'

export default function Product() {
  return (
    <>
        {/* Product-page */}
        <div className="row my-4 container bg-light m-auto">
            <div className="col-12 col-md-6">
                <img src="" alt="Product image" className="card-img" /> 
            </div>
            <div className="col-12 col-md-6 mt-5">
                <h4>Product Name</h4> 
                <div className="ratings text-warning">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star-half-alt"></i>
                    <i className="fa fa-star-o"></i>
                    (2)
                </div>
                <p><b>Brand: </b> Sony</p>
                <p><b>Category: </b> Cat Name</p>
                <p><b>Price: </b>৳ 50</p>
                <p> 
                    <form action="/add_to_cart" method="post">
                        
                        <label for="qu"><b>Quantity:</b> </label> 
                        <input className="form-control-sm text-center me-3" id="qty" type="number" name="qty" min="1" value="1" style={{maxWidth: '5rem'}} required />
                        <input type="hidden" name="product_id" value="{{$product->id}}" />
                        <br/>
                        <button href="#" className="btn btn-outline-primary mt-3" type="submit" id="button-addon1" >
                            <i className="fas fa-cart-plus px-2"></i> Add To Cart
                        </button>
                    </form>
                    </p> 
            </div>
            <div className="col-12 bg-light mt-3 border-top">
                <div className="p-3 details-2 ">
                    <h4 className="fw-bold">Product Details</h4>
                    <p>Product Description</p>
                </div>
            </div>
        </div>
    </>
  )
}
