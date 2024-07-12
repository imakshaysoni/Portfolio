import { useScroll, motion } from "framer-motion";
import React, { useRef } from "react";
import LiIcon from "./LiIcon";

const Details = ({ possition, company, companyLink, time, address, work }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-center
    md:w-[80%]
    "
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3
          className="capitalize font-bold text-2xl sm:text-xl
            xs:text-lg
            "
        >
          {possition}&nbsp;
          <a
            href={companyLink}
            target="_blank"
            className="text-primary dark:text-primaryDark capitalize"
          >
            @{company}
          </a>
        </h3>
        <span
          className="capitalize font-medium text-dark/75
            dark:text-light/75 xs:text-sm"
        >
          {time} | {address}
        </span>
        <p className="font-medium w-full md:text-sm">{work}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div className="my-64">
      <h2
        className="font-bold text-8xl mb-32 w-full text-center
        md:text-6xl xs:text-4xl md:mb-16
        "
      >
        Experience
      </h2>

      <div
        ref={ref}
        className="w-[75%] mx-auto relative
        lg:w-[90%] md:w-full
        "
      >
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light md:w-[2px] md:left-[30px]
            xs:left-[20px]
            "
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          <Details
            possition={"Senior Software Engineer"}
            company={"Opcito Technologies"}
            time={"2022-Present"}
            address={"Pune"}
            work={
              "Developed and deployed a scalable serverless Python application on AWS Lambda, utilizing Boto3 for seamless integration with AWS services such as S3 and RDS. Implemented an event-driven architecture using AWS EventBridge, Step Functions, and CloudWatch to automate workflows and ensure thorough monitoring. Utilized Docker containerization for efficient deployment and scalability, ensuring a resilient and flexible cloud solution."
            }
          />
          <Details
            possition={"Data Engineer"}
            company={"Futurense Technologies"}
            time={"Aug 2021 - Jan 2022"}
            address={"Banglore"}
            work={
              "Optimized big data processing efficiency by implementing Apache PySpark for distributed computing, resulting in a 20% reduction in data processing time for large datasets and enabling real-time insights."
            }
          />

          <Details
            possition={"Software Engineer"}
            company={"Amdocs SmartOps India"}
            time={"Nov 2018 - Aug 2021"}
            address={"Pune"}
            work={
              "Developed a cutting-edge SLA Monitoring Tool leveraging Python and Flask, streamlining performance tracking for 10+ Amdocs accounts, reduced service downtime by 25% and improved response time by 15%."
            }
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
