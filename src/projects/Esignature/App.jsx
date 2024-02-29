import React, { useState } from "react";



export default function App() {
    const [name, getName] = useState("");
    const [date, getDate] = useState("");

    function trackNameChange(event) {
        const value = event.target.value;
        getName(value.toUpperCase());
    }
    function setDate(event) {
        const value = event.target.value;
        getDate(value);
    }


    return <div className="container">


        <div className="first-container"><div className="y-flex">
            <h1>{name ? name : "Name"}</h1>
            <h2>{date ? date : "Date"}</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, reprehenderit in placeat exercitationem sunt praesentium! Placeat  explicabo omnis corporis temporibus accusamus eaquerum qui </p>
        </div>
            <div className="x-flex"><input type="text" name="name" placeholder="Name" onChange={trackNameChange} /><input type="date" name="currentDate" id="currentDate" onChange={setDate} /></div>
        </div>

    </div>
}