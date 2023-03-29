
import React,{useState} from 'react';
import RLcar from "../../assets/images/RLcar.PNG"
// import resume from "../../assets/resume/resume.pdf"

export default function About() {
    const [readMore1,setReadMore1]=useState(false);
    const [readMore2,setReadMore2]=useState(false);
    
    const extraContent1=<container className="flex flex-col items-center">
        <div className='w-3/4 space-y-16 flex flex-col items-center bg-gradient-to-r from-blue to-darkGreen rounded-lg'>
        <p className="extra-content1 text-2xl w-3/4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, consectetur nequeab 
            porro quasi culpa nulla rerum quis minus voluptatibus sed hic ad quo sint, libero 
            commodi officia aliquam! Maxime.
        </p>
        </div>
    </container>
    const aboutMe=<div className='flex flex-col items-center text-4xl pt-20'>
        About Me
    </div>

    const extraContent2=<container className="flex flex-col items-center">
    <div className='w-3/4 space-y-16 flex flex-col items-center bg-gradient-to-r from-blue to-darkGreen rounded-lg'>
    <p className="extra-content2 text-2xl w-3/4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, consectetur nequeab 
        porro quasi culpa nulla rerum quis minus voluptatibus sed hic ad quo sint, libero 
        commodi officia aliquam! Maxime.
    </p>
    </div>
    </container>
    const skills=<div className='flex flex-col items-center text-4xl pt-20'>
    Skills
    </div>

    return (
        <container className="space-y-16 flex flex-col items-center">
            <div className="">
                <a className="read-more-link space-y-12" onClick={()=>{setReadMore1(!readMore1)}}><h2>{aboutMe}</h2></a>
                {readMore1 && extraContent1}
            </div>

            <div className="resume-card card rounded-lg">
                <h3 className="top">Resume</h3>
                <div className="middle">
                    <p>Web Developer leveraging a background in customer service to deliver performative and innovative solutions to satisfy customer needs. Often appointed by leadership roles to train new employees and take the initiative to deliver on sales, as well as meeting project deadlines. Enjoys creative and collaborative group work to deliver exemplary products to exceed client expectations</p>
                </div>
                <div className="resume-download">
                    {/* <button><a href={resume} download="Edwin Pietrowski Resume">Download Resume</a></button> */}
                </div>
            </div>

                <img src= {RLcar} alt="picture of me" className="meAbout justify-self-end h-80 w-60"/>
            
            <div className="">
                <a className="read-more-link space-y-12" onClick={()=>{setReadMore2(!readMore2)}}><h2>{skills}</h2></a>
                {readMore2 && extraContent2}
            </div>
        </container>
        
        

    );
}

