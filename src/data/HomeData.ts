import { StaticImageData } from "next/image"
import Mission from "../../public/imgs/mission.jpg"
import CreditScoreIcon from "@mui/icons-material/CreditScore";
import Vision from "../../public/imgs/vision.jpg"
import AlarmOnIcon from "@mui/icons-material/AlarmOn";
import Aim from "../../public/imgs/aims.jpg"
import LoyaltyIcon from "@mui/icons-material/Loyalty";
import Operations from "../../public/imgs/operations.jpg"

type whoWeAreSectionDataType = {
    text: string;
    title: string;
    img: StaticImageData;
    isReversed: boolean
}[]

export const whoWeAreSectionData: whoWeAreSectionDataType = [
  {
    title: "Our Mission",
    text: "To be a leading Cooperative Society in Nigeria, of global relevance and world-class standard, playing a major role in providing financial solutions (and otherwise) towards economic empowerment, sustainability and well-being of members, thereby impacting on their lives for a better future.",
    img: Mission,
    isReversed: false,
  },
  {
    title: "Our Vision",
    text: "To enhance qualitative life for members through cooperative multipurpose operations, timely provision of a readily available/easily accessible financial solutions and non-financial services such as educational upliftment, entrepreneurial development, advisory services and mortgage facilities leading to economic empowerment and freedom, poverty alleviation, social well-being and development, wealth creation and achievement of a brighter future.",
    img: Vision,
    isReversed: true,
  },
  {
    title: "Our Aims",
    text: "The aim of the Society is reflected in our Vision and Mission Statements.",
    img: Aim,
    isReversed: false,
  },
  {
    title: "Our Operations",
    text: "The major operation of our Cooperative Society is the granting of Normal Loan, Emergency Loan, Equipment Loan, as well as returns on Investment in Fixed Deposit. In addition, the Society engages in periodic Commodity Sales of Bags of Rice, Gallons of Vegetable Oil, and other Fast Moving Consumer Goods (FMCG), amongst others, to members as a form of welfare package during festive periods.",
    img: Operations,
    isReversed: true,
  },
];

export const CardContent = [
  {
    icon: AlarmOnIcon,
    heading: "Normal Loan",
    content:
      "Members are eligible to normal loan facility of not more than 200% of their saving balance with a maximum repayment period of 24 months.",
  },
  {
    icon: LoyaltyIcon,
    heading: "Household Equipment Loan",
    content:
      "“Members are eligible to equipment loan facility of not more than saving balance and NGN500,000 with a maximum repayment period of 9 months",
  },
  {
    icon: AlarmOnIcon,
    heading: "Emergency Loan",
    content:
      "Members are entitled to emergency loan. Applications are subject to applicants' ability to payback within the stipulated period.",
  },
  {
    icon: AlarmOnIcon,
    heading: "Commodity Sales",
    content:
      "Members are entitled to emergency loan. Applications are subject to applicants' ability to payback within the stipulated period.",
  },
  {
    icon: AlarmOnIcon,
    heading: "AGM Sales",
    content:
      "KAM is the only 100% indigenous steel and allied manufacturing company in Nigeria and produces a wide range of products like Nails, Binding Wire, Wire Mesh, Roofing Sheet, Stone Coated Roofing Tile.",
  },
  {
    icon: AlarmOnIcon,
    heading: "Advisory Services",
    content:
      "KAM is the only 100% indigenous steel and allied manufacturing company in Nigeria and produces a wide range of products like Nails, Binding Wire, Wire Mesh, Roofing Sheet, Stone Coated Roofing Tile.",
  },
];
