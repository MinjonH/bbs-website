import React from 'react';
import AboutImg from '../public/images/bbsAbout.png';
import Image from 'next/image';

function About() {
	return (
		<div className='w-full pt-[75%] lg:pt-24 items-center pb-24 lg:pb-16 lg:grid grid-cols-2'>
			<div className='w-full flex lg:ml-10 px-10'>
				<Image src={AboutImg} alt='/' />
			</div>
			<div className='pl-24 mr-24 sm:pt-12'>
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
				<div className='grid grid-cols-3 md:pt-6'>
					<div>
						<p className='lg:text-8xl md:text-6xl text-5xl font-openSans font-bold text-white'>
							<span className='text-[#ff7500]'>+</span>350
						</p>
						<p className='pt-2 uppercase tracking-wide font-ttHoves lg:text-center items-center md:text-sm'>
							executed projects
						</p>
					</div>
					<div>
						<p className='text-center lg:text-8xl md:text-6xl text-5xl font-openSans font-bold text-white'>
							50
							<span className='text-[#ff7500]'>Y</span>
						</p>
						<p className='pt-2 uppercase tracking-wide font-ttHoves text-center items-center md:text-sm'>
							experience
						</p>
					</div>
					<div>
						<p className='lg:text-right md:text-center lg:text-8xl md:text-6xl text-5xl font-openSans font-bold text-white'>
							<span className='text-[#ff7500]'>+</span>400
						</p>
						<p className='pt-2 uppercase tracking-wide font-ttHoves text-center items-center md:text-sm'>
							satisfied clients
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default About;
