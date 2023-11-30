import React from 'react';
import Image from "next/image";

export function Header() {
	return (
		 <header
				className="bg-white  fixed top-0 right-0 left-0 h-[6vh] p-4 z-40 flex items-center content-center">
			 {/* Logo */}
			 <Image src={"/logo.png"} alt={"logo"} width={40} height={40} className="z-50"/>
		 </header>
	);
}
