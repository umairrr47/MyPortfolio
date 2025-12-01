import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";
import web1 from "../../assets/images/website-img-1.png"; 
import Brick from "../../assets/images/brick.png"; 
import Edumall from "../../assets/images/edumal.png"; 
import BaySkin from "../../assets/images/BaySkinn.png"
import PizzaOven from "../../assets/images/pizzaoven.png"

const projects = [
  {
    name: "Pizza Oven By Saif",
    align: "right",
    image: PizzaOven,  
    link: "https://pizza-oven-by-saif.vercel.app/",
  },
  {
    name: "BaySkin Skin Care Clinic",
    align: "left",
    image: BaySkin,  
    link: "https://bayskin.in/",
  },
  {
    name: "Brick Kiln Website",
    align: "right",
    image: Brick, 
    link: "https://star-brick.vercel.app/",
  },
   {
    name: "EduMall",
    align: "left",
    image: Edumall, 
    link: "https://edumall-ten.vercel.app/",
  },
  {
    name: "FitNexus Fitness Platform",
    align: "right",
    image: web1,  
    link: "https://fit-nexus-seven.vercel.app/",
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