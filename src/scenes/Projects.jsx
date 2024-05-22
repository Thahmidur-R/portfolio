import { motion } from "framer-motion";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'boxicons/css/boxicons.min.css';

import foodShopVideo from "../assets/foodShopVideo.mp4";
import minesweeperImage from "../assets/minesweeper-ss.png";
import codepenImage from "../assets/codepen-ss.png";
import TeacherDashboardImage from "../assets/dashboardss.png"
const Projects=()=>{
    return(
        <section id="projects" className="pt-10 pb-24 ">
        {/* HEADINGS */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          className="flex w-full justify-center pb-8"
        >
          
            <p className="font-playfair font-semibold text-4xl">
              My Projects
            </p>
            
          
        </motion.div>
        <div className="flex justify-center items-center h-[80%] w-[80%] ml-[10%] sm:mt-[10%]">
          <ProjectSlides />
          </div>
        </section>
    )
}



const ProjectSlides=()=> {
  const settings = {
    className: "center",
    draggable:true,
    dots:true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 1,
    swipeToSlide: true,
    speed: 500,
    appendDots: dots => (
      <div>
        <ul  style={{ margin: '0px' }}> {dots} </ul>
      </div>
    ),
    customPaging: i => (
      <div
        style={{
          width: '15px',
          height: '15px',
          borderRadius: '50%',
          border: '2px solid #fff',
          backgroundColor: 'transparent',
          display: 'inline-block',
          margin: '5px',
        }}
      ></div>
    ),
    
  };


  return (
    <div className="slider-container w-full h-full">
      <Slider {...settings} dotsClass="slick-dots">
      <div className="slide px-2 flex flex-col">
        <a className='block text-blue underline text-center font-semibold font-sans text-3xl md:text-4xl pb-[20px]' href="https://github.com/Thahmidur-R/teacherdashboard" rel="noreferrer" target="_blank">
          Teacher Dashboard
          </a>
          <img
            src={TeacherDashboardImage}
            alt="Teacher Dashboard project Screenshot"
            className="w-full h-full max-h-[300px] max-w-[600px]  object-contain mx-auto"
          />
           

           <div className="text-center mt-[30px] pb-[20px]" >
          
<p className="text-left">
  Technologies used:  PostgreSQL, React.js, Node.js. 
  </p>
  <p className="pt-[10px] text-justify"> This is an app designed to act as a dasboard for teachers which they can use to view their timetable and details about the different classes they teach.
  Refer to the github repo for a more detailed description of this project.
</p>

<a className='text-blue underline block text-left' href="https://github.com/Thahmidur-R/teacherdashboard" rel="noreferrer" target="_blank">
  <i className='bx bxl-github'></i> Click to view the github repository
</a>



        </div>      
        </div>
      <div className="slide px-2 flex flex-col">
      <h3 className='block text-blue underline text-center font-semibold font-sans text-3xl md:text-4xl pb-[20px]'>
          Food Shop App
          </h3>
          <video className="w-full h-full max-h-[300px] max-w-[600px] object-contain mx-auto" controls>
            <source src={foodShopVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
         
<div className="pt-[20px]">

  Technologies used: Java, Servlets, JSP, JDBC, MySQL, Javascript, HTML, and CSS/Bootstrap. 
  <p className="pt-[10px]"> This is an app designed to replicate a store's website. For customers, the application provides a user-friendly interface to browse the menu and place orders.

Administrators have access to tools for menu management and order tracking. The menu items, along with their descriptions and prices, are stored in a MySQL database, allowing administrators to effortlessly update and maintain the menu's content.</p>
  <p className="py-[10px]">What I learnt: Connecting to a MySQL database in Java using JDBC and sending objects to a Javascript file. I also learnt to retrieve objects from Javascript into Java and insert the necessary information into a database.
</p>

            </div>
            </div>
     
        <div className="slide px-2 flex flex-col">
        <a className='block text-blue underline text-center font-semibold font-sans text-3xl md:text-4xl pb-[20px]' href="https://thahmidur-r.github.io/minesweeper-remake/" rel="noreferrer" target="_blank">
          Minesweeper Clone
          </a>
          <img
            src={minesweeperImage}
            alt="Minesweeper Screenshot"
            className="w-full h-full max-h-[300px] max-w-[600px]  object-contain mx-auto"
          />
           

           <div className="text-center mt-[30px] pb-[20px]" style={{textAlign:"justify"}}>
           This is my attempt at remaking minesweeper using React.js.
                   I was able to work on using functional components and state hooks. 
                   This helped me by improving my skills in sharing state between components
                    and understanding how React manages state updates and re-renders. 
<a className='text-blue underline block ' href="https://github.com/Thahmidur-R/minesweeper-remake" rel="noreferrer" target="_blank">
  <i className='bx bxl-github'></i> Click to view the github repository
</a>
<a className='text-blue underline block' href="https://thahmidur-r.github.io/minesweeper-remake/" rel="noreferrer" target="_blank">
  <i className='bx bxs-bomb'></i> Click to play the game
</a>
         
           </div>


        </div>

        <div className="slide px-2 flex flex-col" >
        
          <a className='block text-blue underline text-center font-semibold font-sans text-3xl md:text-4xl pb-[20px]' href="https://codepen.io/RahmanT/pens/public" rel="noreferrer" target="_blank">
          CodePen Projects
          </a>
          <img
            src={codepenImage}
            alt="CodePen Project Screenshot"
            className="w-full h-full max-h-[300px] max-w-[600px]  object-contain mx-auto"
          />
           

            <div className="text-center mt-[30px] pb-[20px]" style={{ textAlign: 'justify' }}>
           
            I have a collection of projects on codepen built using HTML, CSS, and JS, which I completed as part 
                  of freeCodeCamp's curriculum on web development. These projects include a calculator and pomodoro timer built 
                  using react and different charts (e.g. choropleth and heat map) built 
                  using D3 and SVG after fetching and parsing data from a dataset. 
                  <a className='block text-blue underline ' href="https://codepen.io/RahmanT/pens/public" rel="noreferrer" target="_blank">
                  <i className='bx bxl-codepen' ></i> Click to view my codepen 
          </a>
            </div>
          
        </div>
      </Slider>
      <style jsx>{`
  .slick-prev,
  .slick-next {
    background: rgba(0, 0, 0, 0.5); /* Semi-transparent background */
    border-radius: 50%;
    width: 50px; /* Increased width for the buttons */
    height: 50px; /* Increased height for the buttons */
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1;
    color: #fff; /* Light color for the arrows */
    font-size: 0px; /* Adjust font size */
    padding: 0; /* Remove default padding */
    margin-top: -25px; /* Push the buttons closer to the slides */
  }
  
  .slick-prev {
    left: 60px; /* Adjust the position of the prev button */
  }

  .slick-next {
    right: 60px; /* Adjust the position of the next button */
  }

  .slick-prev:hover,
  .slick-next:hover {
    background: rgba(0, 0, 0, 0.75); /* Darker background on hover */
  }

  .slick-dots li div {
    background-color: transparent; /* Transparent background for the dots */
    opacity: 1; 
    width: 12px;
    height: 12px;
    border: 2px solid #fff;
    border-radius: 50%; 
    margin: 0 5px;
    transition: background-color 0.3s ease; 
  }

  .slick-dots li.slick-active div {
    background-color: #fff !important;
    opacity:1;
  }
  @media (max-width: 620px) {
    .slick-prev,
    .slick-next {
      display: none !important;
    }
  }
`}</style>
    </div>
  );
}



export default Projects;