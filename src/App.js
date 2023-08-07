import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Routes,
  Route,
  Link
} from "react-router-dom";


//adds CSS
import './Reset.css';
import './App.css';




import Home from './pages/Home/Home.js';
import Product from './pages/Product/ProductIndex.js';
import SignUp from './pages/Product/SignUpIndex.js';



function App() {
  return (
    <div>

      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product" element={<Product />} />
            <Route path="/signup" element={<SignUp />} />


          </Routes>
        </div>
      </Router>
    </div>

  );
}

export default App;
