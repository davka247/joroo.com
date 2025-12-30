import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";

// Layout
import Layout from "./components/Layout";

// Pages
import Login from "./components/login";
import Home from "./components/Home";
import Burtgel from "./components/Burtgel";
import Uraldaan from "./components/Uraldaan";
import Gallery from "./components/Gallery";
import Durem from "./components/Durem";
import HolbooBarih from "./components/Holboo";
import Amjilt from "./components/Amjilt";
import Departments from "./components/SalbarHolboo";
import Aylal from "./components/Aylal";
import NotFound from "./pages/NotFound";

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            loggedIn ? (
              <Navigate to="/home" />
            ) : (
              <Login loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
            )
          }
        />

        {loggedIn && (
          <Route element={<Layout loggedIn={loggedIn} setLoggedIn={setLoggedIn} />}>
            <Route path="/home" element={<Home />} />
            <Route path="/burtgel" element={<Burtgel />} />
            <Route path="/uraldaan" element={<Uraldaan />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/durem" element={<Durem />} />
            <Route path="/holboo-barih" element={<HolbooBarih />} />
            <Route path="/salbar-holboo" element={<Departments />} />
            <Route path="/amjilt" element={<Amjilt />} />
            <Route path="/aylal" element={<Aylal />} />
          </Route>
        )}

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}
