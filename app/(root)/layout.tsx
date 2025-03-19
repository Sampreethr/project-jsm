"use client";

import RightSideBar from '@/components/navigation/RightSideBar'
import React, { ReactNode } from 'react'


const RootLayout = ({children}:{children:ReactNode}) => {

  return (
    <main className="background-light850_dark100 relative">
      <div className="flex max-w-[1440px] mx-auto">
        <section className="flex min-h-screen flex-1 flex-col px-6 pb-6 pt-36 max-md:pb-14 sm:px-14">
          <div className="mx-auto w-full max-w-5xl">{children}</div>
        </section>
        <RightSideBar/>
      </div>
    </main>
  )
}

export default RootLayout