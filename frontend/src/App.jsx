import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import RegisterPage from "./components/RegisterPage";
import LoginPage from "./components/LoginPage";
import VideosPage from "./components/VideosPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/videos" element={<VideosPage />} />
        <Route path="/home" element={<LoginPage />} />

        {/* <div className="App">
      <p>coucou</p>
    </div> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
