import React from 'react';
import Link from 'next/link';

export default function Navbar() {
    const links = [
        {
            name: "About",
            link: "/about"
        },
        {
            name: "Portfolio",
            link: "/projects"
        },
        {
            name: "Contact",
            link: "/about/#contact"
        }
    ]

    const name = "Alidzhan"

    return (
        <header className='absolute top-0 left-0 right-0 md:left-5 md:right-5 md:top-5 navbar-shadow border border-neutral-200 md:rounded-[5rem] py-3 px-7 flex justify-between items-center gap-5 overflow-hidden'>
            <Link href='/' className='text-xl md:text-2xl font-bold'>AH.</Link>

            <nav className='flex items-center gap-5'>
                {
                    links.map((item, index) => (
                        links.length - 1 == index ? (
                            <Link className='btn' key={index} href={item.link}>
                                {item.name}
                            </Link>
                        ) : (
                            <Link className='md:text-lg whitespace-nowrap' key={index} href={item.link}>
                                <span className='text-accent font-bold'>0{index + 1}. </span>
                                {item.name}
                            </Link>
                        ) 
                    ))  
                }
            </nav>
        </header>
    )
}
