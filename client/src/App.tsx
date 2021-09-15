import React from "react";
import logo from "./logo.svg";


import "./App.css";

import { Route, Router, BrowserRouter } from "react-router-dom";

import { Home } from './Pages/Home'
import { Header } from "./Components/Header";

function App() {
    return (
      <BrowserRouter>
        <Header/>
        <Route exact path="/" component={Home}/>
      </BrowserRouter>
    )
}

export default App;
