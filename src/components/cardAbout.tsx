const CardAbout = ({
	title,
	description,
	link,
	linkText,
	image,
	alt,
	hidden,
}: {
	title: string;
	description: string;
	link: string;
	linkText: string;
	image: string;
	alt: string;
	hidden: boolean;
}) => {
	console.log('hidden')
	return (
		<div className='flex flex-row w-[80%] gap-12 bg-[#3871ff] text-white'>
			<div className=' flex gap-4 flex-col py-6 pl-6'>
				<h1 className='text-3xl font-bold text-start'>{title}</h1>
				<p className=' w-64 text-justify'>{description}</p>
				<div className='flex justify-start items-start gap-5'>
					<button className='bg-blue-600 rounded-sm p-2 hover:bg-blue-700 w-40 flex justify-center items-center gap-2 border-[1px] border-white my-2'>
						<a href={link}>{linkText}</a>
					</button>
				</div>
			</div>
			<div className='flex items-end justify-items-start pr-6'>
				<img
					src={image}
					alt={alt}
					// className='w-64 h-48'
					className={hidden ? 'hidden' : 'w-72 h-[12rem]'}
				/>
			</div>
		</div>
	);
};

export default CardAbout;
