import Image from 'next/image'
import React from 'react'

interface SkillProps {
  img: string;
  text: string;
  heading:string;
}

const Skill: React.FC<SkillProps> = ({ img, text ,heading}) => {
  return (
//     <main>
//     <div className="skill flex flex-col md:flex-row justify-between m-5 rounded-md h-auto md:h-[150px] shadow-xl p-5 bg-white">
//       <div className="img flex justify-center md:justify-start">
//         <Image src={img} width={200} height={100} alt='skill1' />
//       </div>
  
//       <div className="content flex pl-0 md:pl-5 mt-3 md:mt-0 flex-col justify-start text-center md:text-left">
//         <h2 className="gradient-text text-2xl md:text-3xl font-bold">{heading}</h2>
//         <p className="text-black text-lg md:text-xl">{text}</p>
//       </div>
//     </div>
//   </main>

<main>
  <div className="skill flex flex-col md:flex-row justify-between m-3 md:m-5 rounded-md h-auto md:h-[150px] lg:h-[150px] shadow-xl p-3 md:p-5 bg-white">
    <div className="img flex justify-center md:justify-start">
      <Image src={img} width={200} height={75} alt='skill1' />
    </div>

    <div className="content flex pl-0 md:pl-3 lg:pl-5 mt-2 md:mt-0 flex-col justify-start text-center md:text-left">
      <h2 className="gradient-text text-xl md:text-2xl lg:text-2xl font-bold">{heading}</h2> 
      <p className="text-black text-md md:text-md lg:text-lg">{text}</p>
    </div>
  </div>
</main>

  
  )
}

export default Skill
