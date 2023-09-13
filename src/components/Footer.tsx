
import Image from "next/image";
import TwitterIcon from "@mui/icons-material/Twitter";
import Link from "next/link";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import MainLogo from "../../public/imgs/main-logo.png"

const Footer = () => {
  return (
    <div className="w-full text-white p-4 min-h-[22rem] bg-theme-color">
      <div className="flex flex-col gap-4">
        <div className="mobile:grid mobile:grid-cols-1 mobile:gap-4 tab:grid tab:grid-cols-2 tab:gap-6 md:justify-between lg:flex lg:gap-24">
          <div>
            <p>
              <span className="font-semibold uppercase">Contact Address</span>
              <br />
              Call Lagos: +234-7000123450
              <br />
              Call Abuja: +234-7000123451
            </p>
          </div>
          <div>
            <p>
              <span className="font-semibold ">E-Mail</span> <br />
              Email: frontdesk@kamholding.net
            </p>
          </div>
          <div>
            <div className="mb-3 font-semibold uppercase">Social connect</div>
            <div className="flex gap-3">
              <a href="https://www.facebook.com/kam_holding/" className="">
                <FacebookIcon />
                {/* <RiFacebookCircleLine size={25} /> */}
              </a>

              <a href="https://www.instagram.com/kam_holding/" className="">
                <TwitterIcon />
                {/* <AiFillInstagram size={25} /> */}
              </a>
              <a
                href="https://www.linkedin.com/company/kam-holding/"
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
          <div className="flex flex-col gap-6">
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