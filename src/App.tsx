import Header from "./components/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import "./index.css";
import { Routes, Route } from "react-router-dom";
import Contact from "./pages/Contact";


import WhatsAppFloating from "./components/WhatsAppFloating";
import ProductPage from "./pages/ProductPage";

function App() {
  return (
    <div className="app-layout">
      <Header />
      <WhatsAppFloating />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/contact" element={<Contact />} />
        
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
