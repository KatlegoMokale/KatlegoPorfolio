import React from "react";
import "./Mycss.css"
import myPicture from './images/Me.png'
import mydot from './images/dot.png'

function AboutPage(){
    return(

        <div className="page">
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
        
        <div className="containerAbout">
        <div className="infoAbout">
                <div className="aboutHeader">ABOUT ME</div>
            </div>
            <div className="insideAbout">
            <div className="imageAbout">
                <img src={myPicture} alt='katlego' className="mypicture"/>

            </div>
            <div className="aboutTextSide">

                <div className="aboutMeHeader">
                    <p className="mynameSmall">
                        I'm Katlego Mokale
                    </p>
                    <p className="headerSmall">
                        I'm a software developer, web developer and Photographer
                    </p>
                    <p className="paragraph">
                        An ambitious, intelligent, and confident software 
                        developer. One straight forward person who 
                        likes experimenting and learning new things. One 
                        kindhearted hardworker that gets work done not 
                        matter what.
                    </p>

                </div>

                <div className="aboutMeBio">
                    <div className="myBox">
                        <p className="itemList">
                        <span><img src={mydot} alt='dot'/></span>
                            <span className="title">
                                Full Name
                            </span>
                            <span className="titleValue">
                               : Katlego Kagiso Mokale
                            </span>
                        </p>
                        <p className="itemList">
                        <span><img src={mydot} alt='dot'/></span>
                            <span className="title">
                                Birthday
                            </span>
                            <span className="titleValue">
                                : 21 November 1996
                            </span>
                        </p>
                        <p className="itemList">
                        <span><img src={mydot} alt='dot'/></span>
                            <span className="title">
                                Address
                            </span>
                            <span className="titleValue">
                                : Roodia, Sasolburg, FreeState
                            </span>
                        </p>
                        <p className="itemList">
                        <span><img src={mydot} alt='dot'/></span>
                            <span className="title">
                                Email
                            </span>
                            <span className="titleValue">
                                : kdawgg28@gmail.com
                            </span>
                        </p>
                        <p className="itemList">
                            <span><img src={mydot} alt='dot'/></span>
                            <span className="title">
                                Phone
                            </span>
                            <span className="titleValue">
                                : 072 028 9604
                            </span>
                        </p>
                        <p className="itemList">
                        <span><img src={mydot} alt='dot'/></span>
                            <span className="title">
                                Nationality 
                            </span>
                            <span className="titleValue">
                                : South African
                            </span>
                        </p>

                    </div>

                </div>

            </div>
            </div> 
        </div>
        <div className="backImage">
        <div className="containerSkills">
            <div className="infoAbout">
                <div className="aboutHeader">MY SKILLS</div>
            </div>
<div class="wrap-circles">

<div className="circleBig">
<div className="outter">C#</div>
  <div class="circle per-89">
    <div class="inner">89%</div>
    
  </div>
  </div>

  <div className="circleBig">
  <div className="outter">C++</div>
  <div class="circle per-88">
    <div class="inner">88%</div>
    
  </div>
  </div>

  <div className="circleBig">
  <div className="outter">Dart</div>
  <div class="circle per-84">
    <div class="inner">84%</div>
   
  </div>
  </div>

  <div className="circleBig">
  <div className="outter">JavaScript</div>
  <div class="circle per-77">
    <div class="inner">77%</div>
   
  </div>
  </div>

  <div className="circleBig">
  <div className="outter">Sql</div>
  <div class="circle per-65">
    <div class="inner">65%</div>
  
  </div>
</div>

  <div className="circleBig">
  <div className="outter">Photoshop</div>
    <div class="circle per-87">
    <div class="inner">87%</div>
    
  </div>
  </div>
  
  <div className="circleBig">
  <div className="outter">Photography</div>
  <div class="circle per-95">
    <div class="inner">95%</div>
   
  </div>
  </div>

<div className="circleBig">
<div className="outter">Ui/Ux Design</div>
  <div class="circle per-81">
    <div class="inner">81%</div>
   
  </div>
  </div>

</div>



            
            
        </div>

        
        <div className="containerResume">
               <div className="infoAbout">
               <div className="aboutHeader">RESUME</div>
               </div>
                <div className="insideAbout">
                                   <div className="education">
                    <h2>Education</h2>
                    <div className="boxResume">
                       <div className="innerBoxR">
                       <div className="year">2016-2017</div>
                        <div className="itemsResume">
                            <h3>
                            Pearson Institute
                            </h3>
                            <p className="pResume">
                            Higher Certificate in Technology in Information Systems
                            </p>
                        </div>
                       </div>
                       <div className="innerBoxR">
                       <div className="year">2018-2022</div>
                        <div className="itemsResume">
                        <h3>
                            Belgium Campus iTversity
                        </h3>
                            <p className="pResume">
                                Diploma in Information Technology
                            </p>
                        </div>
                       </div>
                    
                    </div>
                </div>
                <div className="experience">
                <h2>Work</h2>
                <div className="boxResume">
                       <div className="innerBoxR">
                       <div className="year">2020-current</div>
                        <div className="itemsResume">
                            <h3>
                            BuzzMobileTech
                            </h3>
                            <p className="pResume">
                            Software developer
                            </p>
                        </div>
                       </div>
                       <div className="innerBoxR">
                       <div className="year">2022-current</div>
                        <div className="itemsResume">
                        <h3>
                            Emfuleni Municipality
                        </h3>
                            <p className="pResume">
                                Junior Technician Intern
                            </p>
                        </div>
                       </div>
                    
                    </div>
                </div>
                </div>
        </div>
        </div>
            
        </div>


    )
}

export default AboutPage;