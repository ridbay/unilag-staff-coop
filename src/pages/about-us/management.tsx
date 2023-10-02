import { useState, useEffect } from "react";

import ManagementComponents from "@/components/about-components/ManagementComponent";
import AboutLayout from "@/components/layouts/AboutLayout";
import President from "../../../public/management/DR A A ADEBAYO - PRESIDENT.jpg";
import VicePresident from "../../../public/management/ENGR. OLAWALE JOEL - VICE PRESIDENT.jpg";
import Treasurer from "../../../public/management/MR A I OLALEYE - TREASURER.jpg";
import GenSec from "../../../public/management/MR. FELIX O AKEJU - GENERAL SECRETARY.jpg";
import AssGenSec from "../../../public/management/MRS O OLANREWAJU - ASSISTANT GENERAL SECRETARY.jpg";
import ExOfficio from "../../../public/management/MR. A S TAIWO - EX-OFFICIO.jpg";
import ExOfficio1 from "../../../public/management/Mrs-Abeke-Olanrewaju-Adeoye-Ex-Officio.jpg"
import Member from "../../../public/management/MR T A ADEYEMI - MEMBER.jpg";
import FinSec from "../../../public/management/MR. E O OLUYELU - FINANCIAL SECRETARY.jpg";
import CreditChairman from "../../../public/management/MR GODSON NWANKWO - CHAIRMAN, CREDIT COMMITTEE.jpg";
import Elder1 from "../../../public/management/ELDER O AJAO - ELDER IN COUNCIL.jpg";
import Elder2 from "../../../public/management/ENGR. JOHNSON A. AKINWANDE - ELDER IN COUNCIL.jpg";
import Elder3 from "../../../public/management/MR. BEN OLAOYE - ELDER IN COUNCIL.jpg";
import Elder4 from "../../../public/management/MR K O KOLAWOLE - ELDER IN COUNCIL.jpg";
import Elder5 from "../../../public/management/ENGR. JOHNSON A AJIBOYE - ELDER IN COUNCIL.jpg";
import SupervisoryChairman from "../../../public/imgs/Prof-Sunday-Ojolo-chairman-supervisory-commitee.jpg";
import IPP from "../../../public/imgs/Ademola-Yekeen-Adewunmi-ipp.jpg";
import Member2 from "../../../public/imgs/Dr-(Barr)-Idriss-Odekunle.jpg";
import Member3 from "../../../public/imgs/Pharm-Kenneth-Oladipupo.jpg";
import Member4 from "../../../public/management/Dr.-(Mrs)-Adejoke-Osibote-management-committee.jpg"
import Modal from "../../components/Modal";
import Image, { StaticImageData } from "next/image";

const MANAGEMENTS = [
  {
    name: "DR A A ADEBAYO",
    position: "President",
    img: President,
    desc: `Dr. Afolabi Abiodun ADEBAYO is the President of Unique Unilag Staff Cooperative Multipurpose Society Limited. He was elected President at the 2022 Annual General Meeting (AGM) of the Society. Before his being elected as the President, he had previously been appointed twice as a Member, Credit Committee (2006-2008 and 2008-2010). Furthermore, he had also been elected twice, as the Chairman, Credit Committee of the Society, from 2010-2012 and 2012-2014, and as Vice President from 2018 – 2022.
    Dr. Adebayo has served the University of Lagos Community at several forums, especially in his capacity as a Medical Doctor. He was elected a member of the Housing Committee, University of Lagos from 2016-2018. He was appointed Chairman, Medical Centre Health week Committee from 2014-2022.`,
  },
  {
    name: "ENGR. OLAWALE JOEL",
    position: "Vice President",
    img: VicePresident,
    desc: "",
  },
  {
    name: "MR FELIX O AKEJU",
    position: "General Secretary",
    img: GenSec,
    desc: `Felix Oluwatuyi, AKEJU is the General Secretary of Unique Unilag Staff Cooperative
    Multipurpose Society Limited, October 2022 till date. 
    He served as the Assistant General Secretary of Unique Coop. Society, 2018 to 2022.
    He had previously served as the Master of Ceremony and Member of Annual General Meeting Committee of Unique Coop. Society.
    Felix Oluwatuyi, AKEJU, M.Ed. in Educational Administration and Planning, 2004; Certificate Course in Basic Computer Studies, 2000; Diploma Certificate Communicative Methods, 1998; National Youth Service Corps Certificate, 1996; B.A.Ed., 1994; N.C.E., 1991`,
  },
  {
    name: "MR A I OLALEYE",
    position: "Treasurer",
    img: Treasurer,
    desc: `Mr. Adebayo OLALEYE is the Treasurer of Unique Unilag Staff Cooperative Multipurpose Society Limited. He was elected Treasurer at the 2022 Annual General Meeting (AGM) of the Society. Before he was elected as the Treasurer, he had also been elected as the Financial Secretary, of the Society, from 2018-2022, and served in various Committees.`,
  },
  {
    name: "Mr Ademola Yekeen Adewuyi",
    position: "Immediate Past President",
    img: IPP,
    desc: `Adewuyi Yekeen Ademola is the Immediate Past President of the Unique Unilag CMS,Ltd.He has been an Elected Co-operator,virtually in all the Executive Capacities Positions of the Cooperative Movement Activities in the Society. He holds HND in Accountancy and Finance, Bachelor of Science Degree in Accounting, Master of Business Administration, Fellow Chartered Institute of Loan and Risk Management and Certified Member of National Accountants of Nigeria (CNA).
    He is the current Vice President of the Lagos mainland Multipurpose Cooperative Union and the appointed Chairman by the LASCOFED, Membership Drive Committee, Mainland Area. Adewuyi Yekeen Ademola is a recipient of the "Most Outstanding Cooperative Leader Award "International Cooperative Day,2023.This followed the outstanding contributions to the development of the Cooperative Movement of the Lagos State.`,
  },
  {
    name: "MR E O OLUYELU",
    position: "Financial Secretary ",
    img: FinSec,
    desc: "",
  },
  {
    name: "MRS O OLANREWAJU",
    position: "Assistant General Secetary",
    img: AssGenSec,
    desc: "",
  },
  {
    name: "MR GODSON NWANKWO",
    position: "Chairman Credit Committee",
    img: CreditChairman,
    desc: "",
  },
  {
    name: "Prof Ojolo Sunday",
    position: "Chairman Supervisory Committee",
    img: SupervisoryChairman,
    desc: "",
  },
  {
    name: "MR T A ADEYEMI",
    position: "Management Member",
    img: Member,
    desc: "",
  },
  {
    name: "Dr (barr) Idris Odekunle",
    position: "Management Member",
    img: Member2,
    desc: `Dr. Idris Odekunle is a law lecturer in the Department of Private and Property Law, Faculty of Law, University of Lagos. He got his LL.B. Degree (Second Class Upper) from the University of Lagos in 1996. He was a winner of the University of Lagos Best Student and University Scholar Award in 1994/1995 Academic Session. He was called to the Nigerian Bar in 1998. He obtained his LL.M from Obafemi Awolowo University, Ile- Ife in 2004 and further acquired another LL.M. from the University of London in 2012. He concluded his Ph.D. in Private and Property Law from University of Lagos, in 2022. He is a Fellow of the Chartered Institute of Taxation of Nigeria since 2011, became an Associate of Institute of Chartered Secretaries and Administrators of Nigeria (ICSAN) in 2022 and an Associate of the Nigerian Institute of Management in 2003. He passed the Associateship Examinations of the Chartered Institute of Arbitrators (UK) in 2005. He has over 25 years of cognate experience spanning through active legal practice, corporate experience, and lecturing. He was Legal Counsel in the Law Firm of G. Elias & Co of No. 5, Broad Street Lagos between 1999-2003 and a Manager in the Legal Services Department of the UACN Plc of No. 1/5, Odunlami Street Lagos from 2004-2011 when he resigned to set up his Legal Practice (Acme Solicitors) and, in addition, took up lecturing appointment at the University of Lagos in the same year. He has since then to date been combining legal practice with lecturing.`,
  },
  {
    name: "Pharm Kenneth Oladipupo Ogunjuyigbe",
    position: "Management Member",
    img: Member3,
    desc: "",
  },
  {
    name: "Dr. (Mrs) Adejoke Osibote",
    position: "Management Member",
    img: Member4,
    desc: "",
  },
  {
    name: "MR A S TAIWO",
    position: "EX OFFICIO",
    img: ExOfficio,
    desc: `Alabi Sunday TAIWO was the Treasurer of Unique Unilag Staff Multipurpose Cooperative Society Limited, a trustee and Member of the Management Committee of the Society. 
    He was elected as the financial secretary (2014-2018) and Treasurer (2018-2022) .He has also served the University of Lagos Community in various capacities. 
    Taiwo served the University of Lagos in various departments in his professional capacity as an accountant: 
    a. Head of account unit University of Lagos Bookshop – 2005 -2013
    b. Head of account unit, University of Lagos Consult limited  - 2013 -2017
    c. Chief accountant and Head of account unit, University Research Management Office – 2017 to date.
    d. Member of Management, University of Lagos Bursary
    Taiwo holds a Bachelor’s of Science (B.Sc.) Degree, from the prestigious University of Lagos. He had been an Associate Chartered Account (ACA), Institute of Chartered Accountant of Nigeria (ICAN), since 2007.
    He is presently serving the University of Lagos as head of account at the Research Management office.
    He is happily married with three children.`,
  },
  {
    name: "Mrs Abeke Olanrewaju Adeoye",
    position: "EX OFFICIO",
    img: ExOfficio1,
    desc: `Abeke Olanrewaju ADEOYE  was the Immediate Past General Secretary, Member, Management Committee of Unique Unilag Staff Multipurpose Cooperative Society. She was enormously elected by members of the Society as the General Secretary at the 2018 Annual General Meeting (AGM) of the Society and served till 2022
    Mrs Adeoye has served the University of Lagos- in particular, and the Nigerian Nation- in general, in her capacity as a Sports Personality of repute, and also as a Trained and Certified Educationist of over thirty (30) years post qualification experience.
    To start with, Mrs Adeoye was the Head Mistress, Bellina Nursery and Primary School, Akoka, Lagos, for two years, where she coordinates the activities of the school, amongst other responsibilities. She once also worked at Our Lady of Apostle Schools, Yaba, Lagos; Government College, Surulere, Lagos; and at Nazareth Nursery and Primary School, Ijeshatedo, Surulere, Lagos, before joining the service of the University of Lagos Staff School.`,
  },
];

const Elders = [
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
];

const Management = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const [activeProfile, setActiveProfile] = useState<{
    name: string;
    desc: string;
    image: StaticImageData | string;
    position: string;
  }>({ name: "", desc: "", image: "", position: "" });

  const handleClose = (e: any) => {
    if (isOpen) {
      setIsOpen(false);
    }
  };

  return (
    <>
      {isOpen && (
        <Modal handleChange={() => handleClose(false)}>
          <div className="flex h-[calc(100vh_-_100px)] w-full">
            <div className="fixed z-30 my-0 flex max-h-[calc(100dvh_-_1rem)] bg-white">
              <div className="hidden basis-[55%] pr-12 md:block overflow-hidden">
                <Image
                  src={activeProfile.image}
                  alt={activeProfile.name}
                  className=" h-[calc(100vh_-_150px)] w-full object-cover"
                />
              </div>
              <div className="max-h-[calc(100vh_-_12rem)] basis-[100%] overflow-y-auto py-8 pl-6  pr-4 md:basis-[45%] md:pl-0">
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
        <div className="">
          <div className="mb-[6rem]">
            <h1 className="text-[2rem] font-semibold pl-4 mb-[2rem] text-center md:text-left">
              Our Management
            </h1>
            <div className="flex justify-center w-full h-full">
              <div className="mt-[1rem] grid xl:grid-cols-4 md:grid-cols-2 gap-[2rem]">
                {MANAGEMENTS.map((management, index) => (
                  <ManagementComponents
                    key={index}
                    {...management}
                    handleChange={() => {
                      setActiveProfile({
                        name: management.name,
                        desc: management.desc,
                        image: management.img,
                        position: management.position,
                      });
                      setIsOpen(true);
                    }}
                    image={management.img}
                  />
                ))}
              </div>
            </div>
          </div>
          <div>
            <h1 className="text-[2rem] font-semibold pl-4 mb-[2rem] text-center md:text-left">
              Our Elders
            </h1>
            <div className="flex justify-center w-full h-full">
              <div className="mt-[1rem] grid xl:grid-cols-4 md:grid-cols-2 gap-[2rem]">
                {Elders.map((management, index) => (
                  <ManagementComponents
                    key={index}
                    {...management}
                    handleChange={() => {
                      setActiveProfile({
                        name: management.name,
                        desc: management.desc,
                        image: management.img,
                        position: management.position,
                      });
                      setIsOpen(true);
                    }}
                    image={management.img}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </AboutLayout>
    </>
  );
};

export default Management;
