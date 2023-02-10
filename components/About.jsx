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
				<div className='grid grid-cols-3'>
					<div>
						<p className='text-8xl font-openSans font-bold text-white'>
							<span className='text-[#ff7500]'>+</span>350
						</p>
						<p className='pt-2 uppercase tracking-wide font-ttHoves text-center items-center'>
							executed projects
						</p>
					</div>
					<div>
						<p className='text-center text-8xl font-openSans font-bold text-white'>
							50
							<span className='text-[#ff7500]'>Y</span>
						</p>
						<p className='pt-2 uppercase tracking-wide font-ttHoves text-center items-center'>
							experience
						</p>
					</div>
					<div>
						<p className='text-right text-8xl font-openSans font-bold text-white'>
							<span className='text-[#ff7500]'>+</span>400
						</p>
						<p className='pt-2 uppercase tracking-wide font-ttHoves text-center items-center'>
							satisfied clients
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default About;
