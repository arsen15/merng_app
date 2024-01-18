import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Container } from "semantic-ui-react";

import "semantic-ui-css/semantic.min.css";
import "./App.css";

import MenuBar from "./components/MenuBar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <Router>
      <Container>
        <Container>
          <MenuBar />
        </Container>
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>

        <Routes>
          <Route exact path="/login" element={<Login />} />
        </Routes>

        <Routes>
          <Route exact path="/register" element={<Register />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
