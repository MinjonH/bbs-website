import React from 'react';
import Carousel from './Carousel';

const ProjectSlider = () => {
	return (
		<div className='w-full py-8 md:py-16'>
			<div className='mx-auto'>
				<h1 className='pl-12 md:px-24 font-bold text-4xl md:text-5xl pb-6 md:pb-12 font-openSans tracking-widest text-white'>
					What we offer
				</h1>
				<div>
					<Carousel
						title1='Timber Trusses'
						title2='Light Gauge Steel Trusses'
						title3='Laminated Beams'
					/>
				</div>
			</div>
		</div>
	);
};

export default ProjectSlider;
