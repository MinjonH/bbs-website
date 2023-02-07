import React from 'react';
import Link from 'next/link';

function ActionBtn() {
	return (
		<div className='w-full flex items-center py-14 md:grid grid-cols-5 gap-24 text-center bg-[#036fb4]'>
			<div className='ml-[25%] col-span-3 w-[30rem]'>
				<div className='text-6xl leading-snug font-ttHoves tracking-widest text-white'>
					Ready to pull the trigger?
				</div>
			</div>
			<Link href='/contact'>
				<div className='mr-20 uppercase hover:border-gray-400 border-solid border-[1px] py-6 px-6 bg-[#ff7500] hover:text-white border-[#ff7500] hover:scale-95 hover:bg-white/0  duration-[400ms] ont-openSans tracking-wider font-semibold text-[14pt] cursor-pointer'>
					GET A QUOTE
				</div>
			</Link>
			<div className='mr-20 uppercase hover:border-gray-400 border-solid border-[1px] py-6 px-6 bg-[#fdbe00] hover:text-white border-[#fdbe00] hover:bg-white/0  hover:scale-95 duration-[400ms] ont-openSans tracking-wider font-semibold text-[14pt] cursor-pointer'>
				Talk to someone
			</div>
		</div>
	);
}

export default ActionBtn;
