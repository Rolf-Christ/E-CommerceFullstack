import React from 'react'


function Header({logo}) {
  return (
    
    <header className="row">
        {/* <!-- Top Nav --> */}
        <div className="col-12 bg-dark py-2 d-md-block d-none">
            <div className="row">
                <div className="col-auto mr-auto">
                    <ul className="top-nav">
                        <li>
                            <a href="tel:+123-456-7890"><i className="fa fa-phone-square mr-2"></i>+242-456-7890</a>
                        </li>
                        <li>
                            <a href="mailto:mail@ecom.com"><i className="fa fa-envelope mr-2"></i>mail@ecom.com</a>
                        </li>
                    </ul>
                </div>
                <div className="col-auto">
                    <ul className="top-nav">
                        <li>
                            <a href="register.html"><i className="fas fa-user-edit mr-2"></i>Register</a>
                        </li>
                        <li>
                            <a href="login.html"><i className="fas fa-sign-in-alt mr-2"></i>Login</a>
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
                        <a href="index.html">
                            <img src={logo} alt='Mon logo' />
                        </a>
                    </div>
                </div>
                <div className="col-lg-5 mx-auto mt-4 mt-lg-0">
                    <form action="#">
                        <div className="form-group">
                            <div className="input-group">
                                <input type="search" className="form-control border-dark" placeholder="Search..." required />
                                <div className="input-group-append">
                                    <button className="btn btn-outline-dark"><i className="fas fa-search"></i></button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="col-lg-auto text-center text-lg-left header-item-holder">
                    <a href="#" className="header-item">
                        <i className="fas fa-heart mr-2"></i><span id="header-favorite">0</span>
                    </a>
                    <a href="cart.html" className="header-item">
                        <i className="fas fa-shopping-bag mr-2"></i><span id="header-qty" className="mr-3">2</span>
                        <i className="fas fa-money-bill-wave mr-2"></i><span id="header-price">$4,000</span>
                    </a>
                </div>
            </div>

            {/* <!-- Nav --> */}
            <div className="row">
                <nav className="navbar navbar-expand-lg navbar-light bg-white col-12">
                    <button className="navbar-toggler d-lg-none border-0" type="button" data-toggle="collapse" data-target="#mainNav">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="mainNav">
                        <ul className="navbar-nav mx-auto mt-2 mt-lg-0">
                            <li className="nav-item active">
                                <a className="nav-link" href="index.html">Home <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="electronics" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Electronics</a>
                                <div className="dropdown-menu" aria-labelledby="electronics">
                                    <a className="dropdown-item" href="category.html">Computers</a>
                                    <a className="dropdown-item" href="category.html">Mobile Phones</a>
                                    <a className="dropdown-item" href="category.html">Television Sets</a>
                                    <a className="dropdown-item" href="category.html">DSLR Cameras</a>
                                    <a className="dropdown-item" href="category.html">Projectors</a>
                                </div>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="fashion" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Fashion</a>
                                <div className="dropdown-menu" aria-labelledby="fashion">
                                    <a className="dropdown-item" href="category.html">Men's</a>
                                    <a className="dropdown-item" href="category.html">Women's</a>
                                    <a className="dropdown-item" href="category.html">Children's</a>
                                    <a className="dropdown-item" href="category.html">Accessories</a>
                                    <a className="dropdown-item" href="category.html">Footwear</a>
                                </div>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="books" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Books</a>
                                <div className="dropdown-menu" aria-labelledby="books">
                                    <a className="dropdown-item" href="category.html">Adventure</a>
                                    <a className="dropdown-item" href="category.html">Horror</a>
                                    <a className="dropdown-item" href="category.html">Romantic</a>
                                    <a className="dropdown-item" href="category.html">Children's</a>
                                    <a className="dropdown-item" href="category.html">Non-Fiction</a>
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