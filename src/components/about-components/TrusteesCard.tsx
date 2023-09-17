import { useState } from "react";

interface TrusteesCardProps {
    name: string;
    desc: string;
}

const TrusteesCard: React.FC<TrusteesCardProps> = ({name, desc}) => {
  const [isViewAll, setIsViewAll] = useState<boolean>(false);


  return (
    <div>
      <h2 className="font-bold text-[1.2rem]">{name}</h2>
      <div>
        <p className="inline">
          {!isViewAll && desc.split(" ").slice(0, 20).join(" ") + "..."}
        </p>
        {isViewAll && desc.split('   ').map((item, i)=>(<p className="mb-2" key={i}>{item}</p>))}
        <button onClick={() => setIsViewAll((prevState) => !prevState)} className="inline text-blue-300 cursor-pointer ml-1">
          {isViewAll ? "view less" : "view more"}.
        </button>
      </div>
    </div>
  );
};

export default TrusteesCard;
