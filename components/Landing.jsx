import React from 'react';
import Image from 'next/image';
import BBSImage from '../public/images/bbsLanding.jpg';

function Landing() {
	return (
		<div className='w-screen h-[55%]'>
			<div className='w-screen h-[55%] lg:h-screen absolute lg:relative'>
				<div className='absolute top-0 left-0 w-screen h-[100%] lg:h-[100%] z-10 bg-black'>
					<Image
						alt='steel trusses'
						className='absolute z-1 object-cover opacity-50'
						fill
						src={BBSImage}
					/>
				</div>
			</div>
		</div>
	);
}

export default Landing;
