import MissionComponent from "@/components/about-components/MissionComponent";
import AboutLayout from "@/components/layouts/AboutLayout";

const MISSION_DETAILS = [
  {
    name: "Vision Statement",
    description:
      "To be a leading Cooperative Society in Nigeria, of global relevanceand world-class standard, playing a major role in providingfinancial solutions (and otherwise) towards economic empowerment,sustainability and well-being of members, thereby impacting on their lives for a better future.",
  },
  {
    name: "Mission Statement",
    description:
      "To enhance qualitative life for members through cooperative multipurpose operations, timely provision of a readily available/easily accessible financial solutions and non-financial services such as educational upliftment, entrepreneurial development, advisory services and mortgage facilities leading to economic empowerment and freedom, poverty alleviation, social well-being and development, wealth creation and achievement of a brighter future.",
  },
  {
    name: "Major Operations",
    description:
      "The major operation of our Cooperative Society is the granting of Normal Loan, Emergency Loan, Equipment Loan, as well as returns on Investment in Fixed Deposit. In addition, the Society engages in periodic Commodity Sales of Bags of Rice, Gallons of Vegetable Oil, and other Fast Moving Consumer Goods (FMCG), amongst others, to members as a form of welfare package during festive periods.The Society also maintains a Group Life Insurance Policy with Standard Life Assurance Limited for all her members. The Net Asset of the Society, presently, is over One Billion Naira.",
  },
  {
    name: "Aims of the Cooperative Society",
    description:
      "The aim of the Society is reflected in our Vision and Mission Statements: “to be a leading Cooperative Society in Nigeria, of global relevance and world-class standard … that enhances qualitative life for members through cooperative multipurpose operations, through timely provision of a readily available/easily accessible financial solutions and non-financial services … leading to their social well-being and development, wealth creation and achievement of a brighter future”.",
  },
];

const Mission = () => {
  const allMissionDetails = MISSION_DETAILS.map((detail, index) => (
    <MissionComponent key={index} {...detail} />
  ));

  return (
    <AboutLayout>
      <div className="grid gap-5 md:gap-5">
        <>
          <h1 className="text-[2rem] font-semibold pl-4 mb-[3rem] text-center md:text-left">
            Mission & Vision
          </h1>
          {allMissionDetails}
          <div className="mission_component">
            <h2 className="font-medium text-[1.5rem]">
              Objectives of the Cooperative Society
            </h2>
            <ol className="col-span-2 list-decimal">
              <p className="font-semibold">
                As a staff-based co-operative society, our objectives are:
              </p>
              <li className="ml-2">
                To promote the economic interest of members;
              </li>
              <li className="ml-2">
                To provide facilities for regular monthly savings without such
                savings being removed from their control;
              </li>
              <li className="ml-2">
                To create funds to be lent to members at fair and reasonable
                interest rates for productive purposes;
              </li>
              <li className="ml-2">
                To provide any other measures designed on cooperative statutes
                and principles;
              </li>
              <li className="ml-2">
                To encourage among members the spirit and practice of savings,
                mutual help and self-help;
              </li>
              <li className="ml-2">
                To provide mortgage facility to members through generation of
                funds from shares, etc
              </li>
            </ol>
          </div>
        </>
      </div>
    </AboutLayout>
  );
};

export default Mission;
