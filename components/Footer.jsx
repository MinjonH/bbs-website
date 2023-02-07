import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import footerImg from '../public/images/bbsFooter.png';
import { FiInstagram } from 'react-icons/fi';
import { ImWhatsapp } from 'react-icons/im';
import { BsFacebook } from 'react-icons/bs';
import { GrLinkedin, GrMail } from 'react-icons/gr';

function Footer() {
	return (
		<div className='w-full'>
			<div className='w-screen h-[100vh] relative'>
				<div className='absolute top-0 left-0 w-full h-[100vh] z-10 bg-black'>
					<div className='absolute z-10 text-white font-ttHoves top-[25%] left-[50%] translate-x-[-50%] translate-y-[-25%]'>
						<h1 className='font-bold text-[50pt] tracking-wider'>
							Let's Connect
						</h1>
					</div>

					<div className='text-[25pt] absolute z-10 font-semibold top-[50%] left-[25%] translate-x-[-50%] translate-y-[-25%]'>
						<p className='text-white'>43 Knutzen Street</p>
						<p className='text-white'>Empangeni</p>
						<p className='text-white'>3880</p>
					</div>

					<div className='text-[25pt] absolute z-10 font-semibold top-[50%] left-[75%] translate-x-[-50%] translate-y-[-25%]'>
						<p className='text-white'>Tel: 035 787 1453</p>
						<p className='text-white'>Email: truss1@bbsgroup.co.za</p>
						<div className='flex items-left grid-cols-5 gap-4 m-auto pt-4'>
							<a href='/' target='_blank' rel='noreferrer'>
								<div className='linkDots'>
									<ImWhatsapp size={25} />
								</div>
							</a>
							<a href='/' target='_blank' rel='noreferrer'>
								<div className='linkDots'>
									<GrLinkedin size={25} />
								</div>
							</a>
							<a href='/' target='_blank' rel='noreferrer'>
								<div className='linkDots'>
									<BsFacebook size={25} />
								</div>
							</a>
							<a href='/' target='_blank' rel='noreferrer'>
								<div className='linkDots'>
									<FiInstagram size={25} />
								</div>
							</a>
							<Link href='/'>
								<div className='linkDots'>
									<GrMail size={25} />
								</div>
							</Link>
						</div>
					</div>
					<Image
						alt='Footer image'
						className='absolute z-1 object-cover opacity-[0.26]'
						fill
						src={footerImg}
					/>
				</div>
			</div>
		</div>
	);
}

export default Footer;
