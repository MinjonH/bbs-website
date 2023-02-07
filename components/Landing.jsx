import React from 'react';
import Image from 'next/image';
import BBSImage from '../public/images/bbsLanding.jpg';

function Landing() {
	return (
		<div className='w-full'>
			<div className='w-screen h-[100vh] relative'>
				<div className='absolute top-0 left-0 w-full h-[100vh] z-10 bg-black'>
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
