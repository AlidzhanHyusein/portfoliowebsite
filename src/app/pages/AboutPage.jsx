import React from 'react';
import Image from 'next/image';
import ProfileImage from '../../../public/img.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPython, faJs, faHtml5, faCss3, faReact, faGithubAlt, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';


export default function AboutPage() {
	return (
		<>
		<div className='flex flex-col md:flex-row gap-5 items-center overflow-hidden md:overflow-visible'>
			<div className='w-full z-100 md:w-1/2' >
				<h1 className='w-3/4 md:w-full bg-gradient-to-l from-accent to-accent/60  text-white md:max-w-1/2 text-end pl-5 pr-10 py-3 md:-mt-20 shadow-2xl shadow-accent/50 rounded-r-full text-3xl font-[700] '>About me</h1>
				
				<div className='md:px-20 p-3 md:mt-15'>
					<h2 className='text-xl md:text-6xl md:ml-30 font-[700]'>Hi!</h2>

					<p className='mt-10 md:ml-30 text-lg font-[600] mr:max-w-100 mr:absolute '>I'm a student at New Bulgarian University (NBU), where I'm learning C++, and I'm also studying Python at SoftUni. This repository contains my projects, exercises, and notes from my learning journey.</p>
				</div>
			</div>
			

			<div className='w-1/5 m mr:-mt-20 md:px-30 '>
				<div className='relative w-max mx-auto'>
					<Image src={ProfileImage} alt='Picture of me' className='relative z-10 max-w-80 drop-shadow-2xl drop-shadow-black/50 rotate-7 rounded-[3rem]'/>

					<div className='absolute top-10 left-10 border-2 border-accent bg-accent/40 shadow-2xl shadow-accent/40 w-full h-full rotate-7 rounded-[3rem]'/>
				</div>
			</div>
		</div>

		<div className='md:px-1 px-3 mt-15 flex flex-col md:grid md:grid-cols-2 md:max-w-3/4 md:p-5 gap-5 mx-auto'>
			<div className='p-5 neu-shadow rounded-3xl md:mr-20'>
				<h3 className='about-heading'>Technical skills</h3>
				
				<div className='grid grid-cols-3 gap-2 w-max'>
					<FontAwesomeIcon className='icon' icon={faPython}/>
					<FontAwesomeIcon className='icon' icon={faJs}/>
					<FontAwesomeIcon className='icon' icon={faReact}/>
					<FontAwesomeIcon className='icon' icon={faHtml5}/>
					<FontAwesomeIcon className='icon' icon={faCss3}/>
				</div>
			</div>

			<div className='neu-shadow p-5 rounded-3xl md:mr-15'>
				<h3 className='about-heading'>Education</h3>

				<ul className='list-disc px-5 space-y-2'>
					<li>
						<p className='text-accent text-lg'>2024 - Present </p>
						<p className='pl-1 font-bold'>Informatics Student | New Bulgarian University</p>
					</li>

					<li>
						<p className='text-accent text-lg'>2019 - 2024 </p>
						<p className='pl-1 font-bold'>Vocational High School of Civil Engineering, Architecture and Geodesy "Kolyo Ficheto"</p>
					</li>
				</ul>
			</div>

			<div className='neu-shadow p-5 rounded-3xl md:mr-20'>
				<h3 className='about-heading'>Languages</h3>
				
				<div className='flex flex-col gap-3'>
					<div className='flex items-center gap-1'>
						<p className='text-5xl'>🇬🇧</p>
						<p className='text-xl font-[700]'>English - C1</p>
					</div>

					<div className='flex items-center gap-1'>
						<p className='text-5xl'>🇧🇬</p>
						<p className='text-xl font-[700]'>Bulgarian - C1</p>
					</div>

					<div className='flex items-center gap-1'>
						<p className='text-5xl'>🇹🇷</p>
						<p className='text-xl font-[700]'>Turkish - B2</p>
					</div>
				</div>
			</div>

			<div id='contact' className='neu-shadow h-65 md:w-114 md:h-full p-5 md:mr-20 rounded-3xl'>
				<h3 className='about-heading'>Contact</h3>
				
				<div className='flex gap-2'>
					<Link target='_blank' href="https://github.com/AlidzhanHyusein"><FontAwesomeIcon className='icon' icon={faGithubAlt}/></Link>
					<Link target='_blank' href="https://www.instagram.com/a.hyusein_?igsh=ZHdpZWJ1Nm1lazNl"><FontAwesomeIcon className='icon' icon={faInstagram}/></Link>
					<Link target='_blank' href="https://www.linkedin.com/in/alidzhan-hyusein-6aa03b262"><FontAwesomeIcon className='icon' icon={faLinkedin}/></Link>
				</div>
			</div>
		</div>
		</>
	)
}
