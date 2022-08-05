import React from "react";
import "./Mycss.css"

function HeaderPage(){
    return(
        <div className="container">
            <div className="content1">
                <p className="hello">
                    Hello, it's me
                </p>
                <p className="myname">
                    Katlego Mokale
                </p>
                <div className="wrapper">
                <div className="static-text"> 
                    I'm a 
                </div>
                <ul className="dynamic-text">
                    <li><span >Software developer</span></li>
                    <li><span >Web developer</span></li>
                    <li><span >Photographer</span></li>
                </ul>
                </div>
               
            </div>
            <div className="contentImage">

            </div>

        </div>
    )
}

export default HeaderPage;