import HeroImg from "../assets/hero.jpg";
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
                    <a className="pr-5 hover:text-blue-500" href="https://www.linkedin.com/in/angel-priyanka-104ab8220 "
                    target="_blank"
                    rel="noopener noreferrer">
                        <BsLinkedin />
                    </a>
                    <a className="pr-5 hover:text-blue-500" href="https://github.com/Angel-12314"
                    target="_blank"
                    rel="noopener noreferrer">
                        <FaGithub />
                    </a>
                    <a className="pr-5 hover:text-blue-500" href="https://leetcode.com/profile/"
                    target="_blank"
                    rel="noopener noreferrer">
                        <SiLeetcode />
                    </a>
                    <a className="pr-5 hover:text-blue-500" href="angelpriyankag.14@gmail.com"
                    ><MdEmail /></a>
                </div>
                <br/>
                <div>
                <a
                    //href="https://drive.google.com/uc?export=download&id=1M6H3UyrdGzB5DuVa4-AQqFiHOLH1DBb4"
                    href="https://drive.google.com/uc?export=download&id=1D_eC088EVM-aSOa_gvJO5QIgU2wI56vT"
                    download
                    className="flex items-center gap-2 bg-primary max-w-[230px] text-xl text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-800"
                    >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V4"/>
                    </svg>
                    <span className="w-auto">Download Resume</span>
                    
                </a>
                </div>
                

            </h1>
            
        
        </section>
    </div>
    
}