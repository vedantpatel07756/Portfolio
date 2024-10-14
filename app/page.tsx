
"use client"; // This is a client component 👈🏽

import { AuroraBackground } from "./components/ui/aurora-background";
import { FloatingNav } from "./components/ui/Floting_navbar";
// import { FloatingNav } from "../ui/Floting_navbar";
import { IconHome, IconMessage, IconUser,IconActivity,IconSubtask } from "@tabler/icons-react";
import { Timeline } from "./components/ui/timeline";
import {data} from "../data/timelinedata" ;
import React, { useState } from "react";
import { BackgroundBeamsWithCollision } from "./components/ui/background-beams-with-collision";
import { ShootingStars } from "./components/ui/shooting-stars";
import { StarsBackground } from "./components/ui/stars-background";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp} from '@fortawesome/free-solid-svg-icons';
import { faInstagramSquare,faGithubSquare,faLinkedin} from '@fortawesome/free-brands-svg-icons';
import { LinkPreview } from "./components/ui/link-preview";
import Model from "./components/resend/Model";
import Skill from "./components/SkillsSet/Skill";
import { PinContainer } from "./components/ui/3d-pin";

import { motion } from "framer-motion";
import Project from "./components/project/project";
import { TechSkills } from "./tech_skill";
import Image from "next/image";

export default function Home() {

  const [modelstatus,showModel]=useState(false);

  const navItems = [
    {
      name: "Home",
      link: "/",
      icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Portfolio Hub",
      link: "#portfoliohub",
      icon: <IconSubtask className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Achivements",
      link: "#Achivements",
      icon: <IconActivity className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
   
  ];


  
  return (
   <main className=" overflow-x-clip">
    <FloatingNav navItems={navItems}/>
    <div id="Home">
      <AuroraBackground children=" " className=" " / >
        
    </div>
    


{/* Tech Skill  */}
<div id="portfoliohub">
<TechSkills />
</div>
      


    





{/* Project Section  */}

<div className="heading flex justify-center items-center text-5xl font-bold p-5">
    <h3>My Small Collection of <span className="gradient-text"> Recent Projects </span></h3>
</div>

<div className="carasoal flex flex-col sm:flex-row  overflow-x-auto sm:space-x-4  space-x-0 ">
<Project mark="Freelance Project" link="https://www.linkedin.com/in/vedant-patel-47707b210/" heading="SST BILL APP" content="This is a Inventory Management Application for our Client SST Limited." Isrc="/projects/SST.png"/>
<Project mark="DEV-IT College Committe Application" link="https://www.linkedin.com/in/vedant-patel-47707b210/" heading="DEV-IT APP" content="This is a Attandance Marking and Event Management Application with User Role Management with AWS Integration." Isrc="/projects/DEV-IT.png"/>
<Project mark="Gemini API Integrated Fashion Recommendation Application" link="https://www.linkedin.com/in/vedant-patel-47707b210/" heading="3D Wardrobe: Virtual Dressing Room" content="This is a Fashion Recommendation Application with Gemini API Integrated with Flutter Android Application." Isrc="/projects/3d Wardrobe.png"/>

<Project mark="Watch a Cross Platform Application" link="https://www.linkedin.com/posts/vedant-patel-47707b210_softwaredeveloper-motoshine-flutter-activity-7217408944661549056-Tz6c?utm_source=share&utm_medium=member_desktop" heading="MotoShine" content="A Service Booking Cross Platform Application with both Android and Desktop App" Isrc="/projects/MotoShine.PNG"/>
<Project mark="Collage Mini Project" link="https://www.linkedin.com/posts/vedant-patel-47707b210_sentinova-sentimentanalysis-nlp-activity-7188922149464621056-Lhol?utm_source=share&utm_medium=member_desktop" heading="SENTINOVA" content="Integrated VADER Model to Analysis Sentiment and Display Graph and Chart" Isrc="/projects/Sentiment.png"/>

</div>


    


    <div id="Achivements">
    <div className="w-full">
          <Timeline data={data} />
      
        </div>
    </div>



{/* SKill Section  */}
<div className="Skill p-5  " id="Expertise">
   

<div className="heading flex justify-center items-center text-5xl font-bold p-5">
    <h3>My <span className="gradient-text"> Expertises </span></h3>
</div>



        <div className="Skillpart grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 " >
        <Skill img="/Skill/skill1.png" text="Frontend Developer with expertise in React, Next.js, and modern web technologies and dynamic web applications."  heading={'FrontEnd Developer'}/>
        <Skill img="/Skill/skill2.png" text="Backend Developer skilled in  Flask, PostgreSQL & AWS building efficient and scalable web applications." heading={'BackEnd Developer'}/>
        <Skill img="/Skill/skill3.png" text="Led the dev of a mobile app for a client, from initial concept to deployment on Play stores." heading={'Freelance App Dev Project'}/>
        <Skill img="/Skill/skill5.png" text="Application Developer skilled in Flutter, specializing in cross-platform mobile and desktop applications." heading={'Application Developer'}/>
        </div>


</div>


      {/* MODEL EmAIL  */}

      {modelstatus?<Model setModelStatus={showModel} />: <div></div>}
      {/* MODEL EmAIL  */}

      {/* Footer  */}
<div className="footer" id="Contact">
      <BackgroundBeamsWithCollision>
      <h2 className="text-2xl relative z-5 md:text-4xl lg:text-7xl font-bold text-center text-black dark:text-white font-sans tracking-tight">
        Questions, Ideas, or Just a Chat?{" "} <br />
        <div className="relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
          <div className="absolute left-0 top-[1px] bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-4 from-purple-500 via-violet-500 to-pink-500 [text-shadow:0_0_rgba(0,0,0,0.1)]">
            <span className="">I'm All Ears!</span>
          </div>
          <div className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 py-4">
            <span className="">I'm All Ears!</span>
          </div>
        </div>

        <div id="button">

 <button className="p-[3px] relative">

  <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500  to-pink-500 py-4 rounded-lg" />
  <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
    <p className="text-4xl"  onClick={()=>showModel(true)}>Let&apos;s Connect</p>
  </div>
</button>
     </div>

     <div className="contact flex align-middle justify-center mt-1 space-x-10">


                <div className="linkedin">
              
              <LinkPreview
                url="https://drive.google.com/file/d/1zW6XHwioTt9yuiOMEIp27dJcvwKgp2I2/view?usp=sharing"
                className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-purple-500 to-pink-500"
                link="https://www.linkedin.com/in/vedant-patel-47707b210/"
              >
              <FontAwesomeIcon icon={faLinkedin} className="fa-fw icon-hover" id="linkdin"  style={{ width: '30px', height: '30px' }}/>
              </LinkPreview>

            </div>




              <div className="github">
              
              <LinkPreview
                url="https://drive.google.com/file/d/116mgqoVg8xJlaU_vnl2Hntr0XE3PVQBK/view?usp=sharing"
                className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-purple-500 to-pink-500"
                link="https://github.com/vedantpatel07756"
              >
              <FontAwesomeIcon icon={faGithubSquare} className="fa-fw icon-hover"  id="github" style={{ width: '30px', height: '30px' }}/>
              </LinkPreview>

            </div>


            <div className="insta">
              
              <LinkPreview
                url="https://drive.google.com/file/d/1cOLDxiDfoXU0VNvE73aFDE_wAHAN2xaA/view?usp=sharing"
                className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-purple-500 to-pink-500"
                link="https://www.instagram.com/vedantpatel07756/"
              >
              <FontAwesomeIcon icon={faInstagramSquare} className="fa-fw icon-hover" id="insta"  style={{ width: '30px', height: '30px', }}/>
              </LinkPreview>

            </div>

 


      
     
   
      
      </div>

      
      </h2>

      
    </BackgroundBeamsWithCollision>
    </div>


<div className="end flex justify-center font-bold bg-neutral-100 ">
  <h3>Crafted with passion and precision © <a href="https://www.linkedin.com/in/vedant-patel-47707b210/" target="blank">Vedant Patel</a> , 2024</h3>
</div>
    
   </main>
  );
}
