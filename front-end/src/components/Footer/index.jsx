import React, {useState} from 'react'
import { Link } from 'react-router-dom'



function Footer() {

  const [newsletterSubscribe, setNewsletterSubscribe] = useState('')

  const handleSubmit = (e) => {
    console.log(newsletterSubscribe)
  }

  return (
    <footer className="row">
      <div className="col-12 bg-dark text-white pb-3 pt-5">
        <div className="row">
          <div className="col-lg-2 col-sm-4 text-center text-sm-left mb-sm-0 mb-3">
            <div className="row">
              <div className="col-12">
                <div className="footer-logo">
                  <Link to="/">E-Commerce</Link>
                </div>
              </div>
              <div className="col-12">
                <address>
                  221B Baker Street <br />
                  London, England
                </address>
              </div>
              <div className="col-12">
                <Link to="/" className="social-icon">
                  <i className="fab fa-facebook-f"></i>
                </Link>
                <Link to="/" className="social-icon">
                  <i className="fab fa-twitter"></i>
                </Link>
                <Link to="/" className="social-icon">
                  <i className="fab fa-pinterest-p"></i>
                </Link>
                <Link to="/" className="social-icon">
                  <i className="fab fa-instagram"></i>
                </Link>
                <Link to="/" className="social-icon">
                  <i className="fab fa-youtube"></i>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-8 text-center text-sm-left mb-sm-0 mb-3">
            <div className="row">
              <div className="col-12 text-uppercase">
                <h4>Who are we?</h4>
              </div>
              <div className="col-12 text-justify">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam imperdiet vel ligula vel sodales. Aenean vel
                  ullamcorper purus, ac pharetra arcu. Nam enim velit, ultricies
                  eu orci nec, aliquam efficitur sem. Quisque in sapien a sem
                  vestibulum volutpat at eu nibh. Suspendisse eget est metus.
                  Maecenas mollis quis nisl ac malesuada. Donec gravida tortor
                  massa, vitae semper leo sagittis a. Donec augue turpis, rutrum
                  vitae augue ut, venenatis auctor nulla. Sed posuere at erat in
                  consequat. Nunc congue justo ut ante sodales, bibendum blandit
                  augue finibus.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-sm-3 col-5 ml-lg-auto ml-sm-0 ml-auto mb-sm-0 mb-3">
            <div className="row">
              <div className="col-12 text-uppercase">
                <h4>Quick Links</h4>
              </div>
              <div className="col-12">
                <ul className="footer-nav">
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/">Contact Us</Link>
                  </li>
                  <li>
                    <Link to="/">About Us</Link>
                  </li>
                  <li>
                    <Link to="/">Privacy Policy</Link>
                  </li>
                  <li>
                    <Link to="/">Terms & Conditions</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-1 col-sm-2 col-4 mr-auto mb-sm-0 mb-3">
            <div className="row">
              <div className="col-12 text-uppercase text-underline">
                <h4>Help</h4>
              </div>
              <div className="col-12">
                <ul className="footer-nav">
                  <li>
                    <Link to="/">FAQs</Link>
                  </li>
                  <li>
                    <Link to="/">Shipping</Link>
                  </li>
                  <li>
                    <Link to="/">Returns</Link>
                  </li>
                  <li>
                    <Link to="/">Track Order</Link>
                  </li>
                  <li>
                    <Link to="#">Report Fraud</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 text-center text-sm-left">
            <div className="row">
              <div className="col-12 text-uppercase">
                <h4>Newsletter {newsletterSubscribe}</h4>
              </div>
              <div className="col-12">
                <form onSubmit={handleSubmit} >
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter your email..."
                      required="required"
                      onChange={(e) => setNewsletterSubscribe(e.target.value)}
                      
                    />
                  </div>
                  <div className="form-group">
                    <button className="btn btn-outline-light text-uppercase">
                      Subscribe
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
