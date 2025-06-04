import HeroImg from "../assets/hero.jpg";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";


export default function Header() {

    return  <div style={{ backgroundImage: `url(${HeroImg})` }}>
        <h1 className="pt-20 text-4xl text-white text-center mb-5">SKILLS</h1>
        <div className="flex h-screen bg-cover bg-center justify-center">
      
      <div className="rounded-lg shadow-md bg-white/80 p-5 w-auto mt-5 h-[450px]">
        <div className="w-auto">
          <h2 className="text-xl font-bold">Web Technology</h2>
          <br/>
          <ul className=" flex text-left">
            <li className="bg-green-500 flex text-left  rounded-lg shadow-md px-3 mr-4" >HTML</li>
            <li className="bg-blue-500 flex text-left rounded-lg shadow-md px-3  mr-4">CSS3</li>
            <li className="bg-violet-500 flex text-left rounded-lg shadow-md px-3 mr-4">JavaScript</li>
            <li className="bg-pink-500 flex text-left rounded-lg shadow-md px-3 mr-4">React JS</li>
            <li className="bg-green-500 flex text-left  rounded-lg shadow-md px-3 mr-4" >Next JS</li>
            <li className="bg-blue-500 flex text-left rounded-lg shadow-md px-3  mr-4">Node JS</li>
            <li className="bg-violet-500 flex text-left rounded-lg shadow-md px-3 mr-4">Express JS</li>
            <li className="bg-pink-500 flex text-left rounded-lg shadow-md px-3 mr-4">Redux</li>
          </ul>
        </div>
        <br/>
        <div className="w-auto">
          <h2 className="text-xl font-bold">Database</h2>
          <br/>
          <ul className=" flex text-left">
            <li className="bg-green-500 flex text-left  rounded-lg shadow-md px-3 mr-4" >MongoDB</li>
          </ul>
        </div>
        <br/>
        <div className="w-auto">
          <h2 className="text-xl font-bold">Framework</h2>
          <br/>
          <ul className=" flex text-left">
            <li className="bg-green-500 flex text-left  rounded-lg shadow-md px-3 mr-4" >Tailwind CSS</li><li className="bg-blue-500 flex text-left rounded-lg shadow-md px-3  mr-4">BootStrap</li><li className="bg-violet-500 flex text-left rounded-lg shadow-md px-3 mr-4">Chakra UI</li><li className="bg-pink-500 flex text-left rounded-lg shadow-md px-3 mr-4">Flask</li>
          </ul>
        </div>
        <br/>
        <div className="w-auto">
          <h2 className="text-xl font-bold">Tools</h2>
          <br/>
          <ul className=" flex text-left">
            <li className="bg-green-500 flex text-left  rounded-lg shadow-md px-3 mr-4" >VS Code</li><li className="bg-blue-500 flex text-left rounded-lg shadow-md px-3  mr-4">Github</li><li className="bg-pink-500 flex text-left rounded-lg shadow-md px-3 mr-4">PyCharm</li>
          </ul>
        </div>
      </div>
    </div>
    </div>
    
}