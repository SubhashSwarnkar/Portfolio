import { motion } from 'framer-motion';
import React from 'react';
import ResumeCard from './ResumeCard';

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-12"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2014 - 2020</p>
          <h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[70%] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Bachelor of Technology "
            subTitle="Sangam University, Bhilwara"
            result="Electrical Engineering"
            des=" I pursued full-stack development training in 2019 during my college years, driven by my strong interest in the field."
          />
          <ResumeCard
            title="Higher Secondary School(HSC)"
            subTitle="Noble International School, Bhilwara"
            result="Science Background"
            des="From 2015-2016, With Science "
          />
        </div>
      </div>
      {/* part Two */}

      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">June 2020 - Present</p>
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[70%] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Forntend Developer Intern (Remote)"
            subTitle="A2D Innovations Pvt. Ltd (3/5/2023-2/8/2023)"
            result="3 Month"
            des="Gained hands-on experience in web development by working on real-world projects. Learned and implemented React.js,Bootstrap and Mui while building and deploying a feature-rich website on AWS."
          />
          <ResumeCard
            title="Forntend Developer "
            subTitle="A2D Innovations Pvt.Ltd (5/8/2023-12/3/2024)"
            result=" 6 month"
            des="Expanding expertise in both frontend and backend technologies. Developing scalable web applications using MongoDB, Express.js, Node.js, and REST APIs. On the frontend, leveraging modern libraries like Lottie, Framer Motion, and MUI to enhance UI/UX and interactivity."
          />
          <ResumeCard
            title="Full-Stack Developer"
            subTitle="Thetrifusion Pvt.Ltd (5/6/2024- Current)"
            result="Current"
            des="Continuously expanding expertise in both frontend and backend technologies. Developing scalable web and mobile solutions and collaborating with global clients."
          />
         
        </div>
      </div>
    </motion.div>
  );
}

export default Education