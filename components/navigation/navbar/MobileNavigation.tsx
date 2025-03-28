'use client'

import React from 'react'
import Link from 'next/link'
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetTrigger,
    SheetTitle,
} from "@/components/ui/sheet"
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import NavLinks from './NavLinks';

const MobileNavigation = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Image 
          src="/icons/hamburger.svg"
          width={36}
          height={36}
          alt="menu"
          className="cursor-pointer dark:invert invert-0 sm:hidden"
        />
      </SheetTrigger>
      <SheetContent side="left" className="background-light900_dark200 border-none">
        <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
        <div className="flex h-full flex-col justify-between">
          <div className="flex flex-col gap-6">
            <Link href="/" className="flex items-center gap-1">
              <Image
                src="/images/logo.svg"
                width={23}
                height={23}
                alt="Logo"
                className="invert dark:invert-0"
              />
              <p className="h2-bold font-space-grotesk text-dark-100 dark:text-light-900">
                Dev<span className="text-primary-500">Flow</span>
              </p>
            </Link>
            <div className="no-scrollbar flex-1 overflow-y-auto">
              <SheetClose asChild>
                <section className="flex flex-col gap-6 pt-16">
                  <NavLinks isMobileNav/>
                </section>
              </SheetClose>
            </div>
          </div>
          <div className="flex flex-col gap-3 pt-6">
            <SheetClose asChild>
              <Link href="/sign-in">
                <Button className="small-medium btn-secondary min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none">
                  <span className="primary-text-gradient">Log In</span>
                </Button>
              </Link>
            </SheetClose>
            <SheetClose asChild>
              <Link href="/sign-up">
                <Button className="small-medium light-border-2 btn-tertiary text-dark400_light900 min-h-[41px] w-full rounded-lg border px-4 py-3 shadow-none">
                  Sign Up
                </Button>
              </Link>
            </SheetClose>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}

export default MobileNavigation