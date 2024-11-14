import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs'


const Header = ({ children }: HeaderProps) => {
    return (
        <div className='header'>
            <Link href="/" className='md:flex-1'>
                <Image src="/assets/icons/logo.svg"
                    alt='logo with Name'
                    width={120}
                    height={32}
                    className='hidden md:block'
                />
            </Link>
            <Link href="/" className='md:flex-1'>
                <Image src="/assets/icons/logo-icon.svg"
                    alt='logo'
                    width={32}
                    height={32}
                    className='mr-2 md:hidden'
                />
            </Link>
            {children}
            <SignedOut>
                <SignInButton />
            </SignedOut>
            <SignedIn >
                <UserButton />
            </SignedIn>
        </div>
    )
}

export default Header
