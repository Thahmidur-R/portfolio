
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import { useState } from "react";
import AboutMeImage from "../assets/about-me-image.jpg";
import MySkillsImage from "../assets/skills-image.jpg";
import MyExperienceImage from "../assets/my-experience-image.jpg";

const Skills=()=>{
    const isAboveMediumScreens = useMediaQuery("(min-width:1060px)")
    const [selectedTab, setSelectedTab] = useState("About Me");
    const imageMap = {
      "About Me": AboutMeImage,
      "My Skills": MySkillsImage,
      "My Experience": MyExperienceImage,
    };

    return(
    <section id="skills" className="pt-10 pb-24 h-full">
        {/*TAB TITLES */}
        <div className="flex w-full justify-center mb-10">
       
        <div className="flex flex-row justify-between xs:w-full sm:w-1/2 md:w-1/2">
    <div className="flex flex-col">
        <p className=" inline-block font-semibold text-grey hover:text-blue" onClick={() => setSelectedTab("About Me")}>About Me</p>
        <div className={` h-0.5 bg-gradient-rainblue transition-all duration-500 ${selectedTab === "About Me" ? 'w-1/2' : 'w-0'}`} />
    </div>
    <div className="flex flex-col">
        <p className=" inline-block font-semibold text-grey hover:text-blue" onClick={() => setSelectedTab("My Skills")}>My Skills</p>
        <div className={` h-0.5 bg-gradient-rainblue transition-all duration-500 ${selectedTab === "My Skills" ? 'w-1/2' : 'w-0'}`} />
    </div>
    <div className="flex flex-col">
        <p className=" inline-block font-semibold text-grey hover:text-blue" onClick={() => setSelectedTab("My Experience")}>My Experience</p>
        <div className={` h-0.5 bg-gradient-rainblue transition-all duration-500 ${selectedTab === "My Experience" ? 'w-1/2' : 'w-0'}`}/>
    </div>
</div>

        </div>
        {/*TAB CONTENT */}
        
        {isAboveMediumScreens ? (
        <div className="flex h-full gap-[40px] items-center justify-center ">
          <img
            src={imageMap[selectedTab]}
            alt={selectedTab}
            className="object-contain max-h-[300px] w-1/3" 
          />
          <TabContent selectedTab={selectedTab} className="w-2/3"/>
        </div>
      ) : (
        <TabContent selectedTab={selectedTab} />
      )}
    </section>
    )
}

const TabContent=({selectedTab})=>{
    return(
<motion.div
      key={selectedTab}  // Add key to force re-render on tab change
      initial="hidden"
      animate="visible"
      exit="hidden"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5 }}
      variants={{
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0 }
      }}
    >
{selectedTab==="About Me"&& (
    <p className="font-semibold font-sans sm:text-lg text-grey">
        I have recently graduated with a BSc(Hons) in Physics with a 2:1 from King's
         College London. My passion for programming has led me to explore the
          world of web development and through online self taught courses,
         I have been able to build a solid foundation in front-end development, namely HTML, CSS,
          and Javascript. I am also venturing into Java programming to broaden my expertise in the field as
           I am eager to enhance my existing proficiencies and learn new skills. I am excited to embark on 
        this coding journey and if you want to join me, don't hesitate to  <a href="#contact" className="text-blue">say Hello.</a>
    
      </p>
)}
 {selectedTab === "My Skills" && (
        <div className="grid grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-4 justify-center items-center">
          {['Java', 'Servlets', 'HTML', 'CSS', 'JS', 'React', 'Bootstrap', 'GIT', 'SQL', 'Responsive design'].map((tech) => (
            <div key={tech} className="m-2 p-2 bg-red text-center text-grey rounded shadow-lg font-semibold ss:text-lg">
              {tech}
            </div>
          ))}
        </div>
      )}
{selectedTab==="My Experience"&&(
    <div className="flex flex-col justify-center items-center text-grey font-semibold font-sans sm:text-xl">
    <ul >
    <li>BSc(Hons) 2:1 Physics from King's College London</li>
    <li>QA software development level 4 course</li>
    <li>freeCodeCamp(FCC) responsive web design certification</li>
    <li>FCC relational databases certification</li>
    <li>FCC Data visualisation certification</li>
  </ul>
    </div >
)}

</motion.div>

    )
}

export default Skills