import { Image } from "@mui/icons-material";
import React from "react";
import "./Mycss.css"
import suiderligimage from './images/Suiderlig.png' 
import pearsonimage from './images/Pearson.png'
import belgiumimage from './images/Belgiumcampus.png'
import "@fontsource/inter";

function EducationPage(){
return (
    <div className="container2">

        <div className="contentschool1">
            <h2>High School</h2>
            <p>2011-2015</p>
            <p>Hoerskool Suiderlig High School</p>
            <p>Qualification</p>
            <p>Matric</p>
        </div>

        <div className="contentschool2">
        <h2>Tertiary education</h2>
            <p>2016-2017</p>
            <p>Pearson Institute</p>
            <p>Qualification</p>
            <p>Higher Certificate in Technology in Information Systems</p>
        </div>

        <div className="contentschool3">
        <h2>Tertiary education</h2>
            <p>2018-2022</p>
            <p>Belgium Campus iTversity</p>
            <p>Qualification</p>
            <p>Diploma in Information Technology</p>
        </div>

        <div className="contentschool1_1">
           <img src={suiderligimage} className="schoolImage"  alt="Hoerskool Suiderlig High School"/>
        </div>

        <div className="contentschool1_2">
        <img src={pearsonimage} className="schoolImage"  alt="Pearson Institute"/>
        </div>

        <div className="contentschool1_3">
        <img src={belgiumimage} className="schoolImage"  alt="Belgium Campus iTversity"/>
        </div>

    
    </div>
)

}

export default EducationPage;