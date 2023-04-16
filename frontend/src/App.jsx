import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import VideosPage from "./pages/VideosPage";
import WordsPage from "./pages/WordsPage";
import NumbersPage from "./pages/NumbersPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/videos" element={<VideosPage />} />
        <Route path="/home" element={<LoginPage />} />
        <Route path="/words" element={<WordsPage />} />
        <Route path="/numbers" element={<NumbersPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
