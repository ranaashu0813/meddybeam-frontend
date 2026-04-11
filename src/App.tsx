import Header from "./components/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import "./index.css";
import { Routes, Route } from "react-router-dom";
import Contact from "./pages/Contact";
import Shop from "./components/Shop";
import ScrollToTop from "./components/ScrollToTop";
import WhatsAppFloating from "./components/WhatsAppFloating";
import ProductPage from "./pages/ProductPage";

function App() {
  return (
    <div className="app-layout">
      <ScrollToTop />
      <Header />
      <WhatsAppFloating />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/contact" element={<Contact />} />
         <Route path="/shop/:category" element={<Shop />} />
      <Route path="/shop" element={<Shop />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
