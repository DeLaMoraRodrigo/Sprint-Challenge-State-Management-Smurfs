import React, { useState, useContext } from "react";
import axios from "axios";

import { SmurfContext } from "../contexts/SmurfContext";

const SmurfForm = props => {
    const { addSmurf } = useContext(SmurfContext);

    const [ newSmurf, setNewSmurf ] = useState({
        name: "",
        age: "",
        height: "",
        id: ""
    })

    const handleChanges = e => {
        setNewSmurf({
            ...newSmurf,
            [e.target.name]: e.target.value,
            id: Date.now()
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        addSmurf(newSmurf);
        axios.post(`http://localhost:3333/smurfs/`, newSmurf)
        // axios.put(`http://localhost:3333/smurfs/${newSmurf.id}`, {...newSmurf})
        setNewSmurf({
            name: "",
            age: "",
            height: "",
            id: ""
        })
    }

    return (
        <div>
            <form>
                <input 
                name="name"
                type="text"
                placeholder="Name"
                value={newSmurf.name}
                onChange={handleChanges}
                />

                <br />

                <input 
                name="age"
                type="text"
                placeholder="Age"
                value={newSmurf.age}
                onChange={handleChanges}
                />

                <br />

                <input 
                name="height"
                type="text"
                placeholder="Height"
                value={newSmurf.height}
                onChange={handleChanges}
                />

                <br />

                <button type="submit" onClick={handleSubmit}>Create New Smurf</button>
            </form>
        </div>
    )
}

export default SmurfForm;