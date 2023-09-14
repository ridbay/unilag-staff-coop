
import Image from "next/image";
import { StaticImageData } from "next/image";

// type Props = {
//   icon: ;
//   heading: string;
//   content: string;
// };

type CardProps = {
  image: StaticImageData;
  className: string;
  data: { heading: string; content: string }[] | any;
};
const MiniCard = ({ icon, heading, content }: any) => {
  return (
    <div className="twoColTable h-[350px] max-w-[300px] rounded-3xl border-2 border-slate-100 bg-white p-4">
      <div className="mb-4 flex justify-center">
        {icon}
      </div>
      <p className="mb-4 text-center text-[16px]">{heading}</p>
      <p>{content}</p>
    </div>
  );
};

export default MiniCard;