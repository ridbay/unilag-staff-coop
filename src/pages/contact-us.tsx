import TextField from "@mui/material/TextField";
import Image from "next/image";
import Contact1 from "../../public/imgs/contact-us.jpeg";
import Contact2 from "../../public/imgs/Image.png";
import Contact3 from "../../public/imgs/contact3.jpeg"

const Contact = () => {
  return (
    <div>
      <div className="flex justify-between items-center p-6">
        <div className="md:basis-[45%] basis-0">
          <Image
            src={Contact3}
            alt="Image"
            className="object-cover h-[44rem] w-full"
          />
        </div>
        <form className="basis-[100%] md:pl-16 lg:pl-24 md:basis-[55%]">
          <div className="py-8">
            <p className="text-[2rem] font-semibold">Get In Touch with Us</p>
            <p></p>
          </div>
          <div className="flex flex-col gap-6 lg:w-[80%] w-[100%]">
            <TextField
              id="outlined-basic"
              label="Full Name"
              variant="outlined"
              required
            />
            <TextField id="outlined-basic" required label="Email" variant="outlined" />
            <TextField
              id="outlined-basic"
              label="Phone Number"
              variant="outlined"
              required
            />
            <TextField id="outlined-basic" required label="Subject" variant="outlined" />
            <TextField
              id="outlined-multiline-static"
              label="Message"
              multiline
              variant="outlined"
              required
              rows={12}
            />
            <input
              type="submit"
              value="Submit"
              className="bg-theme-color transition-all text-[18px] hover:bg-white hover:text-theme-color hover:border-2 hover:border-theme-color duration-500 ease-in-out text-white py-4 rounded-md cursor-pointer"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
