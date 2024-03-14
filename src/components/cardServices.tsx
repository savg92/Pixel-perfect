import React from 'react';

const Card = ({ icon, title, description, link }: { icon: React.ReactElement; title: string; description: string; link: string }) => {
	return (
		<div className='card flex flex-col justify-center items-center p-5 bg-white shadow-md gap-3'>
			<div className='bg-blue-500 text-white rounded-full p-3'>{icon}</div>
			<h3 className='text-xl font-bold'>{title}</h3>
			<p className='text-[#9297a1]'>{description}</p>
			<button className='border-2 border-gray-400 text-gray-400 rounded-sm p-2 hover:bg-gray-500 hover:text-white w-40 mt-5'>
				<a href={link}>Learn more</a>
			</button>
		</div>
	);
};

export default Card;
