import BottomMain from './components/BottomMain'
import FeaturedProducts from './components/FeaturedProducts'
import Footer from './components/Footer'
import Header from './components/Header'
import LatestProducts from './components/LatestProducts'
import Slider from './components/Slider'
import TopSellingProducts from './components/TopSellingProducts'

import logo from './assets/images/logo.png'
import MsgInfo from './components/MsgInfo'

function App() {
  return (
    <>
    <div className="container-fluid">
      <div className="row min-vh-100">
        <div className="col-12">
          <Header logo={logo}/>
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

    <MsgInfo />
    </>
  )
}

export default App
