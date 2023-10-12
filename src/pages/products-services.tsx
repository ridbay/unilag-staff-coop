import React from "react";

import ProductsCard from "@/components/ProductsCard";

interface ProductsAndServicesProps {}

const SERVICES = [
  {
    name: "Normal Loan",
    desc: `A registered member of the Society, whose deductions have been consistently remitted to the Society for a period of not less than twelve (12) months after registration, is eligible to apply for a ‘Normal Loan’ facility of NOT MORE THAN two times his/her Savings Balance. This is PROVIDED that the applicant’s salary, excluding overtime and all deductions, is able to repay back the Principal Amount and the ten percent (10%) Interest Rate within a maximum period of not more twenty-four (24) months. In addition, it is mandatory that after all deductions, there must be a minimum ‘Take Home’ of at least 1/3 (One-Third) of the gross pay. Similarly, applicants shall provide two (2) guarantors who must be members of the Society. In conclusion, the completed application form, which costs One Hundred and Fifty Naira Only (N150:00), payable to the bank, will have to be examined and approved by the Credit Committee in accordance with the relevant Bye-Laws guiding the granting of loans by the second Thursday of every month.
`,
  },
  {
    name: "HOUSEHOLD EQUIPMENT LOAN",
    desc: `A registered member of the Society, whose deductions have been consistently remitted to the Society for a period of not less than six (6) months after registration, is eligible to apply for a 'Household Equipment Loan' facility of NOT MORE THAN Five Hundred Thousand Naira Only (N500,000.00), nor can it be above the applicant’s Savings Balance as at the time of applying for such loan. This is also PROVIDED that the applicant’s salary, excluding overtime and all deductions, is able to repay back the Principal Amount and the ten percent (10%) Interest Rate within a maximum period of not more nine (9) months. In addition, it is mandatory that after all deductions there must be a minimum ‘Take Home’ of at least 1/3 (One-Third) of the gross pay. Similarly, applicants shall provide two (2) guarantors who must also be members of the Society. In conclusion, the completed application form, which costs One Hundred and Fifty Naira Only (N150:00), payable to the bank, will have to be examined and approved by the 'Household Equipment Loan' Committee, within five (5) working days, in accordance with the relevant Bye-Laws guiding the granting of loans.
`,
  },
  {
    name: "EMERGENCY LOAN",
    desc: "Loans treated before and after the mandatory credit committee meeting held every second Thursday of the month. Such loans attract a token as processing fee.",
  },
];

const PRODUCTS = [
  {
    name: "PERIODIC COMMODITY SALES",
    desc: "These are consumables provided to members (rice, vegetable oil, palm oil etc) at purchase price.",
  },
  {
    name: "AGM SALES",
    desc: "Products exhibited at the society's Annual General Meeting are supplied to interested members. The products are to be paid for over a period of 9months.",
  },
];

const ProductsAndServices: React.FC<ProductsAndServicesProps> = ({}) => {
  return (
    <section className="px-[1rem] md:px-[3rem] lg:px-[5rem]">
      <div>
        <h1 className="text-[2rem] font-semibold mb-[48px] text-center mt-[48px] flex flex-col justify-center items-center">
          <span>OUR SERVICES</span>
          <span className="block w-[5rem] h-1 bg-theme-color"></span>
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-col-3 gap-[3rem] lg:gap-[4rem]">
          {SERVICES.map((service, index) => (
            <ProductsCard key={index} {...service} />
          ))}
        </div>
      </div>
      <div className="mt-[7rem]">
        <h1 className="text-[2rem] font-semibold mb-[48px] text-center mt-[48px] flex flex-col justify-center items-center">
          <span>OUR PRODUCTS</span>
          <span className="block w-[5rem] h-1 bg-theme-color"></span>
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-col-3 gap-[3rem] lg:gap-[4rem]">
          {PRODUCTS.map((product, index) => (
            <ProductsCard key={index} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsAndServices;
