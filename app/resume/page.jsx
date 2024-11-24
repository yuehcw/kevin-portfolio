"use client";

import {
  FaCss3,
  FaFigma,
  FaHtml5,
  FaJs,
  FaNodeJs,
  FaReact,
} from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss } from "react-icons/si";

// about data
const about = {
  title: "About me",
  description:
    "I am a Web Developer with expertise in React, Next.js, and Tailwind CSS, and experience in backend frameworks like Spring and Django. I’ve optimized SEO, improved scalability, and built user-friendly applications in roles at Prenostik and Sleeper, focusing on delivering high-performance, impactful solutions.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Kevin Wu",
    },
    {
      fieldName: "Phone",
      fieldValue: "(+1) 949 337 2157",
    },
    {
      fieldName: "Experience",
      fieldValue: "2+ Years",
    },
    {
      fieldName: "Title",
      fieldValue: "Web Developer",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Taiwanese",
    },
    {
      fieldName: "Email",
      fieldValue: "yuehcw@uci.edu",
    },
    {
      fieldName: "Availability:",
      fieldValue: "Seeking FT Roles",
    },
    {
      fieldName: "Languages",
      fieldValue: "English Chinese",
    },
  ],
};

// experience data
const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My experience",
  description:
    "Currently, I'm a Web Developer at Prenostik, enhancing web performance by transitioning React to Next.js for server-side rendering and implementing data management with PostgreSQL, Redis, and MongoDB. My previous roles at Sleeper and Newegg involved optimizing SEO, developing scalable web applications, and leveraging machine learning for data analysis. I'm focused on contributing to impactful web development projects and advancing my expertise in building high-performance applications.",
  items: [
    {
      company: "Prenostik",
      position: "Web Developer",
      duration: "09/2024 - Present",
    },
    {
      company: "Sleeper",
      position: "Software Engineer Intern (Front-end)",
      duration: "07/2024 - 09/2024",
    },
    {
      company: "Newegg",
      position: "Data Analyst",
      duration: "10/2021 - 04/2022",
    },
    {
      company: "GoFreight",
      position: "Data Analyst Intern",
      duration: "05/2021 - 10/2021",
    },
  ],
};

// education data
const education = {
  icon: "/assets/resume/cap.svg",
  title: "My education",
  description:
    "I'm pursuing a Master's in Software Engineering at UC Irvine, set to graduate in December 2024. I also earned a Bachelor's in Business Economics from UC Irvine in 2021 and an Associate's in Economics from Santa Barbara City College. My diverse background makes me well-prepared for a career in web development.",
  items: [
    {
      institution: "University of California, Irvine",
      degree: "Master of Science in Software Engineering",
      duration: "09/2023 - 12/2024 (Expected)",
    },
    {
      institution: "University of California, Irvine",
      degree: "Bachelor of Arts in Business Economics",
      duration: "09/2019 - 03/2021",
    },
    {
      institution: "Santa Barbara City College",
      degree: "Associate of Arts in Economics",
      duration: "08/2016 - 12/2018",
    },
  ],
};

// skills data
const skills = {
  title: "My skills",
  description:
    "I excel in modern web development, with expertise in HTML5, CSS3, JavaScript, and React.js for creating dynamic UIs. I'm proficient in Next.js for server-side rendering, Tailwind CSS for styling, and Node.js for backend development. I'm also skilled in using Figma to integrate design with development.",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "html 5",
    },
    {
      icon: <FaCss3 />,
      name: "css 3",
    },
    {
      icon: <FaJs />,
      name: "javascript",
    },
    {
      icon: <FaReact />,
      name: "react.js",
    },
    {
      icon: <SiNextdotjs />,
      name: "next.js",
    },
    {
      icon: <SiTailwindcss />,
      name: "tailwind.css",
    },
    {
      icon: <FaNodeJs />,
      name: "node.js",
    },
    {
      icon: <FaFigma />,
      name: "figma",
    },
  ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@radix-ui/react-tooltip";
import { motion } from "framer-motion";

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container max-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px] "
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>

          {/* content */}
          <div className="min-h-[70vh] w-full">
            {/* experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <l1
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[360px] min-h-[60px] text-center">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p>{item.company}</p>
                          </div>
                        </l1>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <l1
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[360px] min-h-[60px] text-center">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p>{item.institution}</p>
                          </div>
                        </l1>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* skills */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {skills.skillList.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>

            {/* about */}
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-center justify-center xl:justify-start gap-4"
                      >
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="text-xl">{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
