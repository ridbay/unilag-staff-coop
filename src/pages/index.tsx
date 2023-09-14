import Image from "next/image";
import { Inter } from "next/font/google";
import Carousel from "@/components/HomeCarousel";
import Typography from "@mui/material/Typography";
import { whoWeAreSectionData } from "@/data/HomeData";
import MiniCard from "@/components/mini-card";
import { CardContent } from "@/data/HomeData";
import { data } from "autoprefixer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const CarouselData = [
    { bgImg: "bg-carouselOne", text: "" },
    { bgImg: "bg-carouselTwo", text: "" },
    { bgImg: "bg-carouselThree", text: "" },
    { bgImg: "bg-carouselFour", text: "" },
  ];
  return (
    <main className={`bg-[#fdfdfd0d]`}>
      <Carousel images={CarouselData} />
      <div className="py-[4rem] ">
        <p className="text-center font-bold md:text-[2rem] text-[1.5rem]">
          Who we are
        </p>
        <div className="flex justify-center w-full">
          <p className="text-center max-w-[25rem] md:max-w-[45rem] md:text-[1.8rem] text-[1.2rem]">
            We are a leading Cooperative Society in Nigeria with a world-class
            standard, impacting lives positively for a better future.
          </p>
        </div>
        <div className="p-12">
          {whoWeAreSectionData.map((data) => (
            <div
              key={data.text}
              className={`flex ${
                data.isReversed
                  ? "md:flex-row-reverse flex-col"
                  : "flex-col md:flex-row"
              } justify-between items-center mb-24 text-[1rem] md:gap-0 gap-6 md:text-[1.5rem]`}
            >
              <div className="max-w-[40rem]">
                <p className="font-semibold mb-2">{data.title}</p>
                <p className="">{data.text}</p>
              </div>
              <div>
                <Image src={data.img} alt={data.text} />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <p className="text-center font-bold md:text-[2rem] text-[1.5rem]">
          Our Products and Services
        </p>
        <div className="mb-16 flex items-center justify-center">
          <div className="mx-6 flex flex-col justify-center mobile:grid mobile:gap-8 tab:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-12">
            {/* {CardContent.map((item, indx) => (
              <MiniCard
                key={indx}
                content={item.content}
                heading={item.heading}
                icon={item.icon}
              />
            ))} */}
          </div>
        </div>
      </div>
    </main>
  );
}
