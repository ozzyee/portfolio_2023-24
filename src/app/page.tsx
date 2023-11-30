"use client"
import React, {useEffect, useRef} from 'react';
import {Section} from "@/components/section";
import styles from './home.module.scss';
import {Footer} from "@/components/footer";

const Home = () => {

	return (
		 <>
			 <div className={styles.container}>
				 <Section imageSrc={"/ozzy-home.jpg"} >
					 <div className="flex flex-col justify-center items-center h-full md:p-10">
						 <div className={"p-5"}>
							 <h1 className="text-5xl font-bold">Oscar Earle</h1>
							 <h2 className={"text-2xl font-bold"}>Software Engineer</h2>
							 <br/>
							 <p>
								 I’m Passionate about tech and developing digital products, in a fast paced environment. I have a wealth
								 of experience working in the financial technology sector. I've developed critical technical skills,
								 along with an adeptness for teamwork, time management and delivering high quality software under
								 pressure.
							 </p>
						 </div>
					 </div>
				 </Section>

				 <Section imageSrc={"/howAmI.jpg"} hideOnMobile={true}>
					 <div className="flex flex-col justify-center items-center h-full md:p-10">
						 <div className={"p-5"}>
							 <h1 className="text-5xl font-bold">How Am I</h1>
							 <br/>
							 <p>
								 I'm Oscar, a passionate software engineer with a love for technology since childhood. Despite my first
								 encounter with computers at 7, I didn't code until 2019 after a pandemic-induced career shift from chef
								 to software engineering. My initial project, a website for a friend, sparked my interest in web
								 development, driving me to learn HTML, CSS, and JavaScript.
							 </p>
							 <br/>
							 <p>
								 Eager to expand my skills, I self-learned advanced technologies like React and Node.js, mastering
								 databases along the way. Seeking structured learning, I enrolled in a bootcamp, deepening my expertise
								 and helping others navigate software engineering complexities. This decision marked a pivotal moment in
								 my ongoing growth and expertise acquisition.
							 </p>
						 </div>
					 </div>
				 </Section>
			 </div>
		 </>
	);
};

export default Home;
