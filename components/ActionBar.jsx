import React from 'react';
import { IoCallOutline } from 'react-icons/io5';
import { AiOutlineMail } from 'react-icons/ai';
import { GoLocation } from 'react-icons/go';

function ActionBar() {
	return (
		<section className='relative z-[90]'>
			<div className='max-w-[50%] mx-auto block'>
				<div className='grid grid-cols-6 place-items-center h-48 -mt-20 bg-white shadow-md'>
					<div className='bg-[#ff7500]'>
						<IoCallOutline className='cursor-pointer p-[10px]' size={75} />
					</div>

					<div className='cursor-pointer -ml-16 p-10 border-r-[1px] border-[grey]'>
						<h1 className='font-openSans uppercase font-bold text-2xl tracking-wide pb-2'>
							Call Us
						</h1>
						<p className='font-openSans'>035 787 1453</p>
					</div>

					<AiOutlineMail
						className='cursor-pointer -ml-14 p-[10px] bg-[#ff7500]'
						size={75}
					/>

					<div className='cursor-pointer py-10 px-6 border-r-[1px] border-[grey] -ml-14'>
						<h1 className='font-openSans uppercase font-bold text-2xl tracking-wide pb-2'>
							Email Us
						</h1>
						<p className='font-openSans'>truss1@bbsgroup.co.za</p>
					</div>

					<div className='bg-[#ff7500]'>
						<GoLocation
							className='cursor-pointer p-[10px] ease-in duration-500'
							size={75}
						/>
					</div>

					<div className='cursor-pointer -ml-12'>
						<h1 className='font-openSans uppercase font-bold text-2xl tracking-wide pb-2'>
							Visit Us
						</h1>
						<p className='font-openSans'>43 Knutzen Street</p>
						<p className='font-openSans'>Empangeni</p>
					</div>
				</div>
			</div>
		</section>
	);
}

export default ActionBar;
