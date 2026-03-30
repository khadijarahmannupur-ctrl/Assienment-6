
import { useState } from 'react';
import './App.css'
import MainSection from './component/MainSection'
import NavBar from './component/NavBar'

const fetchProductsData = async ()=> {
  const res = await fetch('/productsData.json');
  return res.json();
}

const productsPromise = fetchProductsData();

function App() {
  const [cartIncrease, setCartIncrease] = useState(0);

  return (
    <>
      <NavBar cartIncrease={cartIncrease}></NavBar>
      <MainSection productsPromise={productsPromise} cartIncrease={cartIncrease} setCartIncrease={setCartIncrease}></MainSection>
    </>
  )
}

export default App
