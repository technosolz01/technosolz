import { em } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { IconHexagonLetterA } from "@tabler/icons-react";
import { useEffect, useState } from "react";
import SideBar from "./SideBar";
import { Link } from "react-router-dom";

const links = ["About", "Work", "Experience", "Skills", "Contact",'Services'];
const navLinks = (col:Boolean, clicked:any) => {
  const handleClick = ()=>{
    if(clicked)clicked();
  }
  return links.map((link, index) => {
    return (
      <Link key={index} onClick={handleClick}
        className={`${col?'flex flex-col items-center ' : ''}text-textColor text-lg font-mono hover:text-primaryColor`}
        to={`/${link}`}
      >
        <span className="text-primaryColor">0{index + 1}. </span>
        {link}
      </Link>
    );
  });
};

const Header = () => {
  const isMobile = useMediaQuery(`(max-width: ${em(476)})`);
  const [show,setShow] = useState(true);
  const [shadow,setShadow] = useState(false);
  const [lastScrollY,setLastScrollY] = useState(0);
  const controllNavbar = ()=>{
    if(window.scrollY>lastScrollY && window.scrollY>70)setShow(false);
    else setShow(true);
    if (window.scrollY>70 ) setShadow(true);
    else setShadow(false);
    setLastScrollY (window.scrollY);
  }
  useEffect(()=>{
    window.addEventListener('scroll', controllNavbar);
    return ()=>window.removeEventListener('scroll', controllNavbar);
  })
  return (
    <nav className={`flex ${show?"translate-y-0":"-translate-y-28"} ${shadow?"shadow-[0px_10px_30px_-10px_#020c1b]":""} transition-transform duration-500 ease-in-out fixed w-full z-10 bg-bgColor h-28 items-center xs-mx:px-4 xs-mx:h-20 px-10 justify-between`}>
      <IconHexagonLetterA className="z-10" size={isMobile?45:60} color="#64FFDA" stroke={1.25} />
      <div className="md:flex gap-8 hidden">{navLinks(false,null)}</div>
      <SideBar />
    </nav>
  );
};

export default Header;
export { navLinks };

