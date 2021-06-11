import React from "react";
import { io } from "socket.io-client";

import { Quotes } from "./components/Quotes";

function App() {
  const [quotes, setQuotes] = React.useState([]);
  const socket = io.connect("ws://localhost:4000");
  
  React.useEffect(() => {
    socket.emit("start");
    socket.on("ticker", (response) => {
      setQuotes(response);
    });
   
  }, []);


  return (
    <div className="App">
      <div className="container">
        <Quotes quotes={quotes} />
      </div>
    </div>
  );
}

export default App;
