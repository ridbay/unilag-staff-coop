import Image from "next/image";
import TwitterIcon from "@mui/icons-material/Twitter";
import Link from "next/link";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import MainLogo from "../../public/imgs/main-logo.png";

const Footer = () => {
  return (
    <div className="w-full text-white p-6 mt-12 min-h-[22rem] bg-theme-color">
      <div className="flex flex-col gap-4">
        <div className="grid grid-cols-1 gap-4 md:grid md:grid-cols-2 md:gap-6 md:justify-between lg:flex lg:gap-24">
          <div>
            <p className="font-semibold mb-2 uppercase ">Contact Address</p>
            <p className="text-[1rem]">
              HRDC Building,
              <br />
              Ground Floor, Room 001,
              <br />
              Akin Adesola Road, University of Lagos, <br />
              Akoka, Yaba, Lagos.
            </p>
          </div>
          <div>
            <p className="font-semibold mb-2 uppercase">Mobile Contact</p>
            <p className="text-[1rem]">
              Email: contact@uniqueunilagstaffcoop.org
              <br />
              Phone: 0807 726 2847
            </p>
          </div>
          <div className="">
            <div className="mb-3 font-semibold uppercase">Social connect</div>
            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/uniqueunilagstaffcoop/"
                className=""
              >
                <FacebookIcon />
                {/* <RiFacebookCircleLine size={25} /> */}
              </a>

              <a href="https://www.twitter.com/uniquecoopsoc" className="">
                <TwitterIcon />
                {/* <AiFillInstagram size={25} /> */}
              </a>
              <a
                href="https://www.youtube.com/uniqueunilagstaffcoop"
                className=""
              >
                <YouTubeIcon />
                {/* <TbBrandLinkedin size={25} /> */}
              </a>
            </div>
          </div>
        </div>
        <hr />
        <div
          className={`${"flex flex-col gap-4 md:flex-row  md:justify-between md:px-4"}`}
        >
          <div>
            <Image
              src={MainLogo}
              alt="Unilag unique staff logo"
              className="w-[8rem] h-[8rem]"
            />
          </div>
          <div className="flex flex-col gap-4 text-[1rem]">
            <p>
              © 2023 Unique Unilag Staff Cooperative Multipurpose Society
              Limited{" "}
            </p>
            <Link href="/">
              <p>Policy</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
