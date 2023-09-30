import { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { HiMiniMinusSmall } from "react-icons/hi2";

interface FaqItemProps {
  question: string;
  answer: string | React.ReactNode;
}

const FaqItem: React.FC<FaqItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <div className="flex justify-between items-center font-bold text-[1.2rem] border border-[#00000031] p-5 mt-5">
        <h1 className="">{question}</h1>
        <button onClick={() => setIsOpen((prevState) => !prevState)}>
          {!isOpen ? <AiOutlinePlus /> : <HiMiniMinusSmall />}
        </button>
      </div>
      {typeof answer === "string" ? (
        <p
          className={`faq ${
            isOpen ? "open  py-5 mb-1" : "close"
          } border border-[#00000031] px-5`}
        >
          {answer}
        </p>
      ) : (
        <div
          className={`faq ${
            isOpen ? "open  py-5 mb-1" : "close"
          } border border-[#00000031] px-5`}
        >
          {answer}
        </div>
      )}
    </>
  );
};

export default FaqItem;
