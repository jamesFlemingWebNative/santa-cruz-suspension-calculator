import { Routes, Route } from "react-router-dom";
import ModelSetup from "./pages/ModelSetup";
import Home from "./pages/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/model/:id" element={<ModelSetup />} />
    </Routes>
  );
}

export default App;
