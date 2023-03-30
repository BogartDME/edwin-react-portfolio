
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

   
        const aboutMe= <div className=' w-96 bg-gradient-to-b from-gunMetal via-ashGray to-gunMetal rounded-full cursor-pointer flex flex-col items-center text-4xl py-10'>
            <div>
                About Me
            </div>
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
    const skills=<div className=' w-96 bg-gradient-to-b from-gunMetal via-ashGray to-gunMetal rounded-full cursor-pointer flex flex-col items-center text-4xl py-10'>
    Skills
    </div>

    return (
        <container className="space-y-16 flex flex-col items-center">
            <div className="container-mx-auto flex flex-col items-center">
                <a className="read-more-link space-y-12" onClick={()=>{setReadMore1(!readMore1)}}><h2>{aboutMe}</h2></a>
                {readMore1 && extraContent1}
            </div>

        <container className="w-96 bg-gradient-to-b from-blue via-redWood to-darkGreen">
            <div floated={false} className="h-80">
                <img src="/img/team-3.jpg" alt="profile-picture" />
            </div>
            <div className="text-center bg-gradient-to-b from-gunMetal via-ashGray to-gunMetal">
                <div className="h4" color="blue mb-2">
                    <button className='bg-greenYellow'>
                    Download Resume
                    </button>
                </div>
                <div className="font-medium" textGradient>
                </div>
            </div>
            <footer className="flex justify-center gap-7 pt-2">
            </footer>
        </container>
  );
}

                <img src= {RLcar} alt="picture of me" className="meAbout justify-self-end h-80 w-60"/>
            
            <div className="">
                <a className="container-mx-auto flex flex-col items-center read-more-link space-y-12" onClick={()=>{setReadMore2(!readMore2)}}><h2>{skills}</h2></a>
                {readMore2 && extraContent2}
            </div>
        </container>
        
        

    );
}

