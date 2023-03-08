import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import images
import image1 from '../public/images/project1.jpg';
import image2 from '../public/images/project2.jpg';
import image3 from '../public/images/project3.jpg';
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper';

export default function Carousel({ title1, title2, title3 }) {
	return (
		<>
			<Swiper
				centeredSlides={true}
				autoplay={{
					delay: 5000,
					disableOnInteraction: false,
				}}
				pagination={{
					clickable: true,
				}}
				modules={[Autoplay, Pagination, Navigation]}
				className='mySwiper'
			>
				<SwiperSlide>
					<Image className='slider' src={image1} alt='image 1' />
					<div className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
						<h3 className='text-xl md:text-3xl font-ttHoves font-bold uppercase text-white tracking-wider text-center'>
							{title1}
						</h3>

						<Link href='/projects/timber'>
							<p className='projectBtn'>More Info</p>
						</Link>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<Image className='slider' src={image2} alt='image 2' />
					<div className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
						<h3 className='text-xl md:text-3xl font-ttHoves font-bold uppercase text-white tracking-wider text-center'>
							{title2}
						</h3>

						<Link href='/projects/steel'>
							<p className='projectBtn'>More Info</p>
						</Link>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<Image className='slider' src={image3} alt='image 3' />
					<div className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
						<h3 className='text-xl md:text-3xl font-ttHoves font-bold uppercase text-white tracking-wider text-center'>
							{title3}
						</h3>
						<Link href='/projects/laminatedbeams'>
							<p className='projectBtn'>More Info</p>
						</Link>
					</div>
				</SwiperSlide>
			</Swiper>
		</>
	);
}
