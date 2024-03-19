import CardAbout from './cardAbout';
import phone from '../assets/phone_watch.png';

const About = () => {
	return (
		<div
			className='flex flex-col lg:flex-row gap-12 justify-between items-start p-5 px-[15%] h-max'
			id='about'
		>
			<CardAbout
				title='Get in touch with us'
				description='Maecenas sed diam eget risus varius blandit sit amet non magna.'
				link='#'
				linkText='Hire us'
				image=''
				alt=''
				hidden={false}
			/>
			<CardAbout
				title='Our Projects'
				description='Maecenas sed diam eget risus varius blandit sit amet non magna.'
				link='#'
				linkText='See proyects'
				image={phone}
				alt='Smartphone and smartwatch'
				hidden={false}
			/>
		</div>
	);
};

export default About;
