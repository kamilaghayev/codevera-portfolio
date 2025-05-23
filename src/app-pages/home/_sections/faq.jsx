import React from 'react'
import { FaqCollapse } from '@/components'

export const Faq = () => {
  return (
    <section id='faq' aria-labelledby='faq'>
        <div className='container-center flex flex-col items-center gap-6 sm:gap-10 lg:gap-14'>
            <h2 id='faq' className='text-3xl sm:text-4xl lg:text-6xl font-semibold'>Frequently asked questions</h2>
            <FaqCollapse />
        </div>
    </section>
  )
}
