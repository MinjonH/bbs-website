import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import footerImg from '../public/images/bbsFooter.png';
import { FiInstagram } from 'react-icons/fi';
import { ImWhatsapp } from 'react-icons/im';
import { BsFacebook } from 'react-icons/bs';
import { GrLinkedin, GrMail } from 'react-icons/gr';
import qrCode from '../public/images/qrLink.png';

function Footer() {
	return (
		<div className='w-full'>
			<div className='w-screen h-[25%] md:h-[50%] lg:h-screen relative'>
				<div className='absolute top-0 left-0 w-full h-[25vh] md:h-[50vh] lg:h-[100vh] z-10 bg-black'>
					<div className='absolute z-10 text-white font-ttHoves top-[10%] md:top-[25%] left-[50%] translate-x-[-50%] translate-y-[-25%]'>
						<h1 className='font-bold text-2xl md:text-5xl lg:text-[50pt] tracking-wider'>
							Let&apos;s Connect
						</h1>
					</div>

					<div className='text-sm md:text-2xl lg:text-[25pt] absolute z-10 font-semibold top-[40%] md:top-[50%] left-[25%] translate-x-[-50%] translate-y-[-25%]'>
						<p className='text-white'>43 Knutzen Street</p>
						<p className='text-white md:py-4'>Empangeni</p>
						<p className='text-white'>3880</p>
					</div>

					<div className='text-sm md:text-2xl lg:text-[25pt] absolute z-10 font-semibold top-[40%] md:top-[50%] left-[75%] translate-x-[-50%] translate-y-[-25%]'>
						<p className='text-white'>Tel: 035 787 1453</p>
						<p className='text-white md:py-4'>Email: truss1@bbsgroup.co.za</p>
						<div className='flex items-left grid-cols-5 gap-4 m-auto pt-4'>
							<a
								href={`https://wa.me/27764110493?text=${encodeURIComponent()}`}
								target='_blank'
								rel='noreferrer'
							>
								<div className='linkDots'>
									<ImWhatsapp />
								</div>
							</a>
							{/* <a href='/' target='_blank' rel='noreferrer'>
								<div className='linkDots'>
									<GrLinkedin />
								</div>
							</a> */}
							<a
								href='https://www.facebook.com/BBSMicaBallito'
								target='_blank'
								rel='noreferrer'
							>
								<div className='linkDots'>
									<BsFacebook />
								</div>
							</a>
							{/* <a href='/' target='_blank' rel='noreferrer'>
								<div className='linkDots'>
									<FiInstagram />
								</div>
							</a> */}
							<Link href='mailto:truss1@bbsgroup.co.za'>
								<div className='linkDots'>
									<GrMail />
								</div>
							</Link>
						</div>
					</div>
					<div className='absolute z-[10] top-[70%] md:top-[75%] lg:top-[80%] left-[90%] translate-x-[-50%] translate-y-[-50%]'>
						<Link href='https://www.facebook.com/watch/?v=3108218539462337'>
							<div className='w-8 md:w-24'>
								<Image src={qrCode} />
							</div>
						</Link>
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
