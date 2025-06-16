import { Bars3Icon } from '@heroicons/react/24/solid'
import { useState } from 'react'

export default function Header({ scrollTargets }) {
    const { homeRef, aboutRef, skillsRef, experienceRef, projectsRef } = scrollTargets;
    const [toggleMenu, setToggleMenu] = useState(false);

    const scrollTo = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

    return <header className="flex justify-between px-5 py-2 bg-primary text-white">
        <a className="font-bold" href="#">PortFolio</a>
        <nav className="hidden md:block">
            <ul className="flex text-white">
            <li><div className="hover:text-blue-300 cursor-pointer" onClick={() => scrollTo(homeRef)}>Home</div></li>
            <li><div className="hover:text-blue-300 cursor-pointer" onClick={() => scrollTo(aboutRef)} >About</div></li>
            <li><div className="hover:text-blue-300 cursor-pointer" onClick={() => scrollTo(skillsRef)}>Skills</div></li>
            <li><div className="hover:text-blue-300 cursor-pointer" onClick={() => scrollTo(experienceRef)}>Work Experience</div></li>
            <li><div className="hover:text-blue-300 cursor-pointer" onClick={() => scrollTo(projectsRef)}>Projects</div></li>
        </ul>
        </nav>
        {toggleMenu && <nav className="block md:hidden">
            <ul className="flex  flex-col text-white mobile-nav">
                <li><div className="hover:text-blue-300" onClick={() => scrollTo(homeRef)}>Home</div></li>
                <li><div className="hover:text-blue-300" onClick={() => scrollTo(aboutRef)}>About</div></li>
                <li><div className="hover:text-blue-300" onClick={() => scrollTo(skillsRef)}>Skills</div></li>
                <li><div className="hover:text-blue-300" onClick={() => scrollTo(experienceRef)}>Work Experience</div></li>
                <li><div className="hover:text-blue-300" onClick={() => scrollTo(projectsRef)}>Projects</div></li>
            </ul>
            </nav>
        }
        <button onClick={() => setToggleMenu(!toggleMenu)} className='block md:hidden'><Bars3Icon className='text-white h-5' /></button>
        
        </header>
}
 