import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { AiOutlineMenu, AiOutlineClose, AiOutlineMail } from 'react-icons/ai';
import { ImWhatsapp } from 'react-icons/im';
import { BsFacebook } from 'react-icons/bs';
import { IoCallOutline } from 'react-icons/io5';
import { FiInstagram } from 'react-icons/fi';
import Image from 'next/image';
import BBSLogo from '../public/images/bbsLogo.png';
import Modal from './Modal';
import ProjectButton from './ProjectButton';
import ContactButton from './ContactButton';

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

	const onSubmit = (event) => {
		event.preventDefault(event);
		console.log(event.target.name.value);
		console.log(event.target.email.value);
	};

	return (
		<div
			className={
				colour
					? 'fixed w-screen h-20 shadow-xl bg-white text-black z-[100] ease-in duration-700'
					: 'fixed w-screen h-20 z-[100] text-white ease-out duration-700'
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
						<li className='ml-10 text-md p-2'>
							<ProjectButton />
						</li>
						<li className='ml-10 text-md p-2'>
							<ContactButton />
						</li>
						<div>
							<Modal onSubmit={onSubmit} />
						</div>
					</ul>

					{/* Hamburger button */}
					<div onClick={handleNav} className='md:hidden'>
						<AiOutlineMenu size={25} />
					</div>
				</div>
			</div>

			<div>
				<Link href='/'>
					<Image
						alt='logo'
						className={
							colour
								? 'ease-out w-28 absolute right-6 lg:right-12 top-4 duration-700'
								: 'absolute w-36 2xl:w-52 right-6 lg:right-12 top-6 ease-in duration-700 hidden md:flex'
						}
						src={BBSLogo}
					/>
				</Link>
			</div>

			{/* Sidenav */}
			<div
				className={
					nav
						? 'z-[100] md:hidden fixed left-0 top-0 w-full h-full bg-black/70'
						: ''
				}
			>
				<div
					className={
						nav
							? 'z-[100] fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-full bg-white p-10 ease-in duration-700'
							: 'z-[100] fixed left-[-100%] h-full top-0 p-10 ease-in duration-700'
					}
				>
					<div>
						{/* Image container */}
						<div className='flex w-full items-center justify-between'>
							<Image src={BBSLogo} alt='logo' width={95} />
							{/* Icon container */}
							<div
								onClick={handleNav}
								className='rounded-full shadow-lg shadow-gray-300 p-3 cursor-pointer'
							>
								<AiOutlineClose className='text-black' />
							</div>
						</div>
						<div className='pt-12 flex flex-col'>
							<ul className='uppercase text-black'>
								<Link href='/'>
									<li className='py-4 text-sm'>Home</li>
								</Link>
								<li className='py-4 text-sm'>
									<ProjectButton />
								</li>
								<li className='py-4 text-sm'>
									<ContactButton />
								</li>
							</ul>
							<div className='pt-40 uppercase tracking-widest text-center text-black'>
								<p>Let&apos;s Connect</p>
								<div className='flex items-center justify-between my-8 w-full'>
									{/* <a href='/' target='_blank' rel='noreferrer'>
										<div className='linkDotsMobile'>
											<FaLinkedinIn />
										</div>
									</a> */}
									<a
										href={`https://wa.me/27764110493?text=${encodeURIComponent(
											'Hi there'
										)}`}
										target='_blank'
										rel='noreferrer'
									>
										<div className='linkDotsMobile'>
											<ImWhatsapp />
										</div>
									</a>

									<a
										href='https://www.facebook.com/BBSTrussDivision'
										target='_blank'
										rel='noreferrer'
									>
										<div className='linkDotsMobile'>
											<BsFacebook />
										</div>
									</a>
									<a
										href='https://www.instagram.com/bbs_truss_division/'
										target='_blank'
										rel='noreferrer'
									>
										<div className='linkDotsMobile'>
											<FiInstagram />
										</div>
									</a>

									<a
										href='mailto:truss1@bbsgroup.co.za'
										target='_blank'
										rel='noreferrer'
									>
										<div className='linkDotsMobile'>
											<AiOutlineMail />
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
