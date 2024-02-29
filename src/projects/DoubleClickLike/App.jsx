import React, { useState } from "react";




export default function App() {
    const body = document.querySelector("body");
    body.style.backgroundColor = "black";

    const [likeCount, increaseCount] = useState(false);
    function likeImage() {
        increaseCount(!likeCount);
    }

    return <>
        <div className="container">
            <div className="like-image-container"><img onDoubleClick={likeImage} src="./images/fuji-mountain-kawaguchiko-lake-sunset-autumn-seasons-fuji-mountain-yamanachi-japan.jpg" alt=""
                className="like-image" /><div><div className="like-count">{likeCount && 1}</div><button className="like-button" onClick={likeImage}>Like</button></div></div>
        </div>
    </>
}