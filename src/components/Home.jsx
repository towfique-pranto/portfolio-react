import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGmail, SiHackerrank, SiProtonmail } from "react-icons/si";
import image from "../assets/image.jpg";

const Home = () => {
  return (
    <div
      id="home"
      className="flex min-h-screen w-full items-center justify-center"
    >
      <div className="flex flex-col items-center justify-center gap-8 p-5 text-center">
        <img src={image} alt="My Image" className="w-55 md:w-65 rounded-full" />
        <div className="space-y-1 md:space-y-3">
          <h1 className="bg-linear-to-r from-teal-400 to-teal-600 bg-clip-text text-transparent text-3xl font-semibold md:text-4xl lg:text-5xl">
            Towfique Kabir
          </h1>
          <h3 className="bg-linear-to-r from-teal-400 to-teal-600 bg-clip-text text-transparent text-xl font-semibold md:text-2xl lg:text-3xl">
            Web Developer
          </h3>
          <p className="max-w-125 text-sm text-gray-900 md:text-base lg:text-lg">
            I'm a web developer working with React and modern JavaScript. I
            build clean, structured user interfaces and turn ideas into
            practical, real-world applications, with a focus on scalability and
            maintainability.
          </p>
        </div>
        <div className="flex gap-3">
          <FaGithub className="h-10 w-10 cursor-pointer transition-all hover:scale-110 md:h-12 md:w-12" />
          <FaLinkedin className="h-10 w-10 cursor-pointer transition-all hover:scale-110 md:h-12 md:w-12" />
          <SiHackerrank className="h-10 w-10 cursor-pointer transition-all hover:scale-110 md:h-12 md:w-12" />
          <SiGmail className="h-10 w-10 cursor-pointer transition-all hover:scale-110 md:h-12 md:w-12" />
        </div>
      </div>
    </div>
  );
};

export default Home;
