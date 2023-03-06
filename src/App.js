import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import System from "./pages/System/System";
import Devices from "./pages/Devices/Devices";
import Network from "./pages/Network/Network";
import Telephone from "./pages/Telephone/Telephone";
import Personalization from "./pages/Personalization/Personalization";
import Applications from "./pages/Applications/Applications";
import Accounts from "./pages/Accounts/Accounts";
import TimeAndLanguage from "./pages/TimeAndLanguage/TimeAndLanguage";
import Games from "./pages/Games/Games";
import Search from "./pages/Search/Search";
import Update from "./pages/Update/Update";
import Confidential from "./pages/Confidential/Confidential";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/system" element={<System />} />
          <Route path="/devices" element={<Devices />} />
          <Route path="/network" element={<Network />} />
          <Route path="/telephone" element={<Telephone />} />
          <Route path="/personalization" element={<Personalization />} />
          <Route path="/applications" element={<Applications />} />
          <Route path="/accounts" element={<Accounts />} />
          <Route path="/time" element={<TimeAndLanguage />} />
          <Route path="/games" element={<Games />} />
          <Route path="/search" element={<Search />} />
          <Route path="/update" element={<Update />} />
          <Route path="/confidential" element={<Confidential />} />
          <Route path="/update" element={<Update />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
