import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";
import web1 from "../../assets/images/website-img-1.png"; 
import Brick from "../../assets/images/brick.png"; 
import Edumall from "../../assets/images/edumal.png"; 
import web4 from "../../assets/images/website-img-4.png"; 

const projects = [
  {
    name: "FitNexus Fitness Platform",
    align: "right",
    image: web1,  
    link: "https://fit-nexus-seven.vercel.app/",
  },
  {
    name: "Brick Kiln Website",
    align: "left",
    image: Brick, 
    link: "https://star-brick.vercel.app/",
  },
  {
    name: "EduMall",
    align: "right",
    image: Edumall, 
    link: "https://edumall-ten.vercel.app/",
  },
  {
    name: "AI-Workflow Website",
    align: "left",
    image: web4, 
    link: "#",
  },
];

const ProjectsMain = () => {
  return (
    <div id="projects" className="max-w-[1200px] mx-auto px-4">
      <motion.div
        variants={fadeIn("top", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <ProjectsText />
      </motion.div>
      <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
        {projects.map((project, index) => (
          <SingleProject
            key={index}
            name={project.name}
            align={project.align}
            image={project.image}
            link={project.link}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectsMain;