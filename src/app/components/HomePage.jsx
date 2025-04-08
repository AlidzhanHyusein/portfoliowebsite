import Link from 'next/link'
import React from 'react'

export default function HomePage() {
	return (
		<div className='flex flex-col gap-5 md:max-w-2/3 mx-auto'>
			<p className='text-xl text-accent font-bold'>Hi, my name is</p>
			
			<h1 className='flex flex-col gap-3 font-extrabold text-4xl md:text-6xl'>
				<span className='text-neutral-600'>Alidzhan Hyusein.</span>

				<span className='text-black/30'>I Do Front-End Development</span>
			</h1>

			<p className='md:max-w-2/3 font-[600] md:text-lg' >I'm a student at New Bulgarian University (NBU), where I'm learning C++, and I'm also studying Python at SoftUni. This repository contains my projects, exercises, and notes from my <span className='text-accent'>learning journey.</span></p>
		
			<Link className='mt-5 btn w-max' href="/projects">Check out my projects.</Link>
		</div>
	)
}
