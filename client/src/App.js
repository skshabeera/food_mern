import "./App.css";
import Home from "./screens/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./screens/Login";
import "../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import Signup from "./screens/Signup";
import { CartProvider } from "./components/ContextReducer";
import Myorder from "./screens/Myorder";

function App() {
  return (
    <CartProvider>
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/createuser" element={<Signup />}></Route>
          <Route path="/myOrder" element={<Myorder />}></Route>
        </Routes>
      </div>
    </Router>
     </CartProvider> 
  );
}

export default App;
