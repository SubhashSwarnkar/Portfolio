import React from "react";
import { DiJavascript1, DiMongodb, DiSass, DiGit } from "react-icons/di";
import { FaFacebookF, FaGithub, FaReact, FaNodeJs } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiExpress, SiNextdotjs, SiOpenai, SiTailwindcss, SiMui, SiFramer } from "react-icons/si";
import { BsBootstrap } from "react-icons/bs";
import { Cursor, useTypewriter } from "react-simple-typewriter";

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: [
      "Passionate Coder.",
      "Frontend Developer.",
      "Backend Developer.",
      "Full Stack Developer.",
      "Software Developer",
    ],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });

  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      {/* Introduction Section */}
      <div className="flex flex-col gap-5">
        <h4 className="text-lg font-normal">WELCOME TO MY PORTFOLIO</h4>
        <h1 className="text-6xl font-bold text-white">
          Hi, I'm <span className="text-designColor capitalize font-serif">Subhash</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor cursorBlinking="false" cursorStyle="|" cursorColor="#ff014f" />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
          A self-taught web developer with 1+ year of dedicated practice. Seeking an opportunity to contribute my
          skills, passion for programming, and enthusiasm to tackle new challenges and deliver high-quality work.
        </p>
      </div>

      {/* Skills Section */}
      <div className="flex flex-col gap-6 lgl:gap-6 justify-between">
        <h2 className="text-base uppercase font-titleFont mb-4">BEST SKILL ON</h2>
        <div className="flex gap-4 flex-wrap">
          <span className="bannerIcon">
            <FaReact />
          </span>
          <span className="bannerIcon">
            <DiJavascript1 />
          </span>
          // <span className="bannerIcon">
          //   <SiExpress />
          // </span>
          // <span className="bannerIcon">
          //   <DiMongodb />
          // </span>
          // <span className="bannerIcon">
          //   <FaNodeJs />
          // </span>
          <span className="bannerIcon">
            <SiMui />
          </span>
          <span className="bannerIcon">
            <BsBootstrap />
          </span>
          <span className="bannerIcon">
            <DiGit />
          </span>
          <span className="bannerIcon">
            <FaGithub />
          </span>
          <span className="bannerIcon">
            <SiFramer />
          </span>
          
        </div>
      </div>
    </div>
  );
};

export default LeftBanner;
