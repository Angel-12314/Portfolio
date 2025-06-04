import HeroImg from "../assets/hero.jpg";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { MdEmail } from "react-icons/md";



export default function Header() {
    return <div className="flex h-screen bg-cover bg-center flex-col items-center justify-center" style={{ backgroundImage: `url(${HeroImg})` }}>
        <h1 className="pt-20 text-4xl text-white text-center mb-5">ABOUT</h1>
        <section className="h-auto bg-white/80 p-5 rounded-lg shadow-md w-[500px] text-center w-[900px]">            
                <p className="text-2xl">An aspiring software developer. Passionate in creating clean, efficient and scalable code, strong in design and integration with intuitive problemsolving skills. Proficient in front end web development. Ability to learn new softwares and technologies quickly. Capability to work in teams by providing valuable support.</p>
                <br/>
        </section>
    </div>
}