import React from "react";
import Header from "./components/Header/Header";
import CardsContainer from "./components/CardsContainer/CardsContainer"
import "./App.css";

function App() {
  return (
    <div className="App">
       <Header />
       <CardsContainer/>
    </div>
  );
}

export default App;
