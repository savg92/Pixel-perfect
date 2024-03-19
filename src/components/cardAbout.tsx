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
	console.log('hidden');
	return (
		<div className='flex flex-col md:flex-row md:w-[90%] bg-[#3871ff] text-white md:h-60'>
			<div className=' flex gap-4 flex-col py-6 pl-6 pr-6 md:pr-0'>
				<h1 className='text-3xl font-bold text-start'>{title}</h1>
				{/* <p className=' w-[90%] text-justify'>{description}</p> */}
				<p
					className={image ? 'text-pretty text-start text-sm' : 'md:w-[60%] text-pretty text-start text-sm'}
				>
					{description}
				</p>
				<div className='flex justify-start items-start gap-5'>
					<button className='bg-blue-600 rounded-sm p-2 hover:bg-blue-700 w-40 flex justify-center items-center gap-2 border-[1px] border-white my-2'>
						<a href={link}>{linkText}</a>
					</button>
				</div>
			</div>
			<div className='flex items-end justify-center  md:pr-3 md:justify-norma'>
				<img
					src={image}
					alt={alt}
					// className='w-64 h-48'
					className={hidden ? 'hidden' : 'w-[40%] md:w-auto md:h-[90%]'}
				/>
			</div>
		</div>
	);
};

export default CardAbout;
