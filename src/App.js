import Navbar from "./Navbar"
import Header from './Header';
import Body from "./Body";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {

  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="App-heading">
          <Routes>
            <Route path="/" element={<Header />} />
            <Route path="/about" element={<Body />} /> 
          </Routes>
        </div>
      </div>
    </Router>

  );
}

export default App;
