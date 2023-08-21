import "./App.css";
import HeaderComponent from './Component/HeaderComponent';
import SidebarComponent from "./Component/SidebarComponent";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainComponent from "./Component/MainComponent";
import LoginComponent from "./Component/LoginComponent";
import ApplyleaveComponent from "./Component/ApplyleaveComponent";

function App() {
  return (
    <>
    <Router>
    <Routes>
      <Route path="/main" element={<MainComponent />} />
      <Route path="/" element={<LoginComponent />} />
      <Route path="/main/apply-leave" element={<ApplyleaveComponent/>} />\
    </Routes>
  </Router>
  </>
  );
}

export default App;
