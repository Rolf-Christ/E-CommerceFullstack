import React from 'react'

function Login() {
  return (
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
                    <form>
                        <div className="form-group">
                            <label for="email">Email</label>
                            <input type="email" id="email" className="form-control" required/>
                        </div>
                        <div className="form-group">
                            <label for="password">Password</label>
                            <input type="password" id="password" className="form-control" require/>
                        </div>
                        <div className="form-group">
                            <div className="form-check">
                                <input type="checkbox" id="remember" className="form-check-input"/>
                                <label for="remember" className="form-check-label ml-2">Remember Me</label>
                            </div>
                        </div>
                        <div className="form-group">
                            <button type="submit" className="btn btn-outline-dark">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    </main>
</div>
  )
}

export default Login