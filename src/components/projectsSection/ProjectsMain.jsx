import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";
import web1 from "../../assets/images/website-img-1.png"; 
import web2 from "../../assets/images/website-img-2.png"; 
import web3 from "../../assets/images/website-img-3.png"; 
import web4 from "../../assets/images/website-img-4.png"; 

const projects = [
  {
    name: "FitNexus Fitness Platform",
    align: "right",
    image: web1,  
    link: "#",
  },
  {
    name: "Cynthia Ugwu",
    align: "left",
    image: web2, 
    link: "#",
  },
  {
    name: "Glint Landing Page",
    align: "right",
    image: web3, 
    link: "#",
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
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectsMain;