import React, { useState, useEffect } from "react";
import axios from "axios";

import { SmurfContext } from "./contexts/SmurfContext";
import SmurfList from "./components/SmurfList";
import SmurfForm from "./components/SmurfForm";

import "./App.css";

function App() {
  const [smurfs, setSmurfs] = useState([]);

  const addSmurf = smurf => {
    setSmurfs([
      ...smurfs,
      smurf
    ])
  }

  const deleteSmurf = smurf => {
    axios.delete(`http://localhost:3333/smurfs/${smurf}`)
         .then(res => {
           setSmurfs(res.data)
         })
  }

  useEffect(() => {
    axios.get(`http://localhost:3333/smurfs`)
         .then(res => {
           console.log({res})
           setSmurfs(res.data)
         })
         .catch(err => {
           console.log({err})
         })
  }, [])

  return (
    <SmurfContext.Provider value={{ smurfs, addSmurf, deleteSmurf }}>
      <SmurfList />
      <SmurfForm />
    </SmurfContext.Provider>
  )
}

export default App;