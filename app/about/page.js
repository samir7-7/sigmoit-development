import React from "react";
import { Rajdhani } from "next/font/google";
import Image from "next/image";
import { TracingBeam } from "../components/ui/tracing-beam";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import {
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiTailwindcss,
} from "react-icons/si";
import Link from "next/link";
const rajdhani = Rajdhani({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

function route() {
  return (
    <div>
      <div class="relative h-fit w-[100vw] bg-slate-950">
        <TracingBeam>
          <div className="absolute z-5 bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
          <div
            className={
              rajdhani.className +
              " flex flex-col h-full w-full justify-center items-center z-30"
            }
          >
            <h1 className="text-white text-5xl font-bold mt-[8rem]">
              About <span className="text-[#24a556]">Us</span>
            </h1>
            <div className=" about-paragraph text-center lg:text-left text-gray-300 mt-[2rem] mb-[3rem] px-5 lg:px-20 max-w-4xl text-lg leading-7 lg:leading-8">
              We are an IT company providing smart solutions for schools,
              students, and businesses. Our services include{" "}
              <span className="text-[#24a556] font-bold text-lg">
                School Management Software
              </span>{" "}
              to simplify daily operations,{" "}
              <span className="text-[#24a556] font-bold text-lg">
                skill-based training courses
              </span>{" "}
              to prepare students for future careers, and{" "}
              <span className="text-[#24a556] font-bold text-lg">
                professional website
              </span>{" "}
              development to help businesses grow online. With a focus on
              innovation and reliability, we make education smarter and
              businesses stronger.
            </div>
            <div
              className={
                rajdhani.className +
                " paragraph-two flex flex-col lg:flex-row items-center  justify-between w-full text-gray-300"
              }
            >
              <div className="left w-[70%]">
                <h2 className="text-2xl font-extrabold mb-3">
                  Technologies we use
                </h2>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center space-x-3">
                    <SiReact className="text-cyan-400 text-3xl" />
                    <div>
                      <div className="font-bold">React</div>
                      <div className="text-xs text-gray-400">
                        Modern UI library
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <SiNextdotjs className="text-white text-3xl" />
                    <div>
                      <div className="font-bold">Next.js</div>
                      <div className="text-xs text-gray-400">
                        Fullstack React framework
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <SiNodedotjs className="text-green-500 text-3xl" />
                    <div>
                      <div className="font-bold">Node.js</div>
                      <div className="text-xs text-gray-400">
                        Backend runtime
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <SiExpress className="text-gray-300 text-3xl" />
                    <div>
                      <div className="font-bold">Express</div>
                      <div className="text-xs text-gray-400">
                        Web server framework
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <SiMongodb className="text-green-400 text-3xl" />
                    <div>
                      <div className="font-bold">MongoDB</div>
                      <div className="text-xs text-gray-400">
                        NoSQL database
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <SiTailwindcss className="text-sky-400 text-3xl" />
                    <div>
                      <div className="font-bold">Tailwind CSS</div>
                      <div className="text-xs text-gray-400">
                        Utility-first CSS
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="right">
                <Image
                  src="/technologies.svg"
                  alt="Technologies we use"
                  height={300}
                  width={400}
                />
              </div>
            </div>
            <div className="team mb-20 text-center">
              <h2 className="text-2xl font-extrabold mb-3 mt-10 text-white">
                Our Team
              </h2>
              <div className="team-card-wrapper flex flex-wrap justify-center gap-6">
                <div
                  className="team-card bg-[#24a556] w-[14rem] h-[18rem] rounded-sm flex flex-col items-center justify-center relative"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle at 0% 100%, rgba(255, 221, 51, 0.7) 0%, transparent 70%)",
                  }}
                >
                  <div className="description mt-4 w-full h-30 flex flex-col items-start px-3 justify-start ">
                    <h2 className="text-xl font-bold text-gray-300">
                      Samir Nepal
                    </h2>
                    <p className="text-md font-light text-gray-300">
                      Co-Founder
                    </p>
                  </div>
                  <div className="image h-36">
                    <Image
                      src="/members/samir.png"
                      className="grayscale absolute bottom-0 -right-7 w-[500px] "
                      width={300}
                      height={250}
                    />
                  </div>
                  <div className="socials z-[888] flex gap-2 w-full justify-start pl-2 text-gray-300 pb-4">
                    <a
                      href="https://www.linkedin.com/in/samir-nepal-927b621b2/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaLinkedin className="cursor-pointer hover:text-blue-500" />
                    </a>
                    <a
                      href="https://www.instagram.com/samirnepall/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaInstagram className="cursor-pointer hover:text-blue-500" />
                    </a>
                    <a
                      href="https://x.com/samir7nepal"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaTwitter className="cursor-pointer hover:text-blue-500" />
                    </a>
                    <a
                      href="https://www.facebook.com/samer.nepal.35"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaFacebook className="cursor-pointer hover:text-blue-500" />
                    </a>
                  </div>
                </div>
                <div
                  className="team-card bg-[#24a556] w-[14rem] h-[18rem] duration-300 ease-out 
                hover:scale-105 hover:shadow-xl rounded-sm flex flex-col items-center justify-center relative"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle at 0% 100%, rgba(255, 221, 51, 0.7) 0%, transparent 70%)",
                  }}
                >
                  <div className="description w-full h-30 mt-4 flex flex-col items-start px-3 justify-start ">
                    <h2 className="text-xl font-bold text-gray-300">
                      Nitesh Bishwakarma
                    </h2>
                    <p className="text-md font-light text-gray-300">
                      Co-Founder
                    </p>
                  </div>
                  <div className="image h-36 ">
                    <Image
                      src="/members/nitesh.png"
                      className="grayscale absolute bottom-0 -right-10 w-[500px]  z-[887]"
                      width={300}
                      height={250}
                    />
                  </div>
                  <div className="socials z-[888] flex gap-2 w-full justify-start pl-2 text-gray-300 pb-4">
                    <a
                      href="https://www.linkedin.com/in/samir-nepal-927b621b2/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaLinkedin className="cursor-pointer hover:text-blue-500" />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/samir-nepal-927b621b2/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaInstagram className="cursor-pointer hover:text-blue-500" />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/samir-nepal-927b621b2/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaTwitter className="cursor-pointer hover:text-blue-500" />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/samir-nepal-927b621b2/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaFacebook className="cursor-pointer hover:text-blue-500" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </TracingBeam>
      </div>
    </div>
  );
}

export default route;
