import React from 'react'

import LatestProducts from '../../components/LatestProducts'
import Slider from '../../components/Slider'
import TopSellingProducts from '../../components/TopSellingProducts'
import BottomMain from '../../components/BottomMain'
import FeaturedProducts from '../../components/FeaturedProducts'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import {Outlet} from 'react-router-dom'

function Home() {
  return (
    <>
      <div className="container-fluid">
        <div className="row min-vh-100">
          <div className="col-12">
            <Header />
          </div>

          <div className="col-12">
            <main className="row">
              <Slider />
              <FeaturedProducts />
              <LatestProducts />
              <TopSellingProducts />
              <BottomMain />
            </main>
          </div>

          <div className="col-12 align-self-end">
            <Footer />
          </div>
        </div>
      </div>
      <Outlet/>
    </>
  )
}

export default Home
