import Image, { StaticImageData } from "next/image";
import { useState } from "react";

interface TrusteesCardProps {
  image: StaticImageData;
  name: string;
  desc: string;
}

const TrusteesCard: React.FC<TrusteesCardProps> = ({ image, name, desc }) => {
  const [isViewAll, setIsViewAll] = useState<boolean>(false);

  return (
    <div
      className={`mb-[3rem] gap-y-[1rem] flex flex-col lg:grid grid-cols-3 items-center ${
        isViewAll ? "lg:items-start" : ""
      } justify-center`}
    >
      <Image
        src={image}
        alt="profile-image"
        className=" w-[18rem] h-[18rem] object-center bg-no-repeat object-cover"
      />
      <div className="col-span-2">
        <h2 className="font-bold text-[1.2rem] text-center lg:text-left mb-[0.5rem]">
          {name}
        </h2>
        <div>
          <p className="inline">
            {!isViewAll && desc.split(" ").slice(0, 20).join(" ") + "..."}
          </p>
          {isViewAll &&
            desc.split("   ").map((item, i) => (
              <p className="mb-2" key={i}>
                {item}
              </p>
            ))}
          <button
            onClick={() => setIsViewAll((prevState) => !prevState)}
            className="inline text-blue-300 cursor-pointer ml-1"
          >
            {isViewAll ? "view less" : "view more"}.
          </button>
        </div>
      </div>
    </div>
  );
};

export default TrusteesCard;
