import "./App.css";
import Navigation from "./components/Navigation";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Member from "./pages/Member";
import Product from "./pages/Product";

function App() {
  return (
    <div className="h-screen">
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/member" element={<Member />} />
          <Route path="/product" element={<Product />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
