import { ArrowRight } from 'lucide-react';
// import bsckground from '../assets/asset-background.jpg';

const Home = () => {
	return (
		<div className='flex py-32'>
			<div className='home text-white flex flex-col justify-start items-start p-5 w-3/6 gap-12 px-52'>
				<div>
					<h1 className='text-3xl font-bold text-start'>
						We build beautiful and reliable web solutions
					</h1>
					<p className='text-[#9297a1] text-start mt-5'>
						We strongly believe that communication, trust and transparency are
						the essential elements of successful business relationship. Ready
						for the journey?
					</p>
				</div>

				<div className='flex justify-center items-center gap-5'>
					<button className='border-2 border-gray-500 text-gray-500 rounded-sm p-2 hover:bg-gray-500 hover:text-white w-40'>
						Learn more
					</button>
					<button className='bg-[#3871ff] text-white rounded-sm p-2 hover:bg-blue-700 w-40 flex justify-center items-center gap-2'>
						Our proyects <ArrowRight className='w-5 h-5 ' />
					</button>
				</div>
			</div>
			{/* <div>
				<img
					src={bsckground}
					alt='background'
				/>
			</div> */}
		</div>
	);
};

export default Home;
