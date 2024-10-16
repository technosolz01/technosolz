import { Button, useMatches } from "@mantine/core";
import {
  IconArrowRight,
  IconMail,
  IconMapPin2,
  IconPhone,
  IconTopologyStar3,
} from "@tabler/icons-react";
import { useState } from "react";
import FloatingInput from "./FloatingInput";

const Contact = () => {
  const phoneNumber1 = "+919140196641";
  const phoneNumber2 = "+917558726131";
  const emailAddress = "technosolz01@gmail.com"
  const address = 'A/502 Sunshine park, Mumbai, Maharashtra 401209';
  const form = {
    name: "",
    email: "",
    phone: "",
    message: "",
  };
  const [formData, setFormData] = useState(form);
  const handleChange = (id: string, value: string) => {
    setFormData({ ...formData, [id]: value });
  };
  const btn = useMatches({
    xs: "xs",
    sm: "sm",
    md: "md",
    lg: "lg",
  });
  return (
    <div className="flex gap-2">
      <div className="w-[65%] p-4 ">
        <div
          data-aos="flip-left"
          data-aos-duration="800"
          className="w-[70%] lg-mx:w-full shadow-[0_0_10px_0_#64FFDA50] m-auto flex flex-col gap-6 border border-primaryColor  p-4 sm-mx:p-4"
        >
          <div className="flex border-b-2 border-dashed border-white p-4">
            <div className="w-[15%] p-2">
              <IconPhone
                className="h-10 w-10 sm-mx:h-7 sm-mx:w-7"
                color="#64FFDA"
                stroke={1.25}
              />
            </div>
            <div className="w-[70%] p-2">
              <h1 className="text-3xl text-white ">Call us on</h1>
              <div className="text-xl text-white ">
                <a href={`tel:${phoneNumber1}`}>{phoneNumber1}</a>
              </div>
              <div className="text-xl text-white ">
                <a href={`tel:${phoneNumber2}`}>{phoneNumber2}</a>
              </div>
            </div>
          </div>


          {/* mailus */}
          <div className="flex border-b-2 border-dashed border-white p-4">
            <div className="w-[15%] p-2">
              <IconMail
                className="h-10 w-10 sm-mx:h-7 sm-mx:w-7"
                color="#64FFDA"
                stroke={1.25}
              />
            </div>
            <div className="w-[70%] p-2">
              <h1 className="text-3xl text-white ">Mail us</h1>
              <div className="text-xl text-white ">
              <a href={`mailto:${emailAddress}`}>{emailAddress}</a>
              </div>
              
            </div>
          </div>
          {/* address */}
          <div className="flex p-4">
            <div className="w-[15%] p-2">
              <IconMapPin2
                className="h-10 w-10 sm-mx:h-7 sm-mx:w-7"
                color="#64FFDA"
                stroke={1.25}
              />
            </div>
            <div className="w-[70%] p-2">
              <h1 className="text-3xl text-white ">Address</h1>
              <div className="text-xl text-white ">
              {address}
              </div>
              
            </div>
          </div>

        </div>
      </div>
      <div className="w-[80%] p-4 ">
        <div
          data-aos="flip-left"
          data-aos-duration="800"
          className="w-[60%] lg-mx:w-full shadow-[0_0_10px_0_#64FFDA50] m-auto flex flex-col gap-4 border border-primaryColor  p-4 sm-mx:p-4"
        >
          <div className=" text-3xl text-white font-semibold sm-mx:text-2xl xs-mx:text-xl">
            Let's Contact
            <IconTopologyStar3 className="text-primaryColor h-10 w-10 sm-mx:h-7 sm-mx:w-7" />{" "}
          </div>
          <FloatingInput id="name" name="Name" value={formData.name} />
          <FloatingInput id="email" name="Email" value={formData.email} />
          <FloatingInput id="phone" name="Phone" value={formData.phone} />
          <FloatingInput id="message" name="Message" value={formData.message} />
          <Button
            className="!text-bgColor font-bold "
            fullWidth
            variant="filled"
            size={btn}
            radius="lg"
            color="#64FFDA"
            rightSection={
              <IconArrowRight className="h-10 w-10 sm-mx:h-7 sm-mx:w-7" />
            }
          >
            Send
          </Button>
        </div>
      </div>
    </div>
    
  );
};
export default Contact;

// <div  className="w-[47%] px-16 mx-20 md-mx:px-8 sm-mx:pc-4 lg-mx:mx-12 md-mx:mx-0 my-10 mb-28 font-mono p-5 bs-mx:p-3 sm-mx:w-full"
// id="Contact">

//     <div
//       data-aos="flip-left"
//       data-aos-duration="800"
//       className="w-[50%] lg-mx:w-full shadow-[0_0_10px_0_#64FFDA50] m-auto flex flex-col gap-6 border border-primaryColor rounded-3xl p-8 sm-mx:p-4"
//     >
//       <div className=" text-3xl text-white font-semibold sm-mx:text-2xl xs-mx:text-xl">
//         Let's Contact
//         <IconTopologyStar3 className="text-primaryColor h-10 w-10 sm-mx:h-7 sm-mx:w-7" />{" "}
//       </div>
//       <FloatingInput id="name" name="Name" value={formData.name} />
//       <FloatingInput id="email" name="Email" value={formData.email} />
//       <FloatingInput id="phone" name="Phone" value={formData.phone} />
//       <FloatingInput id="message" name="Message" value={formData.message} />
//       <Button
//         className="!text-bgColor font-bold "
//         fullWidth
//         variant="filled"
//         size={btn}
//         radius="lg"
//         color="#64FFDA"
//         rightSection={
//           <IconArrowRight className="h-10 w-10 sm-mx:h-7 sm-mx:w-7" />
//         }
//       >
//         Send
//       </Button>
//     </div>
//   </div>