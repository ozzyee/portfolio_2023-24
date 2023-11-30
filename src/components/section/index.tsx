import React from 'react';
import styles from './section.module.scss';
import Image from "next/image";
import {SectionProps} from "@/components/section/section.types";


export function Section({children, imageSrc, hideOnMobile}: SectionProps) {
	return (
		 <div className="flex md:flex-row flex-col">
			 <div className={`${styles.section} flex-1`}>
				 {children}
			 </div>

			 {imageSrc &&
           <div className={`md:flex-1 h-64 md:max-w-[50em] md:h-[100vh] md:block relative z-40 ${hideOnMobile ? 'hidden' : 'block'}`} >
						 {/* BG Image */}
               <Image className={"fixed"} src="/bg.png" alt="Background" layout={"fill"} objectFit={"cover"}
                      objectPosition={"center"}/>

               <div className="flex flex-col justify-center items-center h-full">
								 {/*	  img of me for the home screen */}
                   <div className={"md:w-64 md:h-72  w-44 h-52 relative"}>

                       <Image
                           src={imageSrc}
                           alt={"Oscar"}
                           className={"z-40  object-cover rounded-md"}
                           fill
                       />
                   </div>
               </div>
           </div>
			 }
		 </div>
	);
}
