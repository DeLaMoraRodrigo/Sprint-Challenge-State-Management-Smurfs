import React from "react";

const SmurfCard = props => {
    return (
        <div>
            {props.name && <h2>{props.name}</h2>}
            {props.age && <h3>{props.age}</h3>}
            {props.height && <h3>{props.height}</h3>}
            {props.id && <h3>{props.id}</h3>}
            {props && <button onClick={() => props.deleteSmurf} >GARGAMEL'D</button>}
        </div>
    )
}

export default SmurfCard;