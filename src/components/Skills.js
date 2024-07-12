import React from "react";

import { motion } from "framer-motion";

const Skill = ({ name, x, y }) => {
  return (
    <motion.div
      className="flex items-center justify-center rounded-full font-semibold bg-dark text-light py-3 px-6 shadow-dark
    cursor-pointer absolute dark:text-dark dark:bg-light
    lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent
    xs:dark:bg-transparent xs:text-dark xs:dark:text-light
    xs:font-bold 
    "
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y, transition: { duration: 1.5 } }}
      viewport={{ once: true }}
    >
      {name}
    </motion.div>
  );
};

const Skills = () => {
  return (
    <>
      <h2 className="font-bold text-8xl mt-64 w-ful text-center md:text-6xl md:mt-32">
        Skills
      </h2>
      <div
        className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark lg:h-[80vh] sm:h-[60vh]
    xs:h-[50vh] 
    lg:bg-circularLightLg lg:dark:bg-circularDarkLg
    md:bg-circularLightLg md:dark:bg-circularDarkMd
    sm:bg-circularLightLg sm:dark:bg-circularDarkSm
    
    
    "
      >
        <motion.div
          className="flex items-center justify-center rounded-full font-semibold bg-dark text-light p-8 shadow-dark 
        cursor-pointer dark:text-dark dark:bg-light
        lg-p-6 md:p-4 xs:text-xs xs:p-2"
          whileHover={{ scale: 1.05 }}
        >
          Python
        </motion.div>

        <Skill name="AWS" x="-25vw" y="2vw" />
        <Skill name="EC2" x="-5vw" y="-10vw" />
        <Skill name="Lambda" x="20vw" y="6vw" />
        <Skill name="S3" x="0vw" y="12vw" />
        <Skill name="StepFunctions" x="-20vw" y="-15vw" />
        <Skill name="CloudWatch" x="15vw" y="-12vw" />
        <Skill name="EventBridge" x="32vw" y="-5vw" />

        <Skill name="FastAPI" x="0vw" y="-22vw" />
        <Skill name="Microservices" x="35vw" y="10vw" />
        <Skill name="Django" x="-35vw" y="-5vw" />

        <Skill name="System Design" x="25vw" y="-20vw" />
        <Skill name="Data Structure Algorithms" x="-25vw" y="-20vw" />

        <Skill name="SQL" x="-25vw" y="20vw" />
        <Skill name="NO SQL" x="25vw" y="20vw" />
      </div>
    </>
  );
};

export default Skills;
