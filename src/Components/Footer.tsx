import { Button } from "@mantine/core";
import { Link } from "react-router-dom";
import { FooterNavLinks, FooterServiceLinks, Info, officialInfo, socialLinks } from "../User";

const Footer = () => {
  
  const socialIcons = socialLinks.map((socialLinks, index) => {
    return (
      <a
        key={index}
        href={`${socialLinks.link}`}
        target="_blank"
        className="font-mono text-lg hover:text-primaryColor hover:scale-105 transition transform duration-300 ease-in-out"
      >
        <socialLinks.icon stroke={1.5} size={25} />
      </a>
    );
  });

  return (
    <footer className="bg-bgColor text-white p-4 ">
      <div className="font-mono">
        <div className="container mx-auto flex flex-wrap justify-between">
          <div className="w-full md:w-1/4 mb-4 px-6">
            <img
              className="w-[70%] bs-mx:w-[50%] xsm-mx:w-[30%] !p-1"
              src={`${process.env.PUBLIC_URL}/logo.png`}
              alt="logo"
            />
            <div className="text-white text-justify text-lg sm-xm:text-lg -mt-10 mb-5 ">
              You are welcome to Technosolz. We are a custom software
              development company committed to delivering tailored solutions
              that fit your needs. Experience hassle-free service and
              exceptional quality at great prices.
            </div>
            <Button
              className="!text-bgColor !w-fit"
              // size={btn}
              variant="filled"
              color="#64FFDA"
            >
              Button
            </Button>
          </div>
          <div className="w-full md:w-1/4 mb-4 mt-20 px-6">
            <h3 className="font-bold mb-8 text-2xl uppercase">Official Info</h3>
            <ul>
              {officialInfo.map((contact, index) => (
                <li key={index} className="flex items-center mb-2">
                  {contact.icon && <span className="mr-2  hover:text-primaryColor transition transform duration-300 ease-in-out">{contact.icon}</span>}
                  <Link to={contact.link} className="hover:underline text-lg sm-mx:text-lg">
                    {contact.title}
                  </Link>
                </li>
              ))}
              <div className="md-mx:flex flex text-textColor gap-6 mt-5 sm-mx:hidden">{socialIcons}</div>
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-4 mt-20 px-6">
            <h3 className="font-bold mb-8 text-2xl uppercase">Quick Links</h3>
            <ul>
      {FooterNavLinks.map((nav, index) => (
        <li key={index} className="mb-2">
          <Link to={nav.link} className="hover:underline text-lg sm-mx:text-lg">
            {nav.title}
          </Link>
        </li>
      ))}
      
    
    </ul>
          </div>
          <div className="w-full md:w-1/4 mb-4 mt-20 px-6">
            <h3 className="font-bold mb-8 text-2xl uppercase">Services</h3>
            <ul>
      {FooterServiceLinks.map((nav, index) => (
        <li key={index} className="mb-2">
          <Link to={nav.link} className="hover:underline text-lg sm-mx:text-lg">
            {nav.title}
          </Link>
        </li>
      ))}
    </ul>
          </div>
        </div>
        <div className=" mt-10  font-mono flex flex-col gap-2 items-center text-white">
          {/* <div className="text-3xl md-mx:text-2xl  text-primaryColor font-semibold">{Info.name}</div> */}
          <div className="md-mx:flex hidden text-textColor gap-8 sm-mx:gap-6">
            {socialIcons}
          </div>
          <div className="text-white text-xl md-mx:text-lg sm-mx:text-base xs-mx:text-sm xs-mx:flex flex-col items-center ">
            Copyright &copy; {new Date().getFullYear()} {Info.name}{" "}
            <span className="xs-mx:hidden">|</span>{" "}
            <span>All Rights Reserved</span>
          </div>
        </div>
      </div>
    </footer>
  );
  // <div className=" mt-20 mb-10 font-mono flex flex-col gap-2 items-center">
  //     <div className="text-3xl md-mx:text-2xl  text-primaryColor font-semibold">{Info.name}</div>
  //     <div className="md-mx:flex hidden text-textColor gap-8 sm-mx:gap-6">{socialIcons}</div>
  //     <div className="text-textColor text-xl md-mx:text-lg sm-mx:text-base xs-mx:text-sm xs-mx:flex flex-col items-center ">Copyright &copy; {new Date().getFullYear()} {Info.name} <span className="xs-mx:hidden">|</span> <span>All Rights Reserved</span></div>

  // </div>
};

export default Footer;
