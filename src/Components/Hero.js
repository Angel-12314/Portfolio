import HeroImg from "../assets/hero.jpg";
import Hero2Img from "../assets/hero2.png"
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { MdEmail } from "react-icons/md";

export default function Header() {

    return <div className="flex h-screen bg-cover bg-center " style={{ backgroundImage: `url(${HeroImg})` }}>
        
    {/* style={{ backgroundImage: `url(${HeroImg})` }}> */}
        <section className="flex px-[45px] py-32 h-1/2">
            <h1 className="w-full text-white text-4xl">Hi,
                I am Angel Priyanka
                <p>Full Stack Web Developer </p>
                <br/>
                <div className="flex">
                    <a className="pr-5 hover:text-5xl hover:text-blue-700" href="https://www.linkedin.com/in/angel-priyanka-104ab8220 "
                    target="_blank"
                    rel="noopener noreferrer">
                        <BsLinkedin />
                    </a>
                    <a className="pr-5 hover:text-5xl hover:text-blue-700" href="https://github.com/Angel-12314"
                    target="_blank"
                    rel="noopener noreferrer">
                        <FaGithub />
                    </a>
                    <a className="pr-5 hover:text-5xl hover:text-blue-700" href="https://leetcode.com/profile/"
                    target="_blank"
                    rel="noopener noreferrer">
                        <SiLeetcode />
                    </a>
                    <a className="pr-5 hover:text-5xl hover:text-blue-700" href="angelpriyankag.14@gmail.com"
                    ><MdEmail /></a>
                </div>
                
            </h1>
            
        
        </section>
    </div>
    
}