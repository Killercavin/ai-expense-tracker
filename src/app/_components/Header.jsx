'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { useUser, UserButton } from '@clerk/clerk-react';

function Header() {
    const { user, isSignedIn } = useUser();

    return (
        <div className="flex p-5 justify-between items-center border shadow-sm">
            <div className="flex flex-row items-enter">
                {/* <Image src={'./chart-donut.svg'} alt="FinanSmart Logo" width="45" height="25" /> */}
                <Link href="/" passHref>
                <span className="text-violet-800 font-bold text-xl">FinanSmart</span>
                </Link>
            </div>

            { isSignedIn
                ? 
                <UserButton />
                : 
                <div className="flex gap-2.5 items-center">
                    <Link href="/dashboard" passHref>
                        <Button variant="outline" className="text-indigo">
                            Dashboard
                        </Button>
                    </Link>
                    <Link href="/signup" passHref>
                        <Button className="">
                            Get Started
                        </Button>
                    </Link>
                </div>
            }
        </div>
    );
}

export default Header;
