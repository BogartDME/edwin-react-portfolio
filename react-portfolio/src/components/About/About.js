
import React,{useState} from 'react';
import RLcar from "../../assets/images/RLcar.PNG"
import resume from "../../assets/images/Edwin-Pietrowski-2023-Resume.pdf"

export default function About() {
    const [readMore1,setReadMore1]=useState(false);
    const [readMore2,setReadMore2]=useState(false);
    
    const extraContent1=<container className="flex flex-col items-center">
        <div className='w-2/4 pb-8 space-y-16 flex flex-col items-center bg-gradient-to-r from-blue to-darkGreen rounded-lg'>
        <p className="extra-content1 flex flex-col items-center pt-6 text-2xl w-3/4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, consectetur nequeab 
            porro quasi culpa nulla rerum quis minus voluptatibus sed hic ad quo sint, libero 
            commodi officia aliquam! Maxime.
        </p>
        </div>
    </container>

   
        const background= <div className='my-8 w-96 bg-gradient-to-b from-darkGreen via-lightGreen to-darkGreen rounded-lg cursor-pointer flex flex-col items-center text-4xl py-10'>
            <div>
                Background
            </div>
        </div>

    
     // Function will execute on click of button
     const downloadResume = () => {
        // using Java Script method to get PDF file
        fetch('Edwin-Pietrowski-2023-Resume.pdf').then(response => {
            response.blob().then(blob => {
                // Creating new object of PDF file
                const fileURL = window.URL.createObjectURL(blob);
                // Setting various property values
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'Edwin-Pietrowski-2023-Resume.pdf';
                alink.click();
            })
        })
    }
    

    const extraContent2=<container className="flex flex-col items-center">
    <div className='w-2/4 space-y-16 flex flex-col items-center bg-gradient-to-r from-blue to-darkGreen rounded-lg'>
    <p className="extra-content2 pt-6 text-2xl w-3/4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, consectetur nequeab 
        porro quasi culpa nulla rerum quis minus voluptatibus sed hic ad quo sint, libero 
        commodi officia aliquam! Maxime.
    </p>
    </div>
    </container>
    const skills=<div className='my-8 w-96 bg-gradient-to-b from-darkGreen via-lightGreen to-darkGreen rounded-lg cursor-pointer flex flex-col items-center text-4xl py-10'>
    Skills
    </div>

    return (
        <container className="space-y-16 flex flex-col items-center">
            <div className="container-mx-auto flex flex-col items-center">
                <a className="read-more-link space-y-12" onClick={()=>{setReadMore1(!readMore1)}}><h2>{background}</h2></a>
                {readMore1 && extraContent1}
            </div>
        <container className="flex space-x-12 flex items-center">
            <div className="w-60 h-80 bg-gradient-to-b from-blue to-darkGreen flex flex-col items-center rounded-lg">
                <div floated={false} className="h-80">
                    {/* <img src="/img/team-3.jpg" alt="profile-picture" /> */}
                </div>
                <div className="w-3/4 rounded-full text-center bg-gradient-to-b from-gunMetal via-ashGray to-gunMetal">
                    <div className="h4" color="blue mb-2">
                        <button onClick={downloadResume} className=''>
                        Download Resume
                        </button>
                    </div>
                    <div className="font-medium" textGradient>
                    </div>
                </div>
                <footer className="flex justify-center gap-7 pt-2">
                </footer>
            </div>
 
            <img src= {RLcar} alt="picture of me" className="meAbout justify-self-end h-80 w-60 rounded-lg"/>
        </container>
            <div className="container-mx-auto flex flex-col items-center">
                <a className="read-more-link space-y-12" onClick={()=>{setReadMore2(!readMore2)}}><h2>{skills}</h2></a>
                {readMore2 && extraContent2}
            </div>
        </container>
        
        

    );
}

