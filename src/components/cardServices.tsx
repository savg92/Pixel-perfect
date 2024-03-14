import React from 'react';

const Card = ({
	icon,
	title,
	description,
	link,
}: {
	icon: React.ReactElement;
	title: string;
	description: string;
	link: string;
}) => {
	return (
		<div className='card flex flex-col justify-center items-center p-7 bg-white shadow-md gap-4 h-[26rem] w-96'>
			<div className='bg-[#3871ff] text-white rounded-full p-3 m-1'>{icon}</div>
			<h3 className='  font-bold'>{title}</h3>
			<p className='text-gray-400 text-pretty h-40'>{description}</p>
			<button className='border-2 border-gray-400 text-gray-400 rounded-sm p-2 hover:bg-gray-500 hover:text-white mt-5 w-40'>
				<a href={link}>Learn more</a>
			</button>
		</div>
	);
};

export default Card;
