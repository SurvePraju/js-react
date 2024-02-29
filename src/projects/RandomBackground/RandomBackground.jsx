import React, { useState } from "react";


export default function App() {
    const styles = {
        padding: "10px",
        borderRadius: "5px",
        display: "block"
        , fontSize: '2rem'
    }
    const [currentImage, changeCurrentImage] = useState("");

    function changeImage() {

        const images = ['asfalt-dark.png', 'arabesque.png', 'arches.png', 'axiom-pattern.png', 'axiom-pattern.png', 'batthern.png'];
        changeCurrentImage(images[Math.floor(Math.random() * 5)]);

        const body = document.querySelector('body');
        body.style.backgroundImage = "url('https://www.transparenttextures.com/patterns/" + currentImage + "')"
    }

    return <div className="container">

        <button style={styles} onClick={changeImage}>Randomalize Background</button>
    </div>
}