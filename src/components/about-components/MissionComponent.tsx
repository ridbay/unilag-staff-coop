interface MissionComponentProps {
  name: string;
  description: string;
}

const MissionComponent: React.FC<MissionComponentProps> = ({
  name,
  description,
}) => {
  return (
    <div className="mission_component">
      <h2 className="font-medium text-[1.5rem]">{name}</h2>
      <p className="col-span-2 whitespace-pre-line">{description}</p>
    </div>
  );
};

export default MissionComponent;
