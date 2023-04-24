import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import HomePage from './pages/HomePage';
import OrderPage from './pages/OrderPage';
import PageLinker from './components/PageLinker';
import PaymentPage from './pages/PaymentPage';
import ReceiptPage from './pages/ReceiptPage';
import img1 from "./burger-purple.png"
import img2 from "./burger-green.png"
import img3 from "./burger-red.png"
import img4 from "./burger-yellow.png"
import img5 from "./burger-orange.png"
import img6 from "./burger-blue.png"

const menuitems = [[{name: "Purple Patty", quantity: 0, price: 6, image: img1}, {name: "Green Patty", quantity: 0, price: 5, image: img2}, {name: "Red Patty", quantity: 0, price: 4, image: img3}], 
[{name: "Yellow Patty", quantity: 0, price: 3, image: img4}, {name: "Orange Patty", quantity: 0, price: 2, image: img5}, {name: "Blue Patty", quantity: 0, price: 1, image: img6}]];

function App() 
{

  const [menuItems, setMenuItems] = useState(menuitems);
  const [purchasedItems, setPurchasedItems] = useState([]);

  return (
    <div className='App'>
      <Router>
      <div className='Navigation'>
        <div id='nav-background'></div>
        <h1 className='Site-title'>Pretty Patties</h1>
        <PageLinker path="/" name="Home"></PageLinker>
        <PageLinker path="/order" name="Order"></PageLinker>
      </div>
      <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/order" element={<OrderPage menuItems={menuItems} setMenuItems={setMenuItems} purchasedItems={purchasedItems} setPurchasedItems={setPurchasedItems} />}/>
          <Route path="/payment" element={<PaymentPage />}/>
          <Route path="/receipt" element={<ReceiptPage />}/>
      </Routes>
      </Router>
    </div>
  );
}

export default App;
