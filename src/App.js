import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "./pages/Login";
import Home from "./pages/Home";
import LineaProtetta from "./middleware/LineaProtetta";
import Registrati from "./pages/Registrati";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route path="/registrati" element={<Registrati />} />

        <Route element={<LineaProtetta />}>  
              <Route path="/home" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
