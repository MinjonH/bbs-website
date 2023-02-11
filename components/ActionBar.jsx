import React, { useState, useEffect } from 'react';
import { IoCallOutline } from 'react-icons/io5';
import { AiOutlineMail } from 'react-icons/ai';
import { GoLocation } from 'react-icons/go';

function ActionBar() {
	const [hide, setHide] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY >= 90) {
				setHide(true);
			} else {
				setHide(false);
			}
		};
		window.addEventListener('scroll', handleScroll);
	}, []);

	return (
		<section
			className={
				hide
					? 'relative z-20 duration-700 ease-in hidden lg:flex'
					: 'opacity-0 ease-out duration-700 hidden lg:flex'
			}
		>
			<div className='max-w-[50%] mx-auto block'>
				<div className='grid grid-cols-6 place-items-center h-40 2xl:h-48 lg:-mt-20 bg-white'>
					<div className='bg-[#ff7500]'>
						<IoCallOutline className='p-[10px] w-[50px] h-[50px] 2xl:w-[75px] 2xl:h-[75px]' />
					</div>

					<div className='-ml-12 2xl:-ml-16 p-6 2xl:p-10 border-r-[1px] border-[grey]'>
						<h1 className='font-openSans uppercase font-bold text-xl 2xl:text-2xl tracking-wide pb-2'>
							Call Us
						</h1>
						<p className='font-openSans text-sm 2xl:text-base'>035 787 1453</p>
					</div>

					<AiOutlineMail className='-ml-14 p-[10px] bg-[#ff7500] w-[50px] h-[50px] 2xl:w-[75px] 2xl:h-[75px]' />

					<div className='px-4 py-6 2xl:py-10 2xl:px-6 border-r-[1px] border-[grey] -ml-10 2xl:-ml-14'>
						<h1 className='font-openSans uppercase font-bold text-xl 2xl:text-2xl tracking-wide pb-2'>
							Email Us
						</h1>
						<p className='font-openSans text-sm 2xl:text-base'>
							truss1@bbsgroup.co.za
						</p>
					</div>

					<div className='bg-[#ff7500]'>
						<GoLocation className='cursor-pointer p-[10px] ease-in duration-500 w-[50px] h-[50px] 2xl:w-[75px] 2xl:h-[75px]' />
					</div>

					<div className='cursor-pointer -ml-8 2xl:-ml-12'>
						<h1 className='font-openSans uppercase font-bold text-xl 2xl:text-2xl tracking-wide pb-2'>
							Visit Us
						</h1>
						<p className='font-openSans text-sm 2xl:text-base'>
							43 Knutzen Street
						</p>
						<p className='font-openSans text-sm 2xl:text-base'>Empangeni</p>
					</div>
				</div>
			</div>
		</section>
	);
}

export default ActionBar;
