
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//adds CSS
import './Reset.css';
import './App.css';




import Home from './pages/Home/Home.js';





function App() {
  return (
    <div>

      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />


          </Routes>
        </div>
      </Router>
    </div>

  );
}

export default App;
