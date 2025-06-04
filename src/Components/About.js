import HeroImg from "../assets/hero.jpg";

export default function About() {
  return (
    <div
      className="flex md:h-screen bg-cover bg-center flex-col items-center justify-center px-4"
      style={{ backgroundImage: `url(${HeroImg})` }}
    >
      <h1 className="pt-20 text-4xl text-white text-center mb-5">ABOUT</h1>

      <section className="h-auto bg-white/80 p-5 rounded-lg shadow-md w-full max-w-[900px] text-center mb-5">
        <p className="text-2xl">
          An aspiring software developer. Passionate in creating clean,
          efficient and scalable code, strong in design and integration with
          intuitive problemsolving skills. Proficient in front end web
          development. Ability to learn new softwares and technologies quickly.
          Capability to work in teams by providing valuable support.
        </p>
        <br />
      </section>
    </div>
  );
}
