import React from 'react';
import AboutImg from '../public/images/bbsAbout.png';
import Image from 'next/image';

function About() {
	return (
		<div className='w-full pt-24 flex items-center py-16 md:grid grid-cols-2'>
			<div className='w-full h-auto flex ml-10 '>
				<Image src={AboutImg} alt='/' />
			</div>
			<div className='pl-24 mr-24'>
				<p className='font-bold pb-4 text-5xl font-openSans tracking-widest text-white'>
					About Us
				</p>
				<p className='py-4 text-white leading-relaxed text-[20px]'>
					We are one of the largest and most established truss manufacturers in
					KZN, with a 7000 square meter manufacturing facility. Here, we provide
					an extensive range of roofing construction services. BBS Mica Truss
					Plant produces to a very high quality due to its fully automated
					computerized saws, 25-meter-long high-accuracy steel truss table, and
					laminating beam manufacturing unit.
				</p>
			</div>
		</div>
	);
}

export default About;
