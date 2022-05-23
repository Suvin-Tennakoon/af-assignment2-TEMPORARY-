import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./Components/Header";

function App() {
  return (
    <Router>
      <switch>
        <Route path="/" exact component={Header} />
      </switch>
    </Router>
  );
}

export default App;
