import Image from "next/image";
import React from "react";




export const data = [
    {
      title: "President of DEV-IT",
      content: (
     <main className="flex flex-col space-y-2">
        <p className="text-neutral-800 dark:text-neutral-200 text-xl md:text-sm mb-8 font-bold font-mono">
        As the President of DEV-IT, I lead the IT branch committee at KDKCE College, where I focus on fostering technological innovation, empowering students with opportunities to grow their skills, and building a collaborative environment to shape the next generation of IT leaders.
        </p>
      
        <div className="flex flex-row w-full space-x-10">
          {/* First Image on the left */}
          <div className="relative">
            <Image 
              src={'/Achivements/Vedant.jpg'} 
              width={600} 
              height={400} 
              alt="my-Image" 
              className="rounded-lg" 
            />
          </div>
      
          {/* Two images stacked on the right */}
          <div className="flex flex-col w-full space-y-2">
            <div className="relative !ml-2">
              <Image 
                src={'/Achivements/DEV2.jpeg'} 
                width={200} 
                height={80} 
                alt="my-Image" 
                className="rounded-lg !ml-2" 
              />
            </div>
      
            <div className="relative">
              <Image 
                src={'/Achivements/DEV3.jpeg'} 
                width={200} 
                height={100} 
                alt="my-Image" 
                className="rounded-lg" 
              />
            </div>
          </div>
        </div>
        </main>
      

      
      
      ),
    },
    {
      title: "SPARK 2024 Winner",
      content: (
        <main className="flex flex-col space-y-2">
      <p className="text-neutral-800 dark:text-neutral-200 text-xl md:text-sm mb-8 font-bold font-mono">
    Proud winner of Spark 2024, a prestigious national-level conference, recognized for presenting groundbreaking insights and contributions to the IT industry.
</p>

      
        <div className="flex flex-row w-full space-x-10">
          {/* First Image on the left */}
          <div className="relative">
            <Image 
              src={'/Achivements/Spark1.jpeg'} 
              width={600} 
              height={400} 
              alt="my-Image" 
              className="rounded-lg" 
            />
          </div>
      
          {/* Two images stacked on the right */}
          <div className="flex flex-col w-full space-y-2">
            <div className="relative !ml-2">
              <Image 
                src={'/Achivements/Spark2.jpeg'} 
                width={200} 
                height={100} 
                alt="my-Image" 
                className="rounded-lg !ml-2" 
              />
            </div>
      
            <div className="relative">
              <Image 
                src={'/Achivements/Spark3.jpeg'} 
                width={200} 
                height={100} 
                alt="my-Image" 
                className="rounded-lg" 
              />
            </div>
          </div>
        </div>
        </main>
      ),
    },
    {
      title: "Certificates",
      content: (
        <main className="flex flex-col space-y-2">
        <p className="text-neutral-800 dark:text-neutral-200 text-xl md:text-sm mb-8 font-bold font-mono">
        Displayed is a collection of my certificates, highlighting key achievements and certificate that underscore my commitment to excellence in the IT field.
  </p>
  
        
          <div className=" flex  flex-col w-full space-y-2">
            {/* First Image on the left */}
            <div className="relative  flex space-x-4 ">
              <Image 
                src={'/Achivements/Certificate1.png'} 
                width={300} 
                height={100} 
                alt="my-Image" 
                className="rounded-lg border-2 border-black" 
              />

            <Image 
                  src={'/Achivements/Certificate2.png'} 
                  width={300} 
                  height={100} 
                  alt="my-Image" 
                  className="rounded-lg border-2 border-black" 
                />
            </div>
        
              {/* <div className="relative !ml-2">
                <Image 
                  src={'/Achivements/Certificate2.png'} 
                  width={300} 
                  height={100} 
                  alt="my-Image" 
                  className="rounded-lg !ml-2" 
                />
              </div> */}
        
              <div className="relative flex space-x-4">
                <Image 
                  src={'/Achivements/Certificate3.png'} 
                  width={300} 
                  height={100} 
                  alt="my-Image" 
                  className="rounded-lg border-2 border-black" 
                />
             
             <Image 
                  src={'/Achivements/Certificate4.png'} 
                  width={300} 
                  height={100} 
                  alt="my-Image" 
                  className="rounded-lg border-2 border-black" 
                />
              </div>

              {/* <div className="relative">
                <Image 
                  src={'/Achivements/Certificate4.png'} 
                  width={300} 
                  height={100} 
                  alt="my-Image" 
                  className="rounded-lg" 
                />
             
              </div> */}
            </div>
         
          </main>
      ),
    },];