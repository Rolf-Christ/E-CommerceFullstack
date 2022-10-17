import { Routes, Route } from 'react-router-dom'
import MsgInfo from './components/MsgInfo'
import ShoppingCard from './pages/ShoppingCard'
import CategoryProducts from './pages/CategoryProducts'
import Home from './pages/Home'
import Login from './pages/Login'
import Products from './pages/Products'
import Register from './pages/Register'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/articles" element={<CategoryProducts />} />
        <Route path="/produit" element={<Products />} />
        <Route path="/card" element={<ShoppingCard />} />
        <Route path="/*" element={<MsgInfo />} />
      </Routes>

      {/* "homepage": "Rolf-Christ.github.io/E-CommerceFullstack", */}
    </>
  )
}

export default App
