import Image, { StaticImageData } from "next/image";
import { Inter } from "next/font/google";
import ModernCarousel from "@/components/ModernCarousel";
// Image paths in the public directory
const heroImg1 = "/imgs/heroImg1.png";
const heroImg1Mobile = "/imgs/heroImg1Mobile.png";
const heroImg2 = "/imgs/heroImg2.jpg";
const heroImg3 = "/imgs/heroImg3.jpg";
const heroImg5 = "/imgs/heroImg5.jpeg";
import Typography from "@mui/material/Typography";
import { whoWeAreSectionData } from "@/data/HomeData";
import MiniCard, { MiniCardWithImage } from "@/components/mini-card";
import { MembersBenefits } from "@/data/HomeData";
import { CardContent } from "@/data/HomeData";
import Link from "next/link";
import MarqueeSlide from "@/components/MarqueeSlide";
import Modal from "@/components/Modal";
import React, { useEffect, useState } from "react";
import { FileDownload } from "./resources/downloads";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const CarouselData = [
    {
      desktop: heroImg1,
      mobile: heroImg1Mobile,
      text: ""
    },
    {
      desktop: heroImg2,
      text: ""
    },
    {
      desktop: heroImg5,
      text: ""
    }
  ];

  useEffect(() => {
    setIsModalOpen(true)
  }, [])

  return (
    <main className={`bg-[#fdfdfd0d] mb-12`}>
      {
        isModalOpen && (
          <Modal isOpen={isModalOpen} handleChange={() => setIsModalOpen(false)}>
            <div className="modal-content">
              <button className="close-button" onClick={() => { setIsModalOpen(false); console.log("sdsds") }}>Close</button>

              {/* <iframe className="w-full h-full" 
                  src="/pdf/Unique_26th.pdf"
             style={{width: '100%', height: '80vh', padding: '2vh !important'}}>
          </iframe> */}
              <div style={{ position: 'relative', width: '100%', height: '70vh', margin: 'auto' }}>
                <Image
                  src="/imgs/agm_banner2.jpg"
                  alt="agm_sub_banner"
                  fill
                  style={{
                    objectFit: 'cover',
                    objectPosition: 'center'
                  }}
                  priority
                />
              </div>
              <button style={{ margin: '5px', width: '50%' }}>
                <FileDownload downloadLink="/pdf/Unique_26th.pdf" message="Download AGM Report" />
              </button>
            </div>
          </Modal>
        )
      }

      <ModernCarousel
        images={CarouselData}
        autoPlay={true}
        interval={5000}
      />
      <MarqueeSlide />
      <div className="py-[4rem] ">
        <div className="md:pl-[4rem] pl-[2rem] mb-12">
          <p className="text-[1.5rem] md:text-[2rem] font-semibold">Membership</p>
          <p className="max-w-[50rem] text-[1rem] md:text-[1.5rem]">
            Membership is open to any staff member of the University of Lagos,
            on permanent appointment or whose appointment has been regularised
            by the University’s Governing Council.
          </p>
          <Link href="/faqs">
            <button className="bg-theme-color px-6 py-4 rounded-md hover:bg-white hover:border-2 hover:border-theme-color scroll-smooth hover:text-theme-color transition-all duration-700 ease-in-out text-white mt-4">
              Read more
            </button>
          </Link>
        </div>
        <p className="text-center font-bold md:text-[2rem] text-[1.5rem]">
          Who we are
        </p>
        <div className="flex justify-center w-full">
          <p className="text-center max-w-[25rem] md:max-w-[45rem] md:text-[1.4rem] text-[1rem]">
            We are a leading Cooperative Society in Nigeria with a world-class
            standard, impacting lives positively for a better future.
          </p>
        </div>
        <div className="p-12">
          {whoWeAreSectionData.map((data) => (
            <div
              key={data.text}
              className={`flex ${data.isReversed
                ? "lg:flex-row-reverse flex-col"
                : "flex-col lg:flex-row"
                } justify-between items-center mb-24 text-[1rem] md:gap-0 gap-6 md:text-[1.5rem]`}
            >
              <div className="max-w-[40rem] ">
                <p className="font-semibold mb-2">{data.title}</p>
                <p className="">{data.text}</p>
              </div>
              <div className="lg:mt-0 mt-8">
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
        <div className="my-12 flex items-center justify-center">
          <div className="mx-6 flex flex-col justify-center sm:grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-12">
            {CardContent.map((item, indx) => (
              <MiniCard
                key={indx}
                content={item.content}
                heading={item.heading}
                icon={item.icon}
              />
            ))}
          </div>
        </div>
        <div className="mb-16 mt-8">
          <p className="text-center font-bold md:text-[2rem] text-[1.5rem]">
            BENEFITS
          </p>
          <div className="my-12 flex items-center justify-center">
            <div className="mx-6 flex flex-col justify-center sm:grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-12">
              {MembersBenefits.map((benefit) => (
                <MiniCardWithImage
                  key={benefit.data}
                  data={benefit.data}
                  image={benefit.image}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
