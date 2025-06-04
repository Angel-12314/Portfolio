import { Bars3Icon } from '@heroicons/react/24/solid'
import { useState } from 'react'

export default function Header() {
    const [toggleMenu, setToggleMenu] = useState(false);

    return <header className="flex justify-between px-5 py-2 bg-primary text-white">
        <a className="font-bold" href="#">PortFolio</a>
        <nav className="hidden md:block">
            <ul className="flex text-white">
            <li><a  className="hover:text-blue-300" href="/">Home</a></li>
            <li><a className="hover:text-blue-300" href="/About">About</a></li>
            <li><a className="hover:text-blue-300" href="/Skills">Skills</a></li>
            <li><a className="hover:text-blue-300" href="/Work Experience">Work Experience</a></li>
            <li><a className="hover:text-blue-300" href="/Projects">Projects</a></li>
        </ul>
        </nav>
        {toggleMenu && <nav className="block md:hidden">
            <ul className="flex  flex-col text-white mobile-nav">
                <li><a className="hover:text-blue-300" href="/">Home</a></li>
                <li><a className="hover:text-blue-300" href="/About">About</a></li>
                <li><a className="hover:text-blue-300" href="/Skills">Skills</a></li>
                <li><a className="hover:text-blue-300" href="/Work Experience">Work Experience</a></li>
                <li><a className="hover:text-blue-300" href="/Projects">Projects</a></li>
            </ul>
            </nav>
        }
        <button onClick={() => setToggleMenu(!toggleMenu)} className='block md:hidden'><Bars3Icon className='text-white h-5' /></button>
        
        </header>
}
 