"use client"

import React from 'react'
import Navbar from '@/components/Navbar'
import Carousel from '@/components/Carousel'
import PageFooter from '@/components/PageFooter'

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow p-6">
        <Carousel />
      </main>
      <PageFooter />
    </div>
  )
}
