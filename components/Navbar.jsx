import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { AiOutlineMenu, AiOutlineClose, AiOutlineMail } from 'react-icons/ai';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { IoCallOutline } from 'react-icons/io5';
import Image from 'next/image';
import BBSLogo from '../public/images/bbsLogo.png';

function Navbar() {
	const [nav, setNav] = useState(false);
	const [colour, setColour] = useState(false);

	const handleNav = () => {
		setNav(!nav);
	};

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY >= 90) {
				setColour(true);
			} else {
				setColour(false);
			}
		};
		window.addEventListener('scroll', handleScroll);
	}, []);

	return (
		<div
			className={
				colour
					? 'fixed w-full h-20 shadow-xl bg-white text-black z-[100] ease-in duration-700'
					: 'fixed w-full h-20 z-[100] text-white ease-out duration-700'
			}
		>
			{/* Create navbar links on left */}
			<div className='flex absolute justify-between items-center w-full h-full px-2 2xl:px-16'>
				<div>
					<ul className='hidden md:flex'>
						<Link href='/'>
							<li className='ml-10 text-md uppercase hover:border-b hover:border-gray-400 p-2'>
								Home
							</li>
						</Link>
						<Link href='/projects'>
							<li className='ml-10 text-md uppercase hover:border-b hover:border-gray-400 p-2'>
								Projects
							</li>
						</Link>
						<Link href='/contact'>
							<li className='ml-10 text-md uppercase hover:border-b hover:border-gray-400 p-2'>
								Contact
							</li>
						</Link>
						<div>
							<Link href='/contact'>
								<button>
									<li className='blueButton text-md font-semibold'>
										Get a quote
									</li>
								</button>
							</Link>
						</div>
					</ul>

					{/* Hamburger button */}
					<div onClick={handleNav} className='md:hidden'>
						<AiOutlineMenu size={25} />
					</div>
				</div>
			</div>

			<div>
				<Image
					alt='logo'
					className={
						colour
							? 'ease-out w-28 absolute right-12 top-4 duration-700'
							: 'absolute w-52 right-12 top-6 ease-in duration-700'
					}
					src={BBSLogo}
				/>
			</div>

			{/* Sidenav */}
			<div
				className={
					nav ? ' md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''
				}
			>
				<div
					className={
						nav
							? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500'
							: 'fixed left-[-100%] top-0 p-10 ease-in duration-500'
					}
				>
					<div>
						{/* Image container */}
						<div className='flex w-full items-center justify-between'>
							<Image src={BBSLogo} alt='logo' width='85' height='50' />
							{/* Icon container */}
							<div
								onClick={handleNav}
								className='rounded-full shadow-lg shadow-gray-300 p-3 cursor-pointer'
							>
								<AiOutlineClose />
							</div>
						</div>
						<div className='py-4 flex flex-col'>
							<ul className='uppercase'>
								<Link href='/'>
									<li className='py-4 text-sm'>Home</li>
								</Link>
								<Link href='/'>
									<li className='py-4 text-sm'>About</li>
								</Link>
								<Link href='/'>
									<li className='py-4 text-sm'>Projects</li>
								</Link>
								<Link href='/'>
									<li className='py-4 text-sm'>Contact</li>
								</Link>
							</ul>
							<div className='pt-40 uppercase tracking-widest text-[#9C89B8]'>
								<p>Let's Connect</p>
								<div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
									<a
										href='https://www.linkedin.com/in/minjon-holtzhausen'
										target='_blank'
										rel='noreferrer'
									>
										<div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 duration-300'>
											<FaLinkedinIn />
										</div>
									</a>

									<a
										href='https://github.com/MinjonH'
										target='_blank'
										rel='noreferrer'
									>
										<div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 duration-300'>
											<FaGithub />
										</div>
									</a>

									<a
										href='mailto:minjon.holtzhausen@gmail.com'
										target='_blank'
										rel='noreferrer'
									>
										<div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 duration-300'>
											<AiOutlineMail />
										</div>
									</a>

									<a href='tel:+27836029730'>
										<div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 duration-300'>
											<IoCallOutline />
										</div>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Navbar;
