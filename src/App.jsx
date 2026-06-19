import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Products from './components/Products'
import Navbar from './components/Navbar'
import TodaysOffer from './pages/TodaysOffer'
import StoreLocator from './pages/StoreLocator'
import Franchies from './pages/Franchies'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import IcecreamDetail from './components/IcecreamDetailPage'
import Login from './components/login'

function App() {
  
const products = [
  {
    id: 1,
    name: "Vanilla Ice Cream",
    Ingrident: "Milk, Cream, Sugar, Vanilla",
    price: "120",
    image: "https://www.coldlove.in/cdn/shop/files/Vanilla_Ice_Cream.png?v=1723218776&width=823"
  },
  {
    id: 2,
    name: "Chocolate Ice Cream",
    Ingrident: "Milk, Cream, Cocoa, Sugar",
    price: "140",
    image: "https://upload.wikimedia.org/wikipedia/commons/e/e7/Chocolate_Ice_Cream_2.jpg"
  },
  {
    id: 3,
    name: "Strawberry Ice Cream",
    Ingrident: "Milk, Cream, Strawberry, Sugar",
    price: "130",
    image: "https://freshwaterpeaches.com/wp-content/uploads/2024/05/strawberry-ice-cream-13-1-of-1-scaled.jpg"
  },
  {
    id: 4,
    name: "Mango Ice Cream",
    Ingrident: "Milk, Cream, Mango Pulp, Sugar",
    price: "150",
    image: "https://cdn2.foodviva.com/static-content/food-images/dessert-recipes/mango-ice-cream/mango-ice-cream.jpg"
  },
  {
    id: 5,
    name: "Butterscotch Ice Cream",
    Ingrident: "Milk, Cream, Butterscotch, Sugar",
    price: "145",
    image: "https://icecreambakery.in/wp-content/uploads/2025/02/butterscotch-ice-cream-recipe.jpg"
  },
  {
    id: 6,
    name: "Black Currant Ice Cream",
    Ingrident: "Milk, Cream, Black Currant, Sugar",
    price: "160",
    image: "https://5.imimg.com/data5/AU/CD/YR/SELLER-26783608/black-currant-iceceam-1000x1000.jpg"
  },
  {
    id: 7,
    name: "Pistachio Ice Cream",
    Ingrident: "Milk, Cream, Pistachio, Sugar",
    price: "170",
    image: "https://www.pocketfriendlyrecipes.com/wp-content/uploads/2025/04/Pistachio-Ice-Cream-21-1.jpg"
  },
  {
    id: 8,
    name: "Cookies & Cream Ice Cream",
    Ingrident: "Milk, Cream, Cookies, Sugar",
    price: "180",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2F-k78_fsiFWgjPEUqegSlGBBetGNf3hbtA&s"
  },
  {
    id: 9,
    name: "Blueberry Ice Cream",
    Ingrident: "Milk, Cream, Blueberry, Sugar",
    price: "175",
    image: "https://i0.wp.com/strawberriesforsupper.com/wp-content/uploads/2011/07/Blueberry-Maple-Ice-Cream-1.jpg?resize=300%2C200"
  },
  {
    id: 10,
    name: "Mint Chocolate Chip Ice Cream",
    Ingrident: "Milk, Cream, Mint, Chocolate Chips",
    price: "190",
    image: "https://www.browneyedbaker.com/wp-content/uploads/2020/06/Mint-chocolate-chip-ice-cream-14-square.jpg"
  }
];


 return (
    <BrowserRouter>
     <Header />
     <Navbar />

<Routes>

  <Route path='/login' element={<Login />}></Route>
  <Route path='/' element={<Products products={products}></Products>}></Route>
    
  <Route path='/offer' element={<TodaysOffer />}></Route>
    
  <Route path='/store-loc' element={<StoreLocator />}></Route>
  
  <Route path='/franchies' element={<Franchies />}></Route>

  <Route path='/details/:ID' element={<IcecreamDetail  products={products} />}></Route>


</Routes>
      <Footer></Footer>
    </BrowserRouter>
  )
}

export default App
