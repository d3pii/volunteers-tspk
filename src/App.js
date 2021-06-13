import React from "react";
import { BrowserRouter } from 'react-router-dom'
import AppRouter from "./components/AppRouter";
import Header from "./components/Header";
import Events from "./components/Events";

function App() {
  return (
    <BrowserRouter>
      <Header />
        <Events/>
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
