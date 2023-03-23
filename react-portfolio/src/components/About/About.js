import React from "react";
import RLcar from "../../assets/images/RLcar.PNG"


function About() {
    return (
        <container className="space-y-16 flex flex-col items-center">
            <div className="space-y-16">
                <h1 className="text-5xl">
                    About Me
                </h1>
                <p className="text-2xl">
                    Text about me
                </p>
            </div>
    
                <img src= {RLcar} alt="picture of me" className="meAbout justify-self-end h-80 w-60"/>
            
            <div className="space-y-16">
                <h1 className="text-5xl">
                    Skills
                </h1>
                <p className="text-2xl">
                    List of skills
                </p>
            </div>
        </container>
        
        

    );
}

export default About;