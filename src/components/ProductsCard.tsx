import React from "react";

interface ProductsCardProps {
  name: string;
  desc: string;
}

const ProductsCard: React.FC<ProductsCardProps> = ({ name, desc }) => {
  return (
    <div className="flex flex-col gap-2 border border-[#00000009] rounded-[1rem] p-[2rem] shadow-xl">
      <h2 className="font-bold text-[1.2rem]">{name}</h2>
      <p className="leading-[2] mt-3">{desc}</p>
    </div>
  );
};

export default ProductsCard;
