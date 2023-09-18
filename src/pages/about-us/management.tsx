import { useState, useEffect } from "react";

import ManagementComponents from "@/components/about-components/ManagementComponent";
import AboutLayout from "@/components/layouts/AboutLayout";
import President from "../../../public/management/DR A A ADEBAYO - PRESIDENT (1).png"
import VicePresident from "../../../public/management/ENGR. OLAWALE JOEL - VICE PRESIDENT.png"
import Treasurer from "../../../public/management/MR A I OLALEYE - TREASURER.png"
import GenSec from "../../../public/management/MR. FELIX O AKEJU - GENERAL SECRETARY.png"
import AssGenSec from "../../../public/management/MRS O OLANREWAJU - ASSISTANT GENERAL SECRETARY.png"
import ExOfficio from "../../../public/management/MR. A S TAIWO - EX-OFFICIO.png"
import Member from "../../../public/management/MR T A ADEYEMI - MEMBER.png"
import FinSec from "../../../public/management/MR. E O OLUYELU - FINANCIAL SECRETARY.png"
import CreditChairman from "../../../public/management/MR GODSON NWANKWO - CHAIRMAN, CREDIT COMMITTEE.png"
import Elder1 from "../../../public/management/ELDER O AJAO - ELDER IN COUNCIL.png"
import Elder2 from "../../../public/management/ENGR. JOHNSON A. AKINWANDE - ELDER IN COUNCIL.png"
import Elder3 from "../../../public/management/MR. BEN OLAOYE - ELDER IN COUNCIL.png"
import Elder4 from "../../../public/management/MR K O KOLAWOLE - ELDER IN COUNCIL.png"
import Elder5 from "../../../public/management/ENGR. JOHNSON A AJIBOYE - ELDER IN COUNCIL.png"
import Modal from "../../components/Modal";
import Image, { StaticImageData } from "next/image";

const MANAGEMENTS = [
  {
    name: "DR A A ADEBAYO",
    position: "President",
    img: President,
    desc: "",
  },
  {
    name: "ENGR. OLAWALE JOEL",
    position: "Vice President",
    img: VicePresident,
    desc: "",
  },
  {
    name: "MR E O OLUYELU",
    position: "Financial Secretary ",
    img: FinSec,
    desc: "",
  },
  {
    name: "MR FELIX O AKEJU",
    position: "General Secretary",
    img: GenSec,
    desc: "",
  },
  {
    name: "MR GODSON NWANKWO",
    position: "Chairman Credit Committee",
    img: CreditChairman,
    desc: "",
  },
  {
    name: "MR A I OLALEYE",
    position: "Treasurer",
    img: Treasurer,
    desc: "",
  },
  {
    name: "MRS O OLANREWAJU",
    position: "Assistant General Secetary",
    img: AssGenSec,
    desc: "",
  },
  {
    name: "ELDER O AJAO",
    position: "Elder in Council",
    img: Elder1,
    desc: "",
  },
  {
    name: "ENGR. JOHNSON A. AKINWANDE",
    position: "Elder in Council",
    img: Elder2,
    desc: "",
  },
  {
    name: "MR BEN OLAOYE",
    position: "Elder in Council",
    img: Elder3,
    desc: "",
  },
  {
    name: "MR K O KOLAWOLE",
    position: "Elder in Council",
    img: Elder4,
    desc: "",
  },
  {
    name: "MRS JOHNSON A. AJIBOYE",
    position: "Elder in Council",
    img: Elder5,
    desc: "",
  },
  {
    name: "MR A S TAIWO",
    position: "EX OFFICIO",
    img: ExOfficio,
    desc: "",
  },
  {
    name: "MR T A ADEYEMI",
    position: "Management Member",
    img: Member,
    desc: "",
  },
];

const Management = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const [activeProfile, setActiveProfile] = useState<{
    name: string;
    desc: string;
    image: StaticImageData | string;
    position: string;
  }>({ name: "", desc: "" , image: "", position: ""});

  const handleClose = (e: any) => {
    if (isOpen) {
      setIsOpen(false);
    }
  };

  return (
    <>
      {isOpen && (
        <Modal handleChange={() => handleClose(false)}>
          <div
            className="flex h-[calc(100vh_-_100px)] w-full"
          >
            <div className="w-2xl fixed z-30 mx-[10%] my-0 flex max-h-[calc(100dvh_-_1rem)] bg-white md:mx-[20%]">
              <div className="hidden basis-[50%] pr-12 md:block">
                <Image
                  src={activeProfile.image}
                  alt={activeProfile.name}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="max-h-[calc(100vh_-_12rem)] basis-[100%] overflow-y-auto py-8 pl-6  pr-4 md:basis-[50%] md:pl-0">
                <p className="pb-3 text-[18px] font-bold text-[#F6B765] md:text-[1.38rem]">
                  {activeProfile.position}
                </p>
                <p className="pb-6 text-[26px] font-bold text-black md:text-[1.38rem]">
                  {activeProfile.name}
                </p>
                {activeProfile.desc}
              </div>
            </div>
          </div>
        </Modal>
      )}
      <AboutLayout>
        <div>
          <h1 className="text-[2rem] font-semibold pl-4">Our Management</h1>
          <div className="flex justify-center w-full h-full">
            <div className="mt-[3rem] grid xl:grid-cols-4 md:grid-cols-2 gap-[2rem]">
              {MANAGEMENTS.map((management, index) => (
                <ManagementComponents
                  key={index}
                  {...management}
                  handleChange={() => {
                    setActiveProfile({
                      name: management.name,
                      desc: management.desc,
                      image: management.img,
                      position: management.position
                    });
                    setIsOpen(true);
                  }}
                  image={management.img}
                />
              ))}
            </div>
          </div>
        </div>
      </AboutLayout>
    </>
  );
};

export default Management;
