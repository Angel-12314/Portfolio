import SkillsImg from "../assets/skills.webp";

export default function Skills() {
  return (
    <div
      style={{ backgroundImage: `url(${SkillsImg})` }}
      className="bg-cover md:h-screen bg-center"
    >
      <h1 className="pt-20 text-4xl text-white text-center mb-5">SKILLS</h1>
      <div className="flex h-auto md:h-auto justify-center px-4">
        <div className="rounded-lg shadow-md bg-white/80 p-5 w-full max-w-4xl mt-5 mb-5">
          
          {/* Web Tech */}
          <div className="w-full">
            <h2 className="text-xl font-bold">Web Technology</h2>
            <br className="hidden md:block"/>
            <ul className="flex flex-wrap text-left">
              <li className="bg-green-500 rounded-lg shadow-md px-3 mr-4 mb-2">HTML</li>
              <li className="bg-blue-500 rounded-lg shadow-md px-3 mr-4 mb-2">CSS3</li>
              <li className="bg-violet-500 rounded-lg shadow-md px-3 mr-4 mb-2">JavaScript</li>
              <li className="bg-pink-500 rounded-lg shadow-md px-3 mr-4 mb-2">React JS</li>
              <li className="bg-green-500 rounded-lg shadow-md px-3 mr-4 mb-2">Next JS</li>
              <li className="bg-blue-500 rounded-lg shadow-md px-3 mr-4 mb-2">Node JS</li>
              <li className="bg-violet-500 rounded-lg shadow-md px-3 mr-4 mb-2">Express JS</li>
              <li className="bg-pink-500 rounded-lg shadow-md px-3 mr-4 mb-2">Redux</li>
            </ul>
          </div>

          <br />

          {/* Database */}
          <div className="w-full">
            <h2 className="text-xl font-bold">Database</h2>
            <br className="hidden md:block"/>
            <ul className="flex flex-wrap text-left">
              <li className="bg-green-500 rounded-lg shadow-md px-3 mr-4 mb-2">MongoDB</li>
            </ul>
          </div>

          <br />

          {/* Framework */}
          <div className="w-full">
            <h2 className="text-xl font-bold">Framework</h2>
            <br className="hidden md:block"/>
            <ul className="flex flex-wrap text-left">
              <li className="bg-green-500 rounded-lg shadow-md px-3 mr-4 mb-2">Tailwind CSS</li>
              <li className="bg-blue-500 rounded-lg shadow-md px-3 mr-4 mb-2">BootStrap</li>
              <li className="bg-violet-500 rounded-lg shadow-md px-3 mr-4 mb-2">Chakra UI</li>
              <li className="bg-pink-500 rounded-lg shadow-md px-3 mr-4 mb-2">Flask</li>
            </ul>
          </div>

          <br />

          {/* Tools */}
          <div className="w-full">
            <h2 className="text-xl font-bold">Tools</h2>
            <br className="hidden md:block"/>
            <ul className="flex flex-wrap text-left">
              <li className="bg-green-500 rounded-lg shadow-md px-3 mr-4 mb-2">VS Code</li>
              <li className="bg-blue-500 rounded-lg shadow-md px-3 mr-4 mb-2">Github</li>
              <li className="bg-pink-500 rounded-lg shadow-md px-3 mr-4 mb-2">PyCharm</li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
}
