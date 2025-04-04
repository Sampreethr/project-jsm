"use client";
import React from 'react'
import Image from 'next/image'
import { Button } from '../ui/button'
import { toast } from 'sonner'
import { signIn } from 'next-auth/react'
import ROUTES from '@/constants/routes'



const SocialAuthForm = () => {
    const buttonClass ="background-dark400_light900 body-medium text-dark200_light800 rounded-2 min-h-12 flex-1 px-4 py-3"
    const handleSignIn = async (provider: "github" | "google") => {
        try{
            await signIn(provider, {
                callbackUrl: ROUTES.HOME,
                redirect : false,
            });
        }catch(error){
            console.error(`Sign-in error with ${provider}:`, error);
            toast(
                error instanceof Error
                ? error.message
                : `${provider.charAt(0).toUpperCase() + provider.slice(1)} Sign-in Failed: An error occurred`
            );
            
        }
    }
    return (
    <div className = "mt-10 flex flex-wrap gap-2.5">
        <Button className = {buttonClass} onClick={() => handleSignIn ("github")}>
            <Image 
            src="/icons/github.svg"
            alt="Github Logo"
            width={20}
            height={20}
            className="invert-colors mr-2.5 object-contain"
            />
            <span>Login with GitHub</span>
        </Button>
        <Button className = {buttonClass} onClick={() => handleSignIn ("google")}>
            <Image 
            src="/icons/google.svg"
            alt="Google Logo"
            width={20}
            height={20}
            className=" mr-2.5 object-contain"
            />
            <span>Login with Google</span>
        </Button>
    </div>
  )
}

export default SocialAuthForm