
import './App.css';

//import Routing
import { BrowserRouter, Routes, Route } from "react-router-dom";

//import Components
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Portfolio from "./Pages/Portfolio";
import Navbar from "./Components/Navbar";

function App() {
  return (
    
    <>
     
     <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route index  element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact'  element={<Contact/>}/>
        <Route path='/protfolio'  element={<Portfolio/>}/>
      </Routes>
     </BrowserRouter>
    
    </>
  );
}

export default App;
