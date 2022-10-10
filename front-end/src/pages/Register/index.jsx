import React from 'react'

function Register() {
  return (
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
                    <form>
                        <div className="form-group">
                            <label for="name">Name</label>
                            <input type="text" id="name" className="form-control" required/>
                        </div>
                        <div className="form-group">
                            <label for="email">Email</label>
                            <input type="email" id="email" className="form-control" required/>
                        </div>
                        <div className="form-group">
                            <label for="password">Password</label>
                            <input type="password" id="password" className="form-control" required/>
                        </div>
                        <div className="form-group">
                            <label for="password-confirm">Confirm Password</label>
                            <input type="password" id="password-confirm" className="form-control" required/>
                        </div>
                        <div className="form-group">
                            <div className="form-check">
                                <input type="checkbox" id="agree" className="form-check-input" required/>
                                <label for="agree" className="form-check-label ml-2">I agree to Terms and Conditions</label>
                            </div>
                        </div>
                        <div className="form-group">
                            <button type="submit" className="btn btn-outline-dark">Register</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    </main>
</div>
  )
}

export default Register