import React from 'react'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import logo from '../../assets/images/logo.png'

import {Link} from 'react-router-dom'
import { DetailProduct } from '../../components/DetailProduct'

function Products() {
  return (
    <>
      <div className="container-fluid">
        <div className="row min-vh-100">
          <div className="col-12">
            <Header logo={logo} />
          </div>
          
          {/* <DetailProduct/> */}

          <div className="col-12 align-self-end">
            <Footer />
          </div>
        </div>
      </div>
    </>
  )
}

export default Products
