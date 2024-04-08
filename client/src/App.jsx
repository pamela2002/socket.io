import { io } from "socket.io-client";
import React, { useEffect, useMemo, useState } from "react";

function App() {
  const socket = io("http://localhost:3000");

  useEffect(() => {
    socket.on("connect", () => {
      console.log("Connected", socket.id)
    })
  },[])

    return (
    
      <div>
        app 
      </div>
    )
  }

export default App
