import HTML from '../assets/html5-2.svg';
import CSS from '../assets/css3-1.svg';
import SASS from '../assets/sass.svg';
import Angular from '../assets/angularjs.svg';
import Python from '../assets/python.svg';
import Node from '../assets/nodejs.svg';

const Tecnologies = () => {
	return (
		<div
			className='bg-blue-500 text-white flex flex-row justify-between items-center p-5 -my-24 py-28 px-52'
			id='technology'
		>
			<div className=' w-3/5'>
				<h1 className='text-3xl font-bold text-start'>
					We use cutting edge technology
				</h1>
				<p className='text-[#9297a1] text-start mt-5 w-64'>
					Nullam id dolor id nibh ultricies vehicula ut id elit. Aenean lacinia
					bibendum nulla sed consectetur. Cum sociis natoque penatibus et magnis
					dis parturient montes, nascetur ridiculus mus. Nulla vitae elit
					libero, a pharetra augue. Vestibulum id ligula porta felis euismod
					semper. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
					auctor.
				</p>
			</div>
			<div className='flex flex-wrap w-52 gap-12'>
				<img
					src={HTML}
					alt='HTML5'
					className='w-20 h-20'
				/>
				<img
					src={CSS}
					alt='CSS3'
					className='w-20 h-20'
				/>
				<img
					src={SASS}
					alt='SASS'
					className='w-20 h-20'
				/>
				<img
					src={Node}
					alt='Node'
					className='w-20 h-20'
				/>
				<img
					src={Angular}
					alt='Angular'
					className='w-20 h-20'
				/>
				<img
					src={Python}
					alt='Python'
					className='w-20 h-20'
				/>
			</div>
		</div>
	);
};

export default Tecnologies;
