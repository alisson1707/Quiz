import { BrowserRouter, Routes, Route } from "react-router-dom";
import Quiz from "../pages/Quiz";
import Resultado from "../pages/Resultado";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Quiz />} />
        <Route path="/resultado" element={<Resultado />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;