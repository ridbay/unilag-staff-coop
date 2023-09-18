import Image, { StaticImageData } from "next/image";

interface ManagementComponentsProps {
    handleChange: () => void;
    image: StaticImageData;
    name: string;
    position: string;
}

const ManagementComponents: React.FC<ManagementComponentsProps> = ({handleChange, name, image, position}) => {

  return (
    <button className="cursor-pointer w-[15rem] h-[20rem]" onClick={handleChange}>
      <div className="border-2 border-black w-[15rem] h-[15rem]">
        <Image
          src={image}
          alt={name}
          className=" w-[15rem] h-[15rem] object-center bg-no-repeat object-cover "
        />
      </div>
      {/* <Image src="https://robohash.org/gg" alt="name" width={70} height={70} /> */}
      <div className="text-center text-lg">
        <p className="mb-3 font-bold text-[#F6B765]">{position}</p>
        <p className="">{name}</p>
      </div>
    </button>
  );
};

export default ManagementComponents;
