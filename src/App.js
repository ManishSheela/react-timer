import React from "react";
import "./App.css";
import Timer from "./components/timer";


function App() {
  return (
    <div className="App">
      <Timer initialMinutes={5} initialSeconds={0} />
    </div>
  );
}

export default App;
