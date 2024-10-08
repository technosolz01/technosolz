import { Button, useMatches } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import Typewriter from "typewriter-effect";
import { Info } from "../User";
import ResumeViewer from "./ResumeViewer";
import Particles from "./magicui/particles";
const About = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const btn = useMatches({
    xs:'xs',
    sm:'sm',
    md:'md',
    lg:'lg'
  })
  return (
    <>
      <div
        data-aos="zoom-out-up"
        data-aos-duration="800"
        className="mt-28 flex relative overflow-hidden justify-around items-center font-mono px-10 py-10 sm-mx:px-2 xs-mx:px-1 xs-mx:py-4 h-fit lg-mx:justify-between bs-mx:flex-wrap bs-mx:flex-col-reverse bs-mx:!overflow-visible bs-mx:gap-6 md-mx:px-6"
        id="bg"
      >
        <Particles
          className="absolute -z-20 inset-0"
          quantity={1200}
          ease={80}
          vx={0.1}
          vy={0.1}
          color="#64FFDA"
          refresh
        />
        <div className="ml-10 sm-mx:ml-0 xs-mx:ml-0 xsm-mx:ml-0 w-3/4 flex flex-col lg-mx:gap-3 bs-mx:items-center ">
          <div className="text-primaryColor text-3xl lg-mx:text-2xl xs-mx:text-xl xsm-mx:text-lg">
          Welcome to
          </div> 
          <div className="text-white text-[3.25rem] font-extrabold lg-mx:text-3xl sm-mx:text-3xl xs-mx:text-2xl xsm-mx:text-[25px]">
            {Info.name}
          </div>
          <div className="text-white text-2xl flex font-semibold lg-mx:text-[25px] sm-mx:text-xl xs-mx:text-sm xsm-mx:text-sm">
          Trusted provider of &nbsp;
            <span className="text-primaryColor">
              <Typewriter
                options={{
                  strings: Info.stack,
                  autoStart: true,
                  loop: true,
                }}
              />
            </span>{" "}
          </div>
          <div className="text-textColor text-xl w-[90%] text-justify my-8 lg-mx:my-0 font-semibold lg-mx:text-base sm-mx:text-sm xs-mx:text-xs">
            {Info.bio}
          </div>
         <div className="flex gap-3">
            <Button
              onClick={open}
              className="!text-bgColor !w-fit"
              size={btn}
              variant="filled"
              color="#64FFDA"
            >
              Resume
            </Button>
            {/* <Button
              component="a"
              href={`${process.env.PUBLIC_URL}/pyResume.pdf`}
              download={Info.name}
              className="!text-primaryColor !w-fit"
              size={btn}
              variant="outline"
              color="#64FFDA"
              rightSection={<IconDownload size={20} />}
            >
              Download
            </Button> */}
              </div> 
        </div>

       
      </div>
      <ResumeViewer opened={opened} close={close} />
    </>
  );
};

export default About;
