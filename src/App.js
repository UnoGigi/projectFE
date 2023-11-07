import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "./pages/Login";
import Home from "./pages/Home";
import LineaProtetta from "./middleware/LineaProtetta";
import Registrati from "./pages/Registrati";
import Dettagli from "./pages/Dettagli";
import Carrello from "./pages/Carrello";
import Profilo from "./pages/Profilo"
import Prodotti from "./pages/Prodotti";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route path="/registrati" element={<Registrati />} />

        <Route element={<LineaProtetta />}> 
              <Route path="/products/:productId" element={<Dettagli />} /> 
              <Route path="/home" element={<Home />} />
              <Route path="/carrello" element={<Carrello />} />
              <Route path="/prodotti" element={<Prodotti />} />
              <Route path="/profilo" element={<Profilo />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
