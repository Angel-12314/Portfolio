import HeroImg from "../assets/hero.jpg";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { MdEmail } from "react-icons/md";

export default function Header() {
    return <div className="flex h-screen bg-cover bg-center" style={{ backgroundImage: `url(${HeroImg})` }}>
        <section className="flex px-[45px] py-32 h-1/2">
            <h1 className="w-full text-white text-4xl">Hi,
                I am Angel Priyanka
                <p>Full Stack Web Developer </p>
                <br/>
                <div className="flex">
                    <a className="pr-5 hover:text-5xl hover:text-blue-700" href="#"><BsLinkedin /></a>
                    <a className="pr-5 hover:text-5xl hover:text-blue-700" href="#"><FaGithub /></a>
                    <a className="pr-5 hover:text-5xl hover:text-blue-700" href="#"><SiLeetcode /></a>
                    <a className="pr-5 hover:text-5xl hover:text-blue-700" href="#"><MdEmail /></a>
                </div>
                
            </h1>
            
        
        </section>
    </div>
}