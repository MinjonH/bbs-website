import React from 'react';
import Carousel from './Carousel';

const ProjectSlider = () => {
	return (
		<div id='projects' className='w-full'>
			<div className='mx-auto py-16'>
				<h1 className='px-24 font-bold text-5xl pb-12 font-openSans tracking-widest text-white'>
					Projects
				</h1>
				<div>
					<Carousel
						title1='Project 1'
						title2='Project 2'
						title3='Project 3'
						location1='Empangeni'
						location2='Durban'
						location3='Ballito'
						year1='2017'
						year2='2018'
						year3='2019'
					/>
				</div>
			</div>
		</div>
	);
};

export default ProjectSlider;
