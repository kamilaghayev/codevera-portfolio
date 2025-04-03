import React from 'react'
import { AboutPage } from '@/app-pages'
import { metadataAbout, metadataMain } from '@/config/seo.config'

export const metadata = metadataAbout;

export default function page() {
  return (
    <AboutPage />
  )
}
