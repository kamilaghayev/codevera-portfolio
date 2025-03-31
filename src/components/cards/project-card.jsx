import React from 'react'

export const ProjectCard = () => {
  return (
    <div className='w-full flex flex-col gap-4 sm:gap-6'>
        <div className='w-full aspect-video p-4 sm:p-5 lg:p-5 rounded-3xl bg-[#F5F5F5]'>
            <div style={{backgroundImage: 'url(/project.png)'}} className='w-full h-full rounded-3xl bg-cover bg-center'></div>
        </div>
        <div className='flex flex-col gap-2 sm:gap-4'>
            <h3 className='text-xl sm:text-3xl lg:text-4xl font-semibold'>CodeVera</h3>
            <div className="w-full flex gap-4 flex-nowrap overflow-x-scroll pb-3">
                <div className="min-w-fit px-4 py-2 bg-[#E6E6E6] text-[#141414] rounded-full text-xs sm:text-sm lg:text-base font-medium">
                    Ecommerce
				</div>
                <div className="min-w-fit px-4 py-2 bg-[#E6E6E6] text-[#141414] rounded-full text-xs sm:text-sm lg:text-base font-medium">
                    Corporative
				</div>
            </div>
        </div>
    </div>
  )
}
