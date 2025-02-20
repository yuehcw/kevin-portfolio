"use client";

import { motion } from "framer-motion";
import { useState } from "react";

import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import WorkSliderBtns from "@/components/WorkSliderBtns";

import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    num: "01",
    category: "fullstack",
    title: "AI Chatbot",
    description:
      "An AI chatbot replicating core ChatGPT features, allowing users to interact with an advanced conversational interface. Designed with a modern, intuitive interface, providing a seamless user experience. Deployed the backend on Heroku and the frontend on Vercel for smooth performance and efficient scalability. The tech stack includes JavaScript, React.js, Node.js, Express.js, MongoDB, Clerk, and ImageKit.",
    stack: [
      { name: "JavaScript" },
      { name: "React.js" },
      { name: "Express.js" },
      { name: "MongoDB" },
    ],
    image: "/assets/work/project_aichatbot.png",
    live: "https://aichatbot.yuehcw.com/",
    github: "https://github.com/yuehcw/ai-chatbot",
  },
  {
    num: "02",
    category: "fullstack",
    title: "Spotify-Clone",
    description:
      "A Spotify clone replicating core Spotify features, allowing users to browse, play music, and manage playlists. Designed with a sleek, user-friendly interface, closely mirroring the original Spotify experience. Deployed on Vercel for smooth performance and easy accessibility. The tech stack includes TypeScript, Next.js, Supabase, and Tailwind CSS.",
    stack: [
      { name: "TypeScript" },
      { name: "Next.js" },
      { name: "Supabase" },
      { name: "Tailwind" },
    ],
    image: "/assets/work/project_spotify-clone.png",
    live: "https://spotify-clone.yuehcw.com/",
    github: "https://github.com/yuehcw/spotify-clone",
  },
  {
    num: "03",
    category: "fullstack",
    title: "Baller",
    description:
      "Baller is a web platform that enables users to trade NBA players like stocks and monitor real-time performance. It features a secure authentication system and real-time data updates, enhancing user engagement and operational efficiency. Built with React.js for the front-end and Express.js with MongoDB for the back-end. The tech stack includes JavaScript, MERN Stack, Axios, HTML, and CSS.",
    stack: [
      { name: "JavaScript" },
      { name: "React.js" },
      { name: "Express.js" },
      { name: "MongoDB" },
    ],
    image: "/assets/work/project_baller.png",
    live: "https://baller-yuehcw-f6895eed5e61.herokuapp.com/",
    github: "https://github.com/yuehcw/Baller",
  },
  {
    num: "04",
    category: "fullstack",
    title: "BaseballViz",
    description:
      "BaseballViz is a web platform using React.js for the front-end and Flask for the back-end, with PostgreSQL as the persistent data tier, enabling seamless visualization of baseball player performance.",
    stack: [
      { name: "JavaScript" },
      { name: "React.js" },
      { name: "Flask" },
      { name: "PostgreSQL" },
    ],
    image: "/assets/work/project_baseballViz.png",
    live: "https://padres-frontend.vercel.app/",
    github: "https://github.com/yuehcw/padres_project",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    // get current slide index
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[60px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/* outline num */}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.title}
              </div>
              {/* project category */}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category} project
              </h2>
              {/* project description */}
              <p className="text-white/60">{project.description}</p>
              {/* stack */}
              <ul className="flex gap-4">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-xl text-accent">
                      {item.name}
                      {/* remove the last comma */}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>
              {/* border */}
              <div className="border border-white/20"></div>
              {/* buttons */}
              <div className="flex items-center gap-4">
                {/* live project button */}
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                {/* github project button */}
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] relative group flex justify-center items-center bg-primary">
                      {/* overlay */}
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/5 z-10"></div>
                      {/* image */}
                      <div className="relative w-full h-full">
                        <Image
                          src={project.image}
                          fill
                          className="object-contain"
                          alt=""
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              {/* slider buttons */}
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
