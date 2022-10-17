import React from 'react'
import { Link } from 'react-router-dom'
import logo from './../../assets/images/logo.png'

function Header() {
  return (
    <header className="row">
      {/* <!-- Top Nav --> */}
      <div className="col-12 bg-dark py-2 d-md-block d-none">
        <div className="row">
          <div className="col-auto mr-auto">
            <ul className="top-nav">
              <li>
                <Link to="tel:+123-456-7890">
                  <i className="fa fa-phone-square mr-2"></i>+242-456-7890
                </Link>
              </li>
              <li>
                <Link to="mailto:mail@ecom.com">
                  <i className="fa fa-envelope mr-2"></i>mail@ecom.com
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-auto">
            <ul className="top-nav">
              <li>
                <Link to="/login">
                  <i className="fas fa-sign-in-alt mr-2"></i>Login
                </Link>
              </li>
              <li>
                <Link to="/register">
                  <i className="fas fa-user-edit mr-2"></i>Register
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/*  <!-- Top Nav -->

        <!-- Header --> */}
      <div className="col-12 bg-white pt-4">
        <div className="row">
          <div className="col-lg-auto">
            <div className="site-logo text-center text-lg-left">
              <Link to="/">
                <img src={logo} alt="Mon logo" />
              </Link>
            </div>
          </div>
          <div className="col-lg-5 mx-auto mt-4 mt-lg-0">
            <form action="#">
              <div className="form-group">
                <div className="input-group">
                  <input
                    type="search"
                    className="form-control border-dark"
                    placeholder="Search..."
                    required
                  />
                  <div className="input-group-append">
                    <button className="btn btn-outline-dark">
                      <i className="fas fa-search"></i>
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div className="col-lg-auto text-center text-lg-left header-item-holder">
            <Link to="/" className="header-item">
              <i className="fas fa-heart mr-2"></i>
              <span id="header-favorite">0</span>
            </Link>
            <Link to="" className="header-item">
              <i className="fas fa-shopping-bag mr-2"></i>
              <span id="header-qty" className="mr-3">
                2
              </span>
              <i className="fas fa-money-bill-wave mr-2"></i>
              <span id="header-price">$4,000</span>
            </Link>
          </div>
        </div>

        {/* <!-- Nav --> */}
        <div className="row">
          <nav className="navbar navbar-expand-lg navbar-light bg-white col-12">
            <button
              className="navbar-toggler d-lg-none border-0"
              type="button"
              data-toggle="collapse"
              data-target="#mainNav"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="mainNav">
              <ul className="navbar-nav mx-auto mt-2 mt-lg-0">
                <li className="nav-item active">
                  <Link className="nav-link" to="/">
                    Home <span className="sr-only">(current)</span>
                  </Link>
                </li>
                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle"
                    to=""
                    id="electronics"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Electronics
                  </Link>
                  <div className="dropdown-menu" aria-labelledby="electronics">
                    <Link className="dropdown-item" to="/articles">
                      Computers
                    </Link>
                    <Link className="dropdown-item" to="/">
                      Mobile Phones
                    </Link>
                    <Link className="dropdown-item" to="/">
                      Television Sets
                    </Link>
                    <Link className="dropdown-item" to="/">
                      DSLR Cameras
                    </Link>
                    <Link className="dropdown-item" to="/">
                      Projectors
                    </Link>
                  </div>
                </li>
                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle"
                    to="/"
                    id="fashion"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Fashion
                  </Link>
                  <div className="dropdown-menu" aria-labelledby="fashion">
                    <Link className="dropdown-item" to="/">
                      Men's
                    </Link>
                    <Link className="dropdown-item" to="/">
                      Women's
                    </Link>
                    <Link className="dropdown-item" to="/">
                      Children's
                    </Link>
                    <Link className="dropdown-item" to="/">
                      Accessories
                    </Link>
                    <Link className="dropdown-item" to="/">
                      Footwear
                    </Link>
                  </div>
                </li>
                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle"
                    to="/"
                    id="books"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Books
                  </Link>
                  <div className="dropdown-menu" aria-labelledby="books">
                    <Link className="dropdown-item" to="/">
                      Adventure
                    </Link>
                    <Link className="dropdown-item" to="/">
                      Horror
                    </Link>
                    <Link className="dropdown-item" to="/">
                      Romantic
                    </Link>
                    <Link className="dropdown-item" to="/">
                      Children's
                    </Link>
                    <Link className="dropdown-item" to="/">
                      Non-Fiction
                    </Link>
                  </div>
                </li>
              </ul>
            </div>
          </nav>
        </div>
        {/* <!-- Nav --> */}
      </div>
      {/* <!-- Header --> */}
    </header>
  )
}

export default Header
