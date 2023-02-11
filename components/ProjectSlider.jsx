import React from 'react';
import Carousel from './Carousel';

const ProjectSlider = () => {
	return (
		<div className='w-full py-16'>
			<div className='mx-auto'>
				<h1 className='px-24 font-bold text-5xl pb-12 font-openSans tracking-widest text-white'>
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
