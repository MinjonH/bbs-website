import Image from 'next/image';
import React from 'react';
import myLogo from '../public/images/myLogo.png';

function Copyright() {
	return (
		<>
			<div className='absolute z-10 -mt-16 bg-[grey] h-[1px] w-[90%] left-[50%] translate-x-[-50%]'></div>
			<div className='absolute z-10 text-white -mt-8 left-[11%] translate-x-[-50%] hover:scale-110 cursor-pointer duration-300'>
				<Image src={myLogo} className='w-10' />
			</div>
			<div className='absolute z-10 text-white -mt-8 left-[7%] translate-x-[-50%]'>
				<p className='text-[#d6d6d6] font-ttHoves'>created by</p>
			</div>
			<div className='absolute z-10 text-white -mt-8 left-[50%] translate-x-[-50%]'>
				<p className='text-[#d6d6d6] font-ttHoves'>© BBS Mica Empangeni</p>
			</div>
		</>
	);
}

export default Copyright;
