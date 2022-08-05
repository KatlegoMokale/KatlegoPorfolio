import React from "react";
import "./Mycss.css"

function ResumeContent(){
    return(
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
    )
}

export default ResumeContent