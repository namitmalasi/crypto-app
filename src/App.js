import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Coins from "./pages/Coins";
import Exchanges from "./pages/Exchanges";
import CoinDetails from "./pages/CoinDetails";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/coins" element={<Coins />} />{" "}
        <Route path="/exchanges" element={<Exchanges />} />{" "}
        <Route path="/coin/:id" element={<CoinDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
