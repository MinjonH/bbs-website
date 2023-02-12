import React from 'react';
import Link from 'next/link';

function ActionBtn() {
	return (
		<div className='w-full items-center py-10 lg:py-14 grid grid-cols-4 2xl:grid-cols-5 gap-4 md:gap-12 lg:gap-24 text-center bg-[#036fb4]'>
			<div className='ml-[5%] md:ml-[15%] lg:ml-[25%] col-span-2 2xl:col-span-3 lg:w-[30rem]'>
				<div className=' text-xl md:text-[2.5rem] lg:text-6xl leading-snug font-ttHoves tracking-widest text-white'>
					Ready to pull the trigger?
				</div>
			</div>
			<Link href='/contact'>
				<div className='lg:mr-20 uppercase hover:border-gray-400 border-solid border-[1px] md:p-4 lg:p-6 bg-[#ff7500] hover:text-white border-[#ff7500] hover:scale-95 hover:bg-white/0  duration-[400ms] font-openSans tracking-wider font-semibold text-sm lg:text-[14pt] cursor-pointer mr-2'>
					GET A QUOTE
				</div>
			</Link>
			<a href='tel:0764110493' target='_blank' rel='noreferrer'>
				<div className='mr-2 -ml-2 md:mr-12 lg:mr-20 uppercase hover:border-gray-400 border-solid border-[1px] md:p-4 lg:p-6 bg-[#fdbe00] hover:text-white border-[#fdbe00] hover:bg-white/0  hover:scale-95 duration-[400ms] font-openSans tracking-wider font-semibold text-sm lg:text-[14pt] cursor-pointer'>
					TALK TO SOMEONE
				</div>
			</a>
		</div>
	);
}

export default ActionBtn;
