import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Landing from '../components/Landing';
import ActionBar from '../components/ActionBar';
import About from '../components/About';
import ActionBtn from '../components/ActionBtn';
import ProjectSlider from '../components/ProjectSlider';

export default function Home() {
	return (
		<div className='scroll-smooth bg-[#292929]'>
			<Head>
				<title>BBS TRUSS DIVISION</title>
				<meta property='og:title' content='BBS Truss Division' />
				<meta
					property='og:description'
					content='BBS Truss Division provides professional roofing design and construction to the KZN area'
				/>
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='icon' href='/images/bbsIcon.png' />
			</Head>
			<div>
				<section className='absolute z-20 mt-[20%] md:mt-[15%] lg:mt-[12%] ml-12 md:ml-24 lg:ml-36 2xl:ml-64 text-4xl md:text-5xl xl:text-[70pt] font-ttHoves text-white'>
					<div>We can build your</div>
					<span className='xl:text-8xl md:text-6xl text-5xl mt-2 2xl:mt-8 text-left font-loveloLine'>
						DREAM
					</span>
					<div className='2xl:mt-20 md:mt-10 mt-2 text-[15pt] md:text-[20pt] xl:text-[25pt] md:w-[25rem] w-[15rem] font-belleza leading-tight md:leading-normal text-white'>
						Let us help you make your dream home a reality
					</div>
					<ul>
						<Link href='/contact/empangeni'>
							<button>
								<li className='yellowButton absolute -mt-4 md:-mt-18 lg:-mt-12 2xl:mt-0 font-openSans tracking-wider font-semibold text-[12pt] md:text-[14pt]'>
									Get in touch
								</li>
							</button>
						</Link>
					</ul>
				</section>
				<Landing />
				<ActionBar />
				<About />
				<ActionBtn />
				<ProjectSlider />
			</div>
		</div>
	);
}
