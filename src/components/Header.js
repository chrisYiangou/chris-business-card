import React from "react";
import ChrisPic from "../pictures/ChrisOnTrain.jpg"

export default function Header() {
    return (
        <div className="header--element">
            <img className="header--img" src={ChrisPic} alt="A pic of our protaganist on a train"></img>
            <h1 >Christopher Yiangou</h1>
            <h3 className="header--title--element">Software Training Specialist</h3>
            <h4><a href="#">A link to my website (One day in the future)</a></h4>
        </div>
    )
}
