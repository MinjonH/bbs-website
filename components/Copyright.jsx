import Image from 'next/image';
import React from 'react';
import myLogo from '../public/images/myLogo.png';

function Copyright() {
	return (
		<div className='md:mt-28 lg:mt-0'>
			<div className='absolute z-10 md:mt-[50%] lg:-mt-16 bg-[grey] h-[1px] w-[90%] left-[50%] translate-x-[-50%]'></div>
			<div className='absolute z-10 text-white md:mt-[52%] lg:-mt-9 md:left-[21%] lg:left-[15%] 2xl:left-[11.3%] translate-x-[-50%] hover:scale-110 cursor-pointer duration-300'>
				<Image src={myLogo} alt='/' className='w-10' />
			</div>
			<div className='absolute z-10 text-white md:mt-[52%] lg:-mt-9 md:left-[11%] lg:left-[9%] 2xl:left-[7%] translate-x-[-50%]'>
				<p className='text-[#d6d6d6] font-ttHoves'>Designed by</p>
			</div>
			<div className='absolute z-10 text-white md:mt-[52%] lg:-mt-9 left-[50%] translate-x-[-50%]'>
				<p className='text-[#d6d6d6] font-ttHoves'>© BBS Mica Empangeni</p>
			</div>
		</div>
	);
}

export default Copyright;
