import React,{useState} from 'react'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import logo from '../../assets/images/logo.png'

function Login() {
  
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

 
  const handleSubmit = () => {
    console.log('Submit' + {email} + {password})
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
                <h2>Login</h2>
              </div>
            </div>

            <main className="row">
              <div className="col-lg-4 col-md-6 col-sm-8 mx-auto bg-white py-3 mb-4">
                <div className="row">
                  <div className="col-12">
                    <form onSubmit={handleSubmit}>
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
                        <div className="form-check">
                          <input
                            type="checkbox"
                            id="remember"
                            className="form-check-input"
                          />
                          <label
                            htmlFor="remember"
                            className="form-check-label ml-2"
                          >
                            Remember Me
                          </label>
                        </div>
                      </div>
                      <div className="form-group">
                        <button type="submit" className="btn btn-outline-dark">
                          Login
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

export default Login
