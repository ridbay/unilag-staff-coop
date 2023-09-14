import { PATH } from "@/routes/path";
import Link from "next/link";
import { useRouter } from "next/router";

const aboutPaths = [
  { name: "About Us", link: PATH.aboutUs.root },
  { name: "Mission & Vision", link: PATH.aboutUs.mission },
  { name: "Trustees", link: PATH.aboutUs.trustees },
  { name: "Management", link: PATH.aboutUs.management },
  { name: "Past Presidents", link: PATH.aboutUs.pastPresidents },
];

const AboutLayout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const dynamicWidth = `${100 / aboutPaths.length}%`
  return (
    <div className="min-h-[80vh] flex justify-center leading-[52px] py-[45px] p-[5vw]">
      <div className="md:max-w-[1000px] w-[95vw]">
        <h1 className="text-[2rem] font-semibold">About Us</h1>
        <nav>
          <ul className="flex flex-nowrap">
            {aboutPaths.map((path, index) => (
              <li key={index} className={`w-[${dynamicWidth}]  pb-[12px] ${
                router.pathname === path.link
                  ? "border-b-[2px] border-blue-500"
                  : "border-b border-black"
              }`}>
                <Link
                  href={path.link}
                  style={{display: 'inline-block'}}
                  className={`hover:text-blue-200 w-[100%] text-[17px] leading-[23.46px] px-[10px] md:px-[20px] text-center whitespace-pre-wrap h-full`}
                >
                  {path.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="my-10">{children}</div>
      </div>
    </div>
  );
};

export default AboutLayout;
