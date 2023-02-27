import React from "react";
import "./Mycss.css"
import HeaderPage from "./Header";
import AboutMe from "./About";
import SkillsContent from "./Skills";
import ResumeContent from "./Resume";
import mypic from '../Assets/images/Kat.png';
import Spline from '@splinetool/react-spline';



function HomePage(){
    return(

        <div className=" bg-toColor grid grid-flow-row h-screen w-full">

            <div className=" h-screen w-full">
                <div className=" flex items-center justify-end  w-full h-[8vh]">
                <div>
                    <button className=" mx-10 my-2 border border-black rounded-xl px-5 py-2">Contact</button>
                </div>
                </div>   

                <div className="intro flex items-center h-[92vh] w-full ">
                    <div className="Text mx-40 mb-10 ">
                        <h1 className=" text-secondary text-8xl ">I'm Katlego Mokale. <br/> A React Developer <br/> <span className=" text-primary">based in Gauteng, ZA</span> </h1>
                    </div>

                    <div className=" w-[600px] h-[500px] flex items-center justify-center ">
                        <div className="circle w-[400px] h-[400px] bg-primary rounded-full ">
                          <div className=" flex items-center justify-center -mt-20">
                          <img src={mypic} alt='Kat' height={300} width={300}/>
                          </div>
                        </div>
                        
                    </div>

                </div> 
            </div>


            <div className=" w-full h-[100vh] bg-whiteroom bg-center ">
                <Spline scene="https://prod.spline.design/thYA8sXEeKjk3chX/scene.splinecode" />
            </div>
            <div className=" w-full h-[100vh] bg-whiteroom">
                
            </div>

            


        </div>
    )
}

export default HomePage;