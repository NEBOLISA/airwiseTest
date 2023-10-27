import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing";
import Interface from "./pages/Interface/Interface";
import Home from "./pages/Interface/Home";
import AirQuality from "./pages/Interface/AirQuality";
import Settings from "./pages/Interface/Settings";
import QandA from "./pages/Interface/Q&A";

AOS.init();

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/interface" element={<Interface />}>
          <Route index element={<Home />} />
          <Route path="airQuality" element={<AirQuality />} />
          <Route path="settings" element={<Settings />} />
          <Route path="Q&A" element={<QandA />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
