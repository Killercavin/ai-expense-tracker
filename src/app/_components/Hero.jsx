'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { HeroScrollDemo } from './HeroScrollDemo';

const Hero = () =>{

    return (
        <section className="bg-gray-50 flex items-center flex-col">
            <HeroScrollDemo />
        </section>
    );
}

export default Hero;