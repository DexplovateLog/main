// frontend/src/App.js
 import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Product from './Product';
import About from "./About.js";
import Contact from "./contactPage.js";
//import Naveen from "./updatedHome.js";
// Main App component that sets up the routes for the application
function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Product />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </HashRouter>
  );
}

export default App;