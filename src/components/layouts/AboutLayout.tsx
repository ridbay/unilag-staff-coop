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
    <div className="min-h-[80vh] flex justify-center py-[45px] px-4">
      <div className="md:max-w-[1200px] w-[95vw]">
        <h1 className="text-[2rem] font-semibold mb-[48px]">About Us</h1>
        <nav>
          <ul className="flex flex-nowrap flex-col md:flex-row item-center md:items-stretch gap-2 md:gap-0">
            {aboutPaths.map((path, index) => (
              <li key={index} className={` w-full md:ww-[20%] pb-[12px] ${
                router.pathname === path.link
                  ? "border-t-[2px] border-b-[2px] md:border-t-0 border-theme-color"
                  : "md:border-b border-black"
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
