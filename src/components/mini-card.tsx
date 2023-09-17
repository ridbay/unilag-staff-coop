
import Image from "next/image";
import { StaticImageData } from "next/image";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import { SvgIconTypeMap } from "@mui/material/SvgIcon/SvgIcon";
import { IconType } from "react-icons/lib/esm/iconBase";

type Props = {
  icon: StaticImageData;
  heading: string;
  content: string;
};

type CardProps = {
  image: StaticImageData;
  className?: string;
  data: string;
};
const MiniCard = ({ icon, heading, content }: Props) => {

  return (
    <div className="twoColTable h-[350px] max-w-[300px] rounded-3xl border-2 border-slate-100 bg-white p-4">
      <div className="mb-4 flex justify-center">
        <Image src={icon} alt="icons" className="w-[6rem] h-[6rem]"/>
      </div>
      <p className="mb-4 text-center text-[18px] font-semibold">{heading}</p>
      <p>{content}</p>
    </div>
  );
};

export default MiniCard;

export const MiniCardWithImage = ({ image, data, className }: CardProps) => {
  return (
    <div className="flex max-w-[24rem] shadow-md flex-col gap-2 overflow-hidden rounded-xl pb-8">
      <div className="object-cover">
        <Image
          src={image}
          alt={data}
          className="h-[12rem] object-cover w-full"
        />
      </div>
      <div className={`mx-6 ${className} grid place-content-center pt-6 h-[2rem] text-[18px]`}>
        {data}
      </div>
    </div>
  );
};