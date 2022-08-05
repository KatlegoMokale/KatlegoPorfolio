import React from "react";
import "./Mycss.css"
import HeaderPage from "./Header";
import AboutMe from "./About";
import SkillsContent from "./Skills";
import ResumeContent from "./Resume";

function HomePage(){
    return(

        <div className="page">
            <HeaderPage/>
            <AboutMe/>

            <div className="backImage">
                <SkillsContent/>
                <ResumeContent/>
            </div> 

        </div>
    )
}

export default HomePage;