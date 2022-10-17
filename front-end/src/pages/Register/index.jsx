import React, { useState } from 'react'

import Footer from '../../components/Footer'
import Header from '../../components/Header'
import logo from '../../assets/images/logo.png'

function Register() {


  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Submit' + { name, email, password, confirmPassword })
    
  }

  return (
    <>
      <div className="container-fluid">
        <div className="row min-vh-100">
          <div className="col-12">
            <Header logo={logo} />
          </div>

          <div className="col-12">
            <div className="row">
              <div className="col-12 mt-3 text-center text-uppercase">
                <h2>Register</h2>
              </div>
            </div>

            <main className="row">
              <div className="col-lg-4 col-md-6 col-sm-8 mx-auto bg-white py-3 mb-4">
                <div className="row">
                  <div className="col-12">
                    <form onSubmit={handleSubmit}>
                      <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input
                          type="text"
                          id="name"
                          className="form-control"
                          required="required"
                          onChange={(e) => setName(e.target.value)}
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                          type="email"
                          id="email"
                          className="form-control"
                          required="required"
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input
                          type="password"
                          id="password"
                          className="form-control"
                          required="required"
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="password-confirm">
                          Confirm Password
                        </label>
                        <input
                          type="password"
                          id="password-confirm"
                          className="form-control"
                          required="required"
                          onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                      </div>
                      <div className="form-group">
                        <div className="form-check">
                          <input
                            type="checkbox"
                            id="agree"
                            className="form-check-input"
                            required="required"
                          />
                          <label
                            htmlFor="agree"
                            className="form-check-label ml-2"
                          >
                            I agree to Terms and Conditions
                          </label>
                        </div>
                      </div>
                      <div className="form-group">
                        <button type="submit" className="btn btn-outline-dark">
                          Register
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </main>
          </div>
          <div className="col-12 align-self-end">
            <Footer />
          </div>
        </div>
      </div>
    </>
  )
}

export default Register
