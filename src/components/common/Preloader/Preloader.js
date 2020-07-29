import preloader from "../../../assets/images/preloader.svg";
import React from "react";

let Preloader = (props) => {
    return (
        <div style={{marginLeft: '500px', zIndex: "100"}}>
            <img src={preloader}/>
        </div>
    )
}

export default Preloader;