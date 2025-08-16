import React from 'react';
import { AiFillAppstore } from "react-icons/ai";
import { FaGlobe } from "react-icons/fa";
import { SiProgress } from "react-icons/si";
import Title from '../layouts/Title';
import Card from './Card';

const Features = () => {
  return (
    <section
      id="features"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <Title title="Features" des="What I Do" />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-6 xl:gap-20">
        <Card
          title="Front End Development"
          des="Design, develop, and optimize responsive user interfaces for websites and web applications based on UI/UX designs. Implement modern front-end technologies, ensuring seamless navigation, cross-browser compatibility, and performance optimization. Integrate and manage REST APIs for dynamic data rendering, handle authentication and state management, and enhance user experience through interactive components, animations, and accessibility best practices."
         
        />
        // <Card
        //   title="Backend Web Development"
        //   des="Develop and maintain server-side applications, ensuring scalability, security, and performance. Design and optimize database queries using NoSQL , build and manage RESTful and GraphQL APIs, implement authentication and authorization, and handle server-side business logic, caching, and integrations with third-party services."
        //   icon={<AiFillAppstore />}
        // />
        // <Card
        //   title="Full Stack Web Development"
        //   des="Develop and manage both front-end and back-end components to create fully functional web applications. Work with databases, servers, and APIs (MERN stack) to ensure seamless data flow and application performance. Implement authentication, state management, and cloud deployments while ensuring a responsive and user-friendly UI/UX."
        //   icon={<SiProgress />}
        // />
        <Card
  title="Freelancing"
  des="Work independently on diverse projects, offering web development, UI/UX design, and API integrations. Collaborate with clients, manage timelines, and deliver high-quality, scalable solutions. Handle everything from front-end interfaces to back-end logic while ensuring optimal performance and user experience."
  icon={<AiFillAppstore />}
/>

      </div>
    </section>
  );
}

export default Features;
