import Head from 'next/head';
import Image from 'next/image';
import cloudinary from '../../utils/cloudinary';

const steel = ({ images }) => {
	return (
		<div className='scroll-smooth bg-[#292929]'>
			<Head>
				<title>BBS TRUSS DIVISION - Steel Projects</title>
				<meta
					name='description'
					content='BBS Truss Division provides professional roofing design and construction to the KZN area'
				/>
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='icon' href='/images/bbsIcon.png' />
			</Head>
			<div className='w-full'>
				<div className='mx-12 px-2 py-20'>
					<h1 className='font-black text-white text-5xl md:text-[40pt] font-ttHoves mt-4 mb-8'>
						Light Guage Steel Projects
					</h1>

					<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8'>
						{images.map(({ public_id, format }) => (
							<div className='relative flex items-center justify-center h-96 w-full'>
								<Image
									alt='steel project photos'
									className='object-cover h-full'
									src={`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/c_scale,w_720/${public_id}.${format}`}
									width={720}
									height={480}
								/>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default steel;

export async function getStaticProps() {
	const results = await cloudinary.v2.search
		.expression(`folder:${process.env.CLOUDINARY_FOLDER2}/*`)
		.sort_by('created_at', 'asc')
		.max_results(400)
		.execute();

	let reducedResults = [];
	let i = 0;
	for (let result of results.resources) {
		reducedResults.push({
			id: i,
			height: result.height,
			width: result.width,
			public_id: result.public_id,
			created_at: result.created_at,
			format: result.format,
		});
		i++;
	}

	return {
		props: {
			images: reducedResults,
		},
	};
}
