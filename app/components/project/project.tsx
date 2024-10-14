import React from 'react'
import { PinContainer } from '../ui/3d-pin'
import Image from "next/image";


const Project = ({mark,link,heading,content,Isrc}:
    {
        mark:string,
        link:string,
        heading:string,
        content:string,
        Isrc:string,
    }) => {
  return (
    <div className="h-[40rem] w-full flex items-center justify-center  ">

<PinContainer
  title={mark}
  href={link}
>
  <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
    <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
      {heading}
    </h3>
    <div className="text-base !m-0 !p-0 font-normal">
      <span className="text-slate-500 ">
       {content}
      </span>

    </div>

    <div className="relative mt-4">
            <Image 
              src={Isrc} 
              width={600} 
              height={400} 
              alt="my-Image" 
              className="rounded-lg" 
            />
          </div>
    {/* <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" /> */}
  </div>
</PinContainer>


</div> 
  )
}

export default Project
