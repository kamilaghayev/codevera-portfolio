import React from 'react'
import { ProjectCard } from '@/components'

export const OurProject = () => {

  const projects = [
    {
      name: "Turizm.az",
      src: "/png/turizm-az.png",
      link: "https://www.turizm.az/",
      types: ["Ecommerce", "Corporative"],
    },
    {
      name: "Muhteşem 3lü",
      src: "/png/muhtesem-3lu.png",
      link: "https://www.muhtesem3lu.az/",
      types: ["Business", "Education"],
    },
    {
      name: "Luminous",
      src: "/png/luminous.png",
      link: "https://www.luminoustours.az/",
      types: ["Ecommerce", "Corporative"],
    },
    {
      name: "Mastercard Promo",
      src: "/png/mastercard-promo.png",
      link: "https://mastercard-promo.by/",
      types: ["Business", "Corporative"],
    },
    {
      name: "Hunter-Sale",
      src: "/png/hunter-sale.png",
      link: "https://www.hunter-sale.com/",
      types: ["Ecommerce", "Corporative", "Business"],
    },
    {
      name: "Rahatviza",
      src: "/png/rahat-viza.png",
      link: "https://rahatviza.az/",
      types: ["Corporative", "Business"],
    },
  ]

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
