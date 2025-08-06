// frontend/src/App.js
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Product from './Product';
import About from "./About.js";
import Contact from "./contactPage.js";
//import Naveen from "./updatedHome.js";
// Main App component that sets up the routes for the application
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/main" element={<Home />} />
        <Route path="/main/products" element={<Product />} />
        <Route path="/main/about" element={<About />} />
        <Route path="/main/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;