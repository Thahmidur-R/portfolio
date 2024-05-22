import { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import useMediaQuery from "../hooks/useMediaQuery";
import 'boxicons/css/boxicons.min.css';



const Navbar =({isTopOfPage,selectedPage, setSelectedPage})=>{
const [isMenuToggled, setIsMenuToggled] = useState(false);
const isAboveSmallScreens = useMediaQuery("(min-width:768px)");
const [isActive, setIsActive] = useState(false);
const navbarBackground = isTopOfPage? "bg-deep-blue": "bg-red"

const toggleMenu = () => {
  setIsActive(!isActive);
  setIsMenuToggled(!isMenuToggled)
};

return(
<nav className={`${navbarBackground} z-40 w-full fixed top-0 py-6`}>
<div className="flex items-center justify-between mx-auto w-5/6">
<h4 className="font-playfair text-3xl font-bold text-grey">Thahmidur Rahman</h4>
{/* NAV FOR DESKTOPS */}
{isAboveSmallScreens?
(
<div className="flex justify-between gap-16 font-opensans text-sm font-semibold">
<Link 
page="Home"
selectedPage={selectedPage}
setSelectedPage={setSelectedPage}
/>
<Link 
page="Skills"
selectedPage={selectedPage}
setSelectedPage={setSelectedPage}
/>
<Link 
page="Projects"
selectedPage={selectedPage}
setSelectedPage={setSelectedPage}
/>
<Link 
page="Contact"
selectedPage={selectedPage}
setSelectedPage={setSelectedPage}
/>
<a className='  hover:text-yellow transition duration-500' href="https://github.com/Thahmidur-R" rel="noreferrer" target="_blank">
  <i className='bx bxl-github'></i>My Github 
</a>
</div>
):
(
   
<MenuButton isActive={isActive} toggleMenu={toggleMenu}/>
)
}
{/*MOBILE MENU*/}
{!isAboveSmallScreens && isMenuToggled && (
  <div className="fixed right-0 bottom-0 h-full w-[300px] bg-red">
 {/* CLOSE ICON */}
 <div className="flex justify-end p-12">
 <MenuButton isActive={isActive} toggleMenu={toggleMenu}/>
            </div>

 
   {/* MENU ITEMS */}
   <div className="flex flex-col gap-10 ml-[33%] text-2xl text-deep-blue">
   <Link
     page="Home"
     selectedPage={selectedPage}
     setSelectedPage={setSelectedPage}
   />
   <Link
     page="Skills"
     selectedPage={selectedPage}
     setSelectedPage={setSelectedPage}
   />
   <Link
     page="Projects"
     selectedPage={selectedPage}
     setSelectedPage={setSelectedPage}
   />
   <Link
     page="Contact"
     selectedPage={selectedPage}
     setSelectedPage={setSelectedPage}
   />
   <a className='  text-2xl text-deep-blue font-opensans' href="https://github.com/Thahmidur-R" rel="noreferrer" target="_blank">
  <i className='bx bxl-github'></i>My Github 
</a>
 </div>
 </div>
)}
</div>

</nav>

)

}

export default Navbar;

const Link = ({page, selectedPage, setSelectedPage})=>{
  const lowerCasePage = page.toLowerCase();
  return(
      <AnchorLink
      className={`${selectedPage === lowerCasePage ? "text-yellow" : ""}
      hover:text-yellow transition duration-500
      `}
      href={`#${lowerCasePage}`}
      onClick={()=> setSelectedPage(lowerCasePage)}
      >
          {page}
      </AnchorLink>
  )
}

const MenuButton =({isActive, toggleMenu})=>{
return(
  <div  onClick={toggleMenu} className=" grid justify-items-center gap-1.5">
<span className={`h-1 w-8 rounded-full bg-white transition ${isActive ? 'translate-y-2.5 rotate-45' : ''}`} ></span>
<span className={`h-1 w-8 rounded-full bg-white transition ${isActive ? 'scale-x-0' : ''}`}></span>
<span className={`h-1 w-8 rounded-full bg-white transition ${isActive ? '-translate-y-2.5 -rotate-45' : ''}`}></span>

</div>
)
}