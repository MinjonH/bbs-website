import React from 'react';
import image1 from '../public/images/project4.jpg';
import image2 from '../public/images/project5.jpg';
import image3 from '../public/images/project6.jpg';
import ProjectItem from './ProjectItem';

const Projects = () => {
	return (
		<div className='w-full'>
			<div className='mx-12 px-2 py-20'>
				<p className='font-black text-white text-[40pt] font-ttHoves mt-4 mb-8'>
					Projects
				</p>
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8'>
					<ProjectItem
						title='Project 1'
						backgroundImg={image1}
						projectUrl='/projectid'
						year='2020'
						description='hello i am a project. i was completed in 2022. this is how big i am and who worked on me. i am owned by someone'
					/>
					<ProjectItem
						title='Project 2'
						backgroundImg={image2}
						projectUrl='/crypto'
						year='2020'
						description='hello i am a project. i was completed in 2022. this is how big i am and who worked on me. i am owned by someone'
					/>
					<ProjectItem
						title='Project 3'
						backgroundImg={image3}
						projectUrl='/crypto'
						year='2020'
						description='hello i am a project. i was completed in 2022. this is how big i am and who worked on me. i am owned by someone'
					/>
					<ProjectItem
						title='Project 3'
						backgroundImg={image3}
						projectUrl='/crypto'
						year='2020'
						description='hello i am a project. i was completed in 2022. this is how big i am and who worked on me. i am owned by someone'
					/>
				</div>
			</div>
		</div>
	);
};

export default Projects;
