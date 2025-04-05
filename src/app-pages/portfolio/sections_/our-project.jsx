import React from 'react'
import { ProjectCard } from '@/components'
import { projects } from '@/config/projects'

export const OurProject = () => {

  return (
    <section aria-labelledby='our-projects' id='portfolio'>
        <div className='container-center flex flex-col gap-6 sm:gap-10 lg:gap-14 mt-10 sm:mt-16 mb-36'>
            <h2 id='advantages' className='text-3xl sm:text-4xl lg:text-6xl font-semibold'>Our projects</h2>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10'>
                {projects.map((project, index) => (
                  <ProjectCard key={index} name={project.name} src={project.src} link={project.link} types={project.types} />
                ))}
            </div>
        </div>
    </section>
  )
}
