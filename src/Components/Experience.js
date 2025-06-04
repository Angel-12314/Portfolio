import HeroImg from "../assets/hero.jpg";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";


export default function Header() {
    return <div style={{ backgroundImage: `url(${HeroImg})` }}>
        <h1 className="pt-20 text-4xl text-white text-center mb-5">WORK EXPERIENCE</h1>
        <div
      className="flex h-screen bg-cover bg-center  justify-center"
      
    >
      
      <div className="flex flex-col md:flex-row gap-4 p-4 mt-5">
        <div className="bg-white/80 p-6 rounded-lg shadow-md w-[500px] text-center h-[500px]">
          <h2 className="text-xl font-bold">Health Mudraa @support</h2>
          <p className="flex justify-between font-bold" >Software Developer Intern<div className="pr-0 font-bold">Nov-2024 - Present</div></p>
          <ul className="text-left list-disc">
            <li>Worked as a Software Developer, responsible for building and maintaining scalable code</li>
            <li>Converted Figma designs into responsible web pages using modern frontend libraries</li>
            <li>Created accessible, responsive and functional user interfaces to allow users on any device to have the same perfect user experience</li>
            <li>Created logics that fetch and parse data and relayed it into react components</li>
            <li>Created React components from scratch and modified existing React components</li>
            <li>Worked in Backend to integrate REST APIs</li>
            <li>Worked in Database (MongoDB) to store and retrieve data when needed</li>
          </ul>

        </div>
        <div className="bg-white/80 p-6 rounded-lg shadow-md w-[500px] text-center h-[500px]">
          <h2 className="text-xl font-bold">Wipro</h2>
          <p className="flex justify-between font-bold">Associate Analyst<div className="pr-0 font-bold">Jun-2024 - Aug-2024</div></p>
          <ul className="text-left list-disc">
            <li>Developed test cases, performed manual testing to ensure it works perfectly </li>
            <li>Participated in client meetings to gather requirements</li>
            <li>Collaborated with Development and operations teams to research and implemented logics to meet client requirements</li>
            <li>Worked with developers to provide the data and logics</li>
          </ul>

        </div>
        <div className="bg-white/80 p-6 rounded-lg shadow-md w-[500px] text-center h-[500px]">
          <h2 className="text-xl font-bold">Devtown</h2>
          <p className="flex justify-between font-bold">Full Stack Web Developer<div className="pr-0 font-bold">Sep-2021 - Dec-2021</div></p>
          <ul className="text-left list-disc">
            <li>Developed user interfaces using modern javascript frameworks. Engaged in continuous learning initiatives to keep up with the latest web development trends</li>
            <li>Created frontend using frameworks (Bootstrap, Chakra UI)</li>
            <li>Completed Assignments on time</li>
            <li>Created single page web applications using React JS</li>
            <li>Created responsive web pages to ensure the performance in different devices</li>
          </ul>

        </div>
      </div>
    </div>
    </div>
}