import CardAbout from './cardAbout';
import phone from '../assets/phone_watch.png';

const About = () => {
	return (
		<div
			className='flex flex-row gap-12 justify-between items-center p-5 px-52'
			id='about'
		>
			<CardAbout
				title='Get in touch with us'
				description='Maecenas sed diam eget risus varius blandit sit amet non magna.'
				link='https://www.google.com'
				linkText='Hire us'
				image=''
				alt=''
				hidden={true}
			/>
			<CardAbout
				title='Our Projects'
				description='Maecenas sed diam eget risus varius blandit sit amet non magna.'
				link='https://www.google.com'
				linkText='See proyects'
				image={phone}
				alt='Smartphone and smartwatch'
				hidden={false}
			/>
		</div>
	);
};

export default About;
