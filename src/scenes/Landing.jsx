import useMediaQuery from "../hooks/useMediaQuery";
import AnchorLink from "react-anchor-link-smooth-scroll";
import {motion} from "framer-motion";

const Landing = ({setSelectedPage})=>{

    const isAboveLarge = useMediaQuery("(min-width:1060px)");

    return(
        <section id="home"
         className="md:flex justify-center md:items-center md:h-full gap-16 pb-10 w-full xs:pt-20 md:pt-10 "
       
        >
          <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{once:true, amount:0.5}}
          transition={{duration:0.5}}
          variants={{
            hidden: {opacity:0, x:-50},
            visible:{opacity:1, x:0}
          }}
          className="flex flex-col">
            
        <h1 className="xs:text-2xl md:text-6xl font-sans text-center text-grey md:mb-3 xs:font-semibold">Hi, I am Thahmidur Rahman</h1>
        <h2 className="xs:text-xl md:text-3xl font-sans text-center text-grey">A software developer based in London, UK</h2>
        
        </motion.div>
           {/* CALL TO ACTIONS */}
           <motion.div
          className="flex mt-5 justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <AnchorLink
            className="bg-gradient-rainblue text-deep-blue rounded-sm py-3 px-7 font-semibold
              hover:bg-blue hover:text-grey transition duration-500"
            onClick={() => setSelectedPage("contact")}
            href="#contact"
          >
            Contact Me
          </AnchorLink>
          <AnchorLink
            className="rounded-r-sm bg-gradient-rainblue py-0.5 pr-0.5"
            onClick={() => setSelectedPage("contact")}
            href="#contact"
          >
            <div className="bg-deep-blue text-grey hover:text-red transition duration-500 w-full h-full flex items-center justify-center px-10 font-playfair">
              Let's talk.
            </div>
          </AnchorLink>
        </motion.div>
        </section>
    )
}


export default Landing