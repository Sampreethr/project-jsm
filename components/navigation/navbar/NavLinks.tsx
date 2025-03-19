"use client";
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import React from 'react';
import { sidebarLinks } from '@/constants';
import { cn } from '@/lib/utils';
import { SheetClose } from '@/components/ui/sheet';
import { useAuth } from '@/context/AuthContext';

export interface NavLinksProps {
  isMobileNav?: boolean;
}

interface SidebarLink {
  imgURL: string;
  route: string;
  label: string;
}

const NavLinks = ({isMobileNav = false}:{isMobileNav?:boolean}) => {
  const pathname = usePathname();
  const { userId } = useAuth();

  return (
    <div className={`flex flex-col gap-4 items-start w-full`}>
      {sidebarLinks.map((item: SidebarLink) => {
        const isActive = (pathname.includes(item.route) && item.route.length > 1) ||
        pathname === item.route;
        
        let currentRoute = item.route;
        if (item.route === "/profile") {
          if (!userId) return null;
          currentRoute = `/profile/${userId}`;
        }

        const linkElement = (
          <Link 
            href={currentRoute} 
            key={item.label} 
            className={cn(
              "flex items-center justify-start gap-4 p-4 w-full rounded-lg transition-all hover:bg-light-700 dark:hover:bg-dark-300",
              isActive ? "primary-gradient text-light-900" : "text-dark300_light900"
            )}
          >
            <Image 
              src={item.imgURL} 
              alt={item.label} 
              width={20} 
              height={20} 
              className={cn(
                "object-contain",
                isActive ? "brightness-0 invert" : "invert-colors dark:invert"
              )}
            />
            <p className={cn(
              "text-dark300_light900 text-[16px]",
              isActive ? "font-bold" : "font-medium",
              isMobileNav ? "block" : "hidden lg:block"
            )}>
              {item.label}
            </p>
          </Link>
        );

        return isMobileNav ? (
          <SheetClose asChild key={item.route} className="w-full">
            {linkElement}
          </SheetClose>
        ) : (
          <React.Fragment key={item.route}>
            {linkElement}
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default NavLinks;