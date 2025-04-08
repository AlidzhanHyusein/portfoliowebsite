import React from 'react'
import ProjectCard from '../components/ProjectCard';

export default function projectpage() {
  const projects = [
    {
      title: 'NBU SkillShare',
      buttonLink: 'https://github.com/stasiich/project-app/tree/master',
      buttonText: "Check it out!"
    },
    {
      title: 'Something 2',
      buttonLink: '/',
      buttonText: "Link 2"
    },
    {
      title: 'Something 3',
      buttonLink: '/',
      buttonText: "Link 3"
    },
  ]

  return (
    <>
    <div className='pt-36 w-[70rem] py-10  flex items-center mx-auto border-solid'>
      <div className='rounded-4xl flex justify-around gap-10 px-10 w-full h-full shadow-2xl shadow-accent/50 pb-10 pt-5'>
        {
          projects.map((item, index) => (
            <ProjectCard 
              key={index} 
              title={item.title} 
              buttonLink={item.buttonLink} 
              buttonText={item.buttonText}
            />
          ))
        }
      </div>
    </div>
    </>
  )
}
