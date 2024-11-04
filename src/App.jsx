import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./componets/Navbar";
import Shop from "./pages/Shop";
import Footer from "./componets/Footer";

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
