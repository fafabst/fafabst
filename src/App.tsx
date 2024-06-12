import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import AboutUs from './components/AboutUs';
import Cart from './components/Cart';
import ColleagueLogin from './components/ColleagueLogin';
import CustomerLogin from './components/CustomerLogin';
import Home from './components/Home';
import InsertPottery from './components/insertPottery';
import NewArrival from './components/NewArrival';
import Sales from './components/Sales';
import SetPottery from './components/SetPottery';
import SinglePottery from './components/SinglePottery';

function App() {

  return (<>
    <Routes>
      <Route path="/New Arrival" element={<NewArrival />} />
      <Route path="/Set Pottery" element={<SetPottery />} />
      <Route path="/Single Pottery" element={<SinglePottery />} />
      <Route path="/Cart" element={<Cart />} />
      <Route path="/Sales" element={<Sales />} />
      <Route path="/colleagueLogin" element={<ColleagueLogin />} />
      <Route path="/customerLogin" element={<CustomerLogin />} />
      <Route path="/aboutUs" element={<AboutUs />} />
      <Route path="/insertPottery" element={<InsertPottery />} />
      <Route path="/" element={<Home />} />
    </Routes>
  </>
  )
}

export default App
