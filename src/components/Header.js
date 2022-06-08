import React from "react";
import ChrisPic from "../pictures/ChrisOnTrain.jpg"

export default function Header() {
    return (
        <div className="header-element">
            <img src={ChrisPic} alt="A pic of our protaganist on a train"></img>
            <h1> Hello World</h1>
        </div>
    )
}
