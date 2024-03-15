import { Navbar, ItemListContainer, ItemDetailContainer, Footer, Cart, CheckOut } from './components'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { CartProvider } from './context/CartContext'

function App() {
  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <Navbar/>
          <Routes>
            <Route path='/' element={<ItemListContainer/>}/>
            <Route path='/categoria/:categoryId' element={<ItemListContainer/>}/>
            <Route path='/productos/:productId' element={<ItemDetailContainer/>}/>
            <Route path='/carrito' element={<Cart/>}/>
            <Route path='/checkout' element={<CheckOut/>}/>
            <Route path='*' element={<h1>404 NOT FOUND</h1>}/>
          </Routes>
        <Footer/>
        </CartProvider>
      </BrowserRouter>
    </>
  )
}

export default App
