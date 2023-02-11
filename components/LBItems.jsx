import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const LBItems = ({ title, backgroundImg, year, projectUrl, description }) => {
	return (
		<Link href={projectUrl}>
			<div className='relative flex items-center justify-center h-96 w-full hover:shadow-lg hover:shadow-[grey] group hover:bg-black/30 transition duration-700 cursor-pointer '>
				<Image
					className='group-hover:opacity-30 opacity-60 object-cover h-full'
					src={backgroundImg}
					alt='/'
				/>
				<div className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] '>
					<h3 className='text-4xl text-white font-[1000] font-ttHoves tracking-wider text-center mb-4 '>
						{title}
					</h3>
					<p className='mb-4 mt-2 font-openSans text-white text-center'>
						{year}
					</p>
					<p className='pt-4 text-white font-openSans text-left align-middle -mx-12'>
						{description}
					</p>
				</div>
			</div>
		</Link>
	);
};

export default LBItems;
