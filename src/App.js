import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing";
import Interface from "./pages/Interface";

AOS.init();

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Landing />}  />
      <Route path="/interface" element={<Interface />}  />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
