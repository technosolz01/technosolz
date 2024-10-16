import { Info, socialLinks } from "../User";

const Footer= ()=>{
     const socialIcons = socialLinks.map((socialLinks, index) => {
        return <a key={index} href={`${socialLinks.link}`} target="_blank" className="font-mono text-lg hover:text-primaryColor hover:scale-105 transition transform duration-300 ease-in-out">
      <socialLinks.icon stroke={1.5} size={25} />
    </a>
    })
    
    return <div className=" mt-20 mb-10 font-mono flex flex-col gap-2 items-center">
        <div className="text-3xl md-mx:text-2xl  text-primaryColor font-semibold">{Info.name}</div>
        <div className="md-mx:flex hidden text-textColor gap-8 sm-mx:gap-6">{socialIcons}</div>
        <div className="text-textColor text-xl md-mx:text-lg sm-mx:text-base xs-mx:text-sm xs-mx:flex flex-col items-center ">Copyright &copy; {new Date().getFullYear()} {Info.name} <span className="xs-mx:hidden">|</span> <span>All Rights Reserved</span></div>

    </div>
}

export default Footer;

// import React from 'react';
// import { Link } from 'react-router-dom';

// const Footer = () => {
//   return (
//     <footer className="bg-gray-800 text-white p-6">
//       <div className="container mx-auto flex flex-wrap justify-between">
//         <div className="w-full md:w-1/4 mb-4">
//           <h3 className="font-bold mb-2">Column 1</h3>
//           <ul>
//             <li><Link to="/link1" className="hover:underline">Link 1</Link></li>
//             <li><Link to="/link2" className="hover:underline">Link 2</Link></li>
//             <li><Link to="/link3" className="hover:underline">Link 3</Link></li>
//           </ul>
//         </div>
//         <div className="w-full md:w-1/4 mb-4">
//           <h3 className="font-bold mb-2">Column 2</h3>
//           <ul>
//             <li><Link to="/link4" className="hover:underline">Link 1</Link></li>
//             <li><Link to="/link5" className="hover:underline">Link 2</Link></li>
//             <li><Link to="/link6" className="hover:underline">Link 3</Link></li>
//           </ul>
//         </div>
//         <div className="w-full md:w-1/4 mb-4">
//           <h3 className="font-bold mb-2">Column 3</h3>
//           <ul>
//             <li><Link to="/link7" className="hover:underline">Link 1</Link></li>
//             <li><Link to="/link8" className="hover:underline">Link 2</Link></li>
//             <li><Link to="/link9" className="hover:underline">Link 3</Link></li>
//           </ul>
//         </div>
//         <div className="w-full md:w-1/4 mb-4">
//           <h3 className="font-bold mb-2">Column 4</h3>
//           <ul>
//             <li><Link to="/link10" className="hover:underline">Link 1</Link></li>
//             <li><Link to="/link11" className="hover:underline">Link 2</Link></li>
//             <li><Link to="/link12" className="hover:underline">Link 3</Link></li>
//           </ul>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;