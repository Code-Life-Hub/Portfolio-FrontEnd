import React from "react";
import "./App.css";
import AppRouter from "./routes/AppRouter";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="header-content">
          <h1>Welcome to my Portfolio!</h1>
          
        </div>
        <AppRouter />
        
      </header>
    </div>
  );
}

export default App;
