import FaqItem from "@/components/FaqItem";

const FAQ = () => {
  return (
    <section className="px-[3rem]">
      <h1 className="text-[2rem] font-semibold mb-[48px] text-center mt-[48px] flex flex-col justify-center items-center">
        <span>FAQ</span>
        <span className="block w-[3rem] h-1 bg-theme-color"></span>
      </h1>
      <FaqItem />
    </section>
  );
};

export default FAQ;
