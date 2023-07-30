import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter";
import { NavBar } from "./components/NavBar";

function App() {
  return (
    <React.StrictMode>
      <BrowserRouter className="App">
        <NavBar />
        <AppRouter />
      </BrowserRouter>
    </React.StrictMode>
  );
}

export default App;
