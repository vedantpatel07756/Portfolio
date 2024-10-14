// "use client";
// import { cn } from "@/lib/utils";
// import React, { ReactNode } from "react";
// import { Globe } from "./globe";
// import { GlobeDemo } from "./GlopeDemo";

// interface AuroraBackgroundProps extends React.HTMLProps<HTMLDivElement> {
//   children: ReactNode;
//   showRadialGradient?: boolean;
// }

// export const AuroraBackground = ({
//   className,
//   children,
//   showRadialGradient = true,
//   ...props
// }: AuroraBackgroundProps) => {
//   return (
//     <main>
//       <div
//         className={cn(
//           "relative flex flex-col  h-[100vh] items-center justify-center bg-zinc-50 dark:bg-zinc-900  text-slate-950 transition-bg",
//           className
//         )}
//         {...props}
//       >
//         <div className="absolute inset-0 overflow-hidden">
//           <div
//             //   I'm sorry but this is what peak developer performance looks like // trigger warning
//             className={cn(
//               `
//             [--white-gradient:repeating-linear-gradient(100deg,var(--white)_0%,var(--white)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--white)_16%)]
//             [--dark-gradient:repeating-linear-gradient(100deg,var(--black)_0%,var(--black)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--black)_16%)]
//             [--aurora:repeating-linear-gradient(100deg,var(--blue-500)_10%,var(--indigo-300)_15%,var(--blue-300)_20%,var(--violet-200)_25%,var(--blue-400)_30%)]
//             [background-image:var(--white-gradient),var(--aurora)]
//             dark:[background-image:var(--dark-gradient),var(--aurora)]
//             [background-size:300%,_200%]
//             [background-position:50%_50%,50%_50%]
//             filter blur-[10px] invert dark:invert-0
//             after:content-[""] after:absolute after:inset-0 after:[background-image:var(--white-gradient),var(--aurora)] 
//             after:dark:[background-image:var(--dark-gradient),var(--aurora)]
//             after:[background-size:200%,_100%] 
//             after:animate-aurora after:[background-attachment:fixed] after:mix-blend-difference
//             pointer-events-none
//             absolute -inset-[10px] opacity-50 will-change-transform`,

//               showRadialGradient &&
//                 `[mask-image:radial-gradient(ellipse_at_100%_0%,black_10%,var(--transparent)_70%)]`
//             )}
//           >

                
//           </div>
//         </div>

//         {/* {children} */}
//         {/* <GlobeDemo /> */}
//         <div className=" text-black font-bold text-8xl px-10  text-center">
//           Explore My World of <span className=" ">Innovative</span> Development and Creative Solutions.
//           </div>
        
//         <p className="text-xl font-semibold mt-8">Hi! I'm Vedant Patel, A Software Developer based in India</p>
//       </div>
//     </main>
//   );
// };


// "use client";
// import { cn } from "@/lib/utils";
// import React, { ReactNode } from "react";
// import { Globe } from "./globe";
// import { GlobeDemo } from "./GlobeDemo";


// "use client";
// import { cn } from "@/lib/utils";
// import React, { ReactNode } from "react";
// import { Globe } from "./globe";
// import { GlobeDemo } from "./GlopeDemo";

// interface AuroraBackgroundProps extends React.HTMLProps<HTMLDivElement> {
//   children: ReactNode;
//   showRadialGradient?: boolean;
// }

// export const AuroraBackground = ({
//   className,
//   children,
//   showRadialGradient = true,
//   ...props
// }: AuroraBackgroundProps) => {
//   return (
//     <main>
//       <div
//         className={cn(
//           "relative flex flex-col h-screen items-center justify-center bg-zinc-50 dark:bg-zinc-900 text-slate-950 transition-bg",
//           className
//         )}
//         {...props}
//       >
//         <div className="absolute inset-0 overflow-hidden">
//           <div
//             className={cn(
//               `
//             [--white-gradient:repeating-linear-gradient(100deg,var(--white)_0%,var(--white)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--white)_16%)]
//             [--dark-gradient:repeating-linear-gradient(100deg,var(--black)_0%,var(--black)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--black)_16%)]
//             [--aurora:repeating-linear-gradient(100deg,var(--blue-500)_10%,var(--indigo-300)_15%,var(--blue-300)_20%,var(--violet-200)_25%,var(--blue-400)_30%)]
//             [background-image:var(--white-gradient),var(--aurora)]
//             dark:[background-image:var(--dark-gradient),var(--aurora)]
//             [background-size:300%,_200%]
//             [background-position:50%_50%,50%_50%]
//             filter blur-[10px] invert dark:invert-0
//             after:content-[""] after:absolute after:inset-0 after:[background-image:var(--white-gradient),var(--aurora)] 
//             after:dark:[background-image:var(--dark-gradient),var(--aurora)]
//             after:[background-size:200%,_100%] 
//             after:animate-aurora after:[background-attachment:fixed] after:mix-blend-difference
//             pointer-events-none
//             absolute -inset-[10px] opacity-50 will-change-transform`,
//               showRadialGradient &&
//                 `[mask-image:radial-gradient(ellipse_at_100%_0%,black_10%,var(--transparent)_70%)]`
//             )}
//           ></div>
//         </div>

//         <div className="text-black font-bold text-center px-4 sm:px-10">
//           <h1 className="text-3xl sm:text-5xl lg:text-8xl leading-tight">
//             Explore My World of <span className="">Innovative</span> Development and Creative Solutions.
//           </h1>
//         </div>
        
//         <p className="text-lg sm:text-xl font-semibold mt-4 sm:mt-8 px-4 sm:px-0 text-center">
//           Hi! I'm Vedant Patel, A Software Developer based in India
//         </p>
//       </div>
//     </main>
//   );
// };


"use client";
import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";


interface AuroraBackgroundProps extends React.HTMLProps<HTMLDivElement> {
  // children: ReactNode;
  showRadialGradient?: boolean;
}

export const AuroraBackground = ({
  className,

  showRadialGradient = true,
  ...props
}: AuroraBackgroundProps) => {
  return (
    <main>
      <div
        className={cn(
          "relative flex flex-col h-screen items-center justify-center bg-zinc-50 dark:bg-zinc-900 text-slate-950 transition-bg",
          className
        )}
        {...props}
      >
        <div className="absolute inset-0 overflow-hidden">
          <div
            className={cn(
              `
            [--white-gradient:repeating-linear-gradient(100deg,var(--white)_0%,var(--white)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--white)_16%)]
            [--dark-gradient:repeating-linear-gradient(100deg,var(--black)_0%,var(--black)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--black)_16%)]
            [--aurora:repeating-linear-gradient(100deg,var(--blue-500)_10%,var(--indigo-300)_15%,var(--blue-300)_20%,var(--violet-200)_25%,var(--blue-400)_30%)]
            [background-image:var(--white-gradient),var(--aurora)]
            dark:[background-image:var(--dark-gradient),var(--aurora)]
            [background-size:300%,_200%]
            [background-position:50%_50%,50%_50%]
            filter blur-[10px] invert dark:invert-0
            after:content-[""] after:absolute after:inset-0 after:[background-image:var(--white-gradient),var(--aurora)] 
            after:dark:[background-image:var(--dark-gradient),var(--aurora)]
            after:[background-size:200%,_100%] 
            after:animate-aurora after:[background-attachment:fixed] after:mix-blend-difference
            pointer-events-none
            absolute -inset-[10px] opacity-50 will-change-transform`,
              showRadialGradient &&
                `[mask-image:radial-gradient(ellipse_at_100%_0%,black_10%,var(--transparent)_70%)]`
            )}
          ></div>
        </div>

        <div className="text-black font-bold text-center px-4 sm:px-10">
          <h1 className="text-3xl sm:text-5xl lg:text-8xl leading-tight">
            Explore My World of <span className="">Innovative</span> Development and Creative Solutions.
          </h1>
        </div>
        
        <p className="text-lg sm:text-xl font-semibold mt-4 sm:mt-8 px-4 sm:px-0 text-center">
          Hi! I&apos;m Vedant Patel, A Software Developer based in India
        </p>

        {/* Scroll Down Arrow */}
        <div className="absolute bottom-8 animate-bounce">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 text-black dark:text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </div>
    </main>
  );
};
