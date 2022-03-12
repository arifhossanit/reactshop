import React from 'react'

export default function Checkout() {
  return (
    <>
        {/* search result section */}
        <div className="col-8 m-auto bg-white p-3 mt-3">
            <div className="row g-1 border-bottom">
                <h3 className="col-9">Shopping Cart</h3>
            </div>
            <div className="border-bottom">
            <table className="table table-striped table-hover">
                <tbody>
                    <tr>
                        <td>Price</td>
                        <td>৳ 500</td>
                    </tr>
                    <tr>
                        <td>Tax</td>
                        <td>৳ 0</td>
                    </tr>
                    <tr>
                        <td>Delivary</td>
                        <td>৳ 100</td>
                    </tr>
                    <tr>
                        <td>Total Amount</td>
                        <td>৳ 500</td>
                    </tr>
                </tbody>
            </table>

            <form action="/orderplace" method="POST">
                
                <div className="form-group">
                    <label for="address">Delivery Address:</label>
                    <textarea className="form-control" name="address" id="address" cols="30" rows="2" required />
                </div>
                <div className="form-group">
                    <label for="payment">Payment Method</label>
                    <p><input type="radio" name="payment" id="payment" value="cash" />Online Payment</p>
                    <p><input type="radio" name="payment" id="payment" value="cash" />EMI Payment</p>
                    <p><input type="radio" name="payment" id="payment" value="cash" />Cash on Delivery</p>
                </div>
                <button className="btn btn-primary" type="submit">Order Now</button>
            </form>
            </div>
        </div>
    </>
  )
}
