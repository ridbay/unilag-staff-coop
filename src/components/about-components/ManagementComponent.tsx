
interface ManagementComponentsProps {
    handleChange: () => void;
    image?: string;
    name: string;
}

const ManagementComponents: React.FC<ManagementComponentsProps> = ({handleChange, name}) => {

  return (
    <button
      className="flex gap-5 items-center cursor-pointer"
      onClick={handleChange}
    >
      <div className="w-[60px] h-[60px] rounded-full bg-blue-400 gap-2"></div>
      {/* <Image src="https://robohash.org/gg" alt="name" width={70} height={70} /> */}
      <h3 className="font-bold text-[1.3rem] mt-3">
        {name}
      </h3>
    </button>
  );
};

export default ManagementComponents;
