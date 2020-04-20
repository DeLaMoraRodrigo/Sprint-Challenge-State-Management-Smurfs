import React, { useContext } from "react";

import SmurfCard from "./SmurfCard";
import { SmurfContext } from "../contexts/SmurfContext";

const SmurfList = props => {
    const { smurfs, deleteSmurf } = useContext(SmurfContext);

    return (
        <div>
            <h1>SMURF VILLAGE</h1>
            {smurfs && smurfs.map(smurf => {
                return <SmurfCard key={smurf.id} name={smurf.name} age={smurf.age} height={smurf.height} id={smurf.id}deleteSmurf={deleteSmurf} />
            })}
        </div>
    )
}

export default SmurfList;