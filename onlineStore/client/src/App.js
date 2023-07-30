import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter";

function App() {
  return (
    <React.StrictMode>
    <BrowserRouter className="App">
        <AppRouter>
          
        </AppRouter>
    </BrowserRouter>
    </React.StrictMode>

  );
}

export default App;
