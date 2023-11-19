import { BrowserRouter, Route, Routes } from "react-router-dom"
import { createContext, useState } from "react";
import Login from "./pages/Login";
import Home from "./pages/Home";
import LineaProtetta from "./middleware/LineaProtetta";
import Registrati from "./pages/Registrati";
import Dettagli from "./pages/Dettagli";
import Carrello from "./pages/Carrello";
import Profilo from "./pages/Profilo"
import Prodotti from "./pages/Prodotti";
import Console from "./pages/Console";
import Giochi from "./pages/Giochi";
import Accessori from "./pages/Accessori";
import Success from "./pages/Success";
import Nvb from "./components/Navbar/Nvb";
import ProdottiAmmi from "./PagesAmministrator/ProdottiAmmi";
import FormProdu from "./PagesAmministrator/FormProdu"
import { CartProvider } from "./components/Context/CartContext";




function App() {


  return (
    <CartProvider>
      <BrowserRouter>
        <Nvb />
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route path="/registrati" element={<Registrati />} />

          <Route element={<LineaProtetta />}>
            <Route path="/products/:productId" element={<Dettagli />} />
            <Route path="/home" element={<Home />} />
            <Route path="/carrello" element={<Carrello />} />
            <Route path="/prodotti" element={<Prodotti />} />
            <Route path="/profilo" element={<Profilo />} />
            <Route path="/console" element={<Console />} />
            <Route path="/giochi" element={<Giochi />} />
            <Route path="/accessori" element={<Accessori />} />
            <Route path="/success" element={<Success />} />
            <Route path="/prodottiammi" element={<ProdottiAmmi />} />
            <Route path="/formprodu" element={<FormProdu />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
