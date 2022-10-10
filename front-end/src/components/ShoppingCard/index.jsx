import React from 'react'

function ShoppingCard() {
  return (
    <div className="col-12">
      <div className="row">
        <div className="col-12 mt-3 text-center text-uppercase">
          <h2>Shopping Cart</h2>
        </div>
      </div>

      <main className="row">
        <div className="col-12 bg-white py-3 mb-3">
          <div className="row">
            <div className="col-lg-6 col-md-8 col-sm-10 mx-auto table-responsive">
              <form className="row">
                <div className="col-12">
                  <table className="table table-striped table-hover table-sm">
                    <thead>
                      <tr>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Qty</th>
                        <th>Amount</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <img src='https://cdn.pixabay.com/photo/2016/08/17/04/43/template-1599667_960_720.png' alt='images' className="img-fluid" />
                          Optoma 4K HDR Projector
                        </td>
                        <td>$1,500</td>
                        <td>
                          <input type="number" min="1" value="1" />
                        </td>
                        <td>$1,500</td>
                        <td>
                          <button className="btn btn-link text-danger">
                            <i className="fas fa-times"></i>
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <img
                            src="https://cdn.pixabay.com/photo/2016/08/17/04/43/template-1599667_960_720.png" alt='images'
                            className="img-fluid"
                          />
                          HP Envy Specter 360
                        </td>
                        <td>$2,500</td>
                        <td>
                          <input type="number" min="1" value="1" />
                        </td>
                        <td>$2,500</td>
                        <td>
                          <button className="btn btn-link text-danger">
                            <i className="fas fa-times"></i>
                          </button>
                        </td>
                      </tr>
                    </tbody>
                    <tfoot>
                      <tr>
                        <th colspan="3" className="text-right">
                          Total
                        </th>
                        <th>$4,000</th>
                        <th></th>
                      </tr>
                    </tfoot>
                  </table>
                </div>
                <div className="col-12 text-right">
                  <button
                    className="btn btn-outline-secondary mr-3"
                    type="submit"
                  >
                    Update
                  </button>
                  <a href="https://cdn.pixabay.com/photo/2016/08/17/04/43/template-1599667_960_720.png" className="btn btn-outline-success">
                    Checkout
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default ShoppingCard
