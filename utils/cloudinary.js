import cloudinary from 'cloudinary';

// @ts-ignore
cloudinary.config({
	cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || null,
	api_key: process.env.CLOUDINARY_API_KEY || null,
	api_secret: process.env.CLOUDINARY_API_SECRET || null,
	secure: true,
});

export default cloudinary;
