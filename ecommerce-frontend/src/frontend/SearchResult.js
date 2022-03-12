import React from 'react'

export default function SearchResult() {
  return (
    <>
        {/* search result section */}
        <div className="col-8 m-auto">
            <h3 className="mt-3 text-center">Search items found for ""</h3>
            
            <div className="card my-3  m-auto" style="max-width: 540px;">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src=" " className="img-fluid rounded-start" alt="product pic" />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <a href="" className="text-decoration-none underline">
                                <h5 className="card-title">product name</h5>
                                <p className="card-text">product description</p>
                            </a>
                            <p className="card-text"><small className="text-danger">৳ product price</small></p>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="text-danger fs-4 text-center">Soory, No result found!!</div>
            
        </div>
    </>
  )
}
