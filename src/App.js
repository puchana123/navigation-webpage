import Navigation from "./components/Navigation";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './components/pages/Home'
import Member from './components/pages/Member'
import Cart from './components/pages/Cart'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/member" element={<Member/>}/>
        <Route path="/cart" element={<Cart/>}/>
      </Routes>
    </BrowserRouter>
      
  );
}

export default App;
