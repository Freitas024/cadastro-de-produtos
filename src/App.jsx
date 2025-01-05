import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cadastro from "./pages/cadastro";
import Lista from "./pages/lista";

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Cadastro />}/>
        <Route path="/Listagem" element={<Lista />}/>
      </Routes>
    </Router>
  )
}

export default App
