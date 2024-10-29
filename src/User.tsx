
// @tabler-icons-react.d.ts
import { IconBrandFacebook, IconBrandGithub, IconBrandInstagram, IconBrandLinkedin, IconMail, IconMapPin, IconPhone } from "@tabler/icons-react";

const Info = {
    // name: "Aamir Khan",
    name: "Technosolz",
    stack: ["Software Development", "Web Development","Mobile App Development","Website Development"],
    bio: "At Technosolz, we are passionate about transforming ideas into innovative software solutions. Founded by a team of dedicated professionals, our missionis to empower businesses with cutting-edge technology that drives effi ciencyand growth. With years of experience in software development, we specialize incustom applications, web development, and mobile solutions tailored to meetthe unique needs of our clients. Our approach is built on collaboration, transparency, and a deep understandingof our clients' goals. We take the time to listen and engage with our partners,ensuring that every project aligns with their vision. Our agile development process allows us to adapt quickly to changes and deliver high-quality productson time. At Technosolz, we believe in the power of technology to make a difference. Whether you're a startup looking to build your first app or an established enterprise seeking to enhance your digital presence, we are here to help you navigate the ever-evolving tech landscape. Join us on this journey, and let’s create something amazing together!"
}
const ProjectInfo = [
    {
        title: "SMS",
        desc: "This project assesses teachers and teachers by conducting and maintaining online records for the students appearing for various classes and sections. The College Management System would be highly useful for the staffs and admins for having a platform to maintain all the necessary records regarding student’s details. This project will enable educational institutes maintain records. The project allows faculties to create their records for students, classes, sections.",
        image: `${process.env.PUBLIC_URL}/Icons/projectImages/sms.png`,
        live:false,
        technologies: ["Python", "Django", "Bootstrap", "HTML", "CSS", "Javascript", "Ajax", "ChartJs"],
        link: "#",
        github: "https://github.com/aamirk1/sms-project.git"
    },
    {
        title: "TMS",
        desc: "The Ticket Management System is a Flutter-based web application with two main tabs: Master and Reports. The Master tab allows the admin to create users, manage work lists, and organize buildings, floors, rooms, and assets. The **Reports** tab enables the admin to filter and view tickets based on specific criteria. The system is designed to streamline ticket management and provide efficient oversight of tasks and resources.",
        image: `${process.env.PUBLIC_URL}/Icons/projectImages/tms.png`,
        live:true,
        technologies:["Flutter", "Dart", "Firebase"],
        link: "https://tms.nldalmia.in",
        github: "https://github.com/aamirk1/ticket_management_system.git"
    },
    {
        title: "Ecommerce",
        desc: "The PHP eCommerce Platform is a robust and scalable online shopping solution designed to offer a seamless shopping experience for users and an intuitive management system for administrators. This platform leverages PHP to handle server-side scripting, coupled with MySQL for database management, HTML/CSS/JavaScript for the front-end, and various libraries and frameworks to enhance functionality. Our e-commerce platform features a powerful and intuitive admin dashboard designed to streamline the management of your online store. With a focus on flexibility and ease of use, the dashboard enables administrators to efficiently organize and maintain product listings, categories, and variants to ensure a seamless shopping experience for customers",
        image: `${process.env.PUBLIC_URL}/Icons/projectImages/ecom.png`,
        live:false,
        technologies: ["PHP", "Bootstrap", "HTML", "CSS", "Javascript"],
        link: "https://maasav.com",
        github: "https://github.com/aamirk1/ecomerc.git"
    },
    {
        title: "Society Manager",
        desc: "",
        image: `${process.env.PUBLIC_URL}/Icons/projectImages/societyadmin.png`,
        live:true,
        technologies: ["Flutter", "Dart", "Firebase"],
        link: "https://societyadmin.web.app/",
        github: "https://github.com/aamirk1/ecomerc.git"
    },
    {
        title: "Zap Account",
        desc: "",
        image: "zapAccount.png",
        live:true,
        technologies: ["PHP", "Bootstrap", "HTML", "CSS", "Javascript"],
        link: "https://maasav.com",
        github: "https://github.com/aamirk1/ecomerc.git"
    },
    
    {
        title: "ResumeUploader",
        desc: "",
        image: `${process.env.PUBLIC_URL}/Icons/projectImages/resume.png`,
        live:false,
        technologies: ["Python", "Django", "sqlite", "HTML", "CSS", "Javascript"],
        link: "https://maasav.com",
        github: "https://github.com/aamirk1/ecomerc.git"
    },
]

const SkillInfo = [
    {
        title: "Frontend",
        skills: ["HTML", "CSS", "JavaScript", "React JS", "Tailwind CSS", "Material UI", "Bootstrap"]
    },
    {
        title: "Backend",
        skills: ["Django", "Flutter", "MySQL", "MongoDB", "Firebase", "PostgreSQL", "Node JS", "Express JS", "Sqlite", "Redis" ]
    },
    {
        title: "Language",
        skills: ["C", "C++", "Python", "Dart", "PHP", "JavaScript", "TypeScript" ]
    },
    {
        title: "Tools",
        skills: ["Git", "Github", "Linux", "VS Code", "MongoDB Compass", "Postman", "Django Rest Framework", "Numpy", "Matplotlib", "Pandas", "TensorFlow", "Xampp", "Shared Hosting" ]
    }
]

const ExperienceInfo = [
    {
        role: "Web Application Developer",
        company: "Zap Web Media Solutionz",
        date: "Dec 2022 - 2023",
        desc: "As a Web Application Developer at Zap Solutionz, I am responsible for designing, developing, and maintaining dynamic web applications. My role involves collaborating with cross-functional teams to create user-friendly interfaces and ensure seamless functionality. I utilize various technologies to deliver high-quality solutions that meet client requirements and enhance user experience.",
        skills: ["Django", "Python", "HTML", "CSS", "JavaScript", "PHP", "Bootstrap", "MySQL", "XAMPP"]
    },
    {
        role: "Flutter Developer",
        company: "Zap Solutionz",
        date: "Dec 2023 - Present",
        desc: "As a Flutter Developer at Zap Solutionz, I am responsible for designing and building cross-platform mobile applications that provide an engaging user experience. My role involves collaborating with product teams to define application features and ensure high performance across various devices. I leverage the Flutter framework and Dart programming language to deliver high-quality, maintainable code.",
        skills: ["Flutter", "Dart", "Firebase", "REST API", "Git"]
    }
]
const socialLinks = [ {link:"https://in.linkedin.com/in/technosolz", icon:IconBrandLinkedin}, {link:"https://instagram.com/technosolz01", icon:IconBrandInstagram}, {link:"https://facebook.com/technosolz01", icon:IconBrandFacebook}, {link:"https://github.com/aamirk1", icon:IconBrandGithub}];
const officialInfo = [
    { link: "/", title: "502 Sunshine Park Mumbai, Maharashtra 401209", icon: <IconMapPin /> }, // Add an icon if needed
    { link: "mailto:technosolz01@gmail.com", title: "technosolz01@gmail.com", icon: <IconMail /> },
    { link: "tel:+919893479433", title: "+91 9893479433", icon: <IconPhone /> },
    { link: "tel:+919893479433", title: "+91 9893479433", icon: <IconPhone /> },
  ];
  const FooterNavLinks = [
    { link: "/link10", title: "Home" },
    { link: "/link11", title: "About" },
    { link: "/link12", title: "Technologies" },
  ];
  const FooterServiceLinks = [
    { link: "/link10", title: "Web Development" },
    { link: "/link11", title: "App Development" },
    { link: "/link12", title: "HOsting Support" },
  ];

export { Info, ProjectInfo, SkillInfo, ExperienceInfo, socialLinks, officialInfo, FooterNavLinks, FooterServiceLinks };

