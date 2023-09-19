import FaqItem from "@/components/FaqItem";
import Link from "next/link";

const ALL_FAQS = [
  {
    question: "What do we do?",
    answer:
      "We are a Cooperative Society registered under the Lagos State Ministry of Commerce and Cooperatives to engage in cooperative activities such as granting of Loans to qualified members of the Society.",
  },
  {
    question: "What are the benefits of joining the society?",
    answer:
      "There are several benefits of joining the Society; which include obtaining a loan of up to twice the amount of savings a member has with the Society; affording members’ access to loan/credit without collateral; competitive low-interest rates; and helping members plan their finances and therefore meet their goals for the future.",
  },
  {
    question: "Who is eligibile to be a member of the Society?",
    answer:
      "A staff member of the University of Lagos, on permanent appointment or whose appointment has been regularised by the University’s Governing Council, can become a member of the Society.",
  },
  {
    question: "How do I become a member?",
    answer: (
      <div>
        <p>
          One can become a member by sending an application letter, through an
          existing member of the Society. The letter should be addressed to:
        </p>
        <p>Alternatively, a letter can be sent to:</p>
        <div className="mt-3">
          <h3 className="font-bold">The General Secretary,</h3>
          <p>Unique Unilag Staff Multipurpose Cooperative Society Limited,</p>
          <p>Ground Floor, Room 001, HRDC Building, Akin Adesola Road,</p>
          <p>University of Lagos, Akoka,</p>
          <p>Yaba, Lagos.</p>
        </div>
      </div>
    ),
  },
  {
    question: "Can I see the Bye-Law before joining?",
    answer: (
      <div>
        Yes you can. Click{" "}
        <Link href="/" className="text-theme-color">
          here
        </Link>{" "}
        or Go to <strong>RESOURCES &gt; BYE-LAW</strong>.
      </div>
    ),
  },
  {
    question: "Is there any fee to be paid before joining?",
    answer: (
      <p>
        Yes, a non-refundable registration fee of{" "}
        <strong>Ten Thousand Naira Only (N10,000)</strong> must be paid to the
        bank after application letter has been approved.
      </p>
    ),
  },
  {
    question: "How do I get to know my balances?",
    answer:
      "Every member is given a Passbook Number and a copy of the Society’s Passbook upon completion of registration. All transactions are thereafter recorded inside the Passbook. However, in the not too far distance, members will be able to check their balances through this platform.",
  },
  {
    question: "Can I withdraw my membership?",
    answer: (
      <p>
        Yes. A person ceases to be a member of the Society if such a person
        writes formally to the President requesting for{" "}
        <strong>‘withdrawal of membership’</strong> from the Society.
        Subsequently, the University will stop the member’s deductions to the
        Society.
      </p>
    ),
  },
  {
    question: "When do I qualify for a loan?",
    answer: (
      <div>
        <p className="mb-4">
          A co-operator is qualified to access two times his/her savings balance
          as a loan after one year of joining the society, with consistent
          deductions. Otherwise, he/she is only entitled to an amount equal to
          his/her savings balance as a loan.
        </p>
        <p>
          Nevertheless, please note that all loan applications are subject to
          applicant’s ability to pay-back within the maximum repayment period
          for the specific type of loan being applied for, without taking into
          consideration overtime payment.
        </p>
      </div>
    ),
  },
  {
    question: "How do I apply for loan?",
    answer: (
      <p>
        After the collection of loan application forms, you are required to
        appropriately fill all necessary sections of the specific loan form, and
        also get two financial members of the society to fill their part as
        sureties, then submit the already filled loan form, by hand, at the
        Secretariat. You may as well scan and send it to the cooperative’s email
        address:<strong>contact@uniqueunilagstaffcoop.org</strong>.
      </p>
    ),
  },
  {
    question: "Where can I obtain loan form?",
    answer: (
      <p>
        Loan forms can be obtained at the Secretariat, Ground floor, Room 001,
        HRDC Building, University of Lagos, Akoka, Yaba, Lagos upon the payment
        of One Hundred and Fifty Naira (N150), at any bank of choice on Campus.
        You can also download loan form on this website (
        <Link href="/resources/downloads" className="text-theme-color">
          here
        </Link>
        ) and return same to the Secretariat with your payment teller of One
        Hundred and Fifty Naira (N150).
      </p>
    ),
  },
  {
    question: "How long does it take for loan applied for to be ready?",
    answer: (
      <div>
        <p className="mb-4">
          It takes five (5) working days for application for all loan types to
          be ready. However, members of the Credit Committee meet every Second
          Thursday of every Month to processes Normal Loan Application, while
          Household Equipment Loan is processed every Friday, regardless of when
          it is submitted.
        </p>
        <p>
          Nevertheless, there is room for an ‘Emergency’ Loan Application upon
          the payment of N500 at any of the bank’s branches on Campus.
        </p>
      </div>
    ),
  },
  {
    question:
      "Is there interest paid on loan, and what is the interest rate charge?",
    answer:
      "Yes, there's interest paid on loan. The Society charges 10% interest rate on all loans (Normal and Household Equipment Loan) and on commodity sales as well.",
  },
  {
    question: "What is the repayment period?",
    answer:
      "The repayment period for Normal Loan is a maximum of twenty-four (24) months, while that of Household Equipment Loan is nine (9) months. The deduction for all commodity sales is four (4) months.",
  },
  {
    question: "Can I make cash deposit into my savings?",
    answer:
      "Yes, members can deposit cash into their savings accounts for the purpose of increasing their savings.",
  },
  {
    question: "Can I use the deposited cash to access loan immediately?",
    answer:
      "No. Deposits into the savings account can only be used to assess loan after six months of payment. However, please note that loan applications are subject to applicant’s ability to pay-back within the stipulated maximum repayment period for the type of loan being applied, without taking into consideration overtime payment.",
  },
  {
    question: "What amount can I get as loan?",
    answer:
      "Members can get up to 200% of their savings balance as loan once they qualify for it i.e. if you have 50k, you can get 100k as a loan, provided applicant can pay-back within the stipulated maximum repayment period for the type of loan being applied, without taking into consideration overtime payment. However, every loan must be guaranteed by two (2) financial member(s) of the cooperative.",
  },
  {
    question: "How do I get my money when it is ready?",
    answer:
      "Your accounts will be credited through e-payment and you will be notified by your bank through SMS alert.",
  },
  {
    question:
      "If I pay up my loan through cash deposit, can I apply immediately?",
    answer:
      "Yes, you are allowed to apply for a fresh loan as soon as you offset the former loan collected.",
  },
  {
    question: "How do I increase my monthly contribution?",
    answer:
      "Please visit the secretariat directly; give them your data and amount you intend to increase to.",
  },
  {
    question: "How much dividends will I receive?",
    answer:
      "Dividend is dependent on the Surplus declared during the accounting period (January-December). However, dividend due to each member is based on the savings balance of the particular member and the amount of loan repaid during the year under review.",
  },
  {
    question:
      "Is there any form of accountability of the activities of the Cooperative?",
    answer:
      "Yes. The management committee renders accounts of the affairs of the cooperative at every annual general meeting, with the representative of the Lagos State Ministry of Commerce, Industry and Cooperative in attendance.",
  },
  {
    question: "Who do I contact when I have complaint?",
    answer: (
      <div>
        <p>
          Call the Secretariat through this number:{" "}
          <strong>0807 726 2847</strong>.
        </p>
        <p>Alternatively, a letter can be sent to:</p>
        <div className="mt-3">
          <h3 className="font-bold">The General Secretary,</h3>
          <p>Unique Unilag Staff Multipurpose Cooperative Society Limited,</p>
          <p>Ground Floor, Room 001, HRDC Building, Akin Adesola Road,</p>
          <p>University of Lagos, Akoka,</p>
          <p>Yaba, Lagos.</p>
        </div>
      </div>
    ),
  },
];

const FAQ = () => {
  return (
    <section className="px-[1rem] md:px-[3rem]">
      <h1 className="text-[2rem] font-semibold mb-[48px] text-center mt-[48px] flex flex-col justify-center items-center">
        <span>FAQ</span>
        <span className="block w-[3rem] h-1 bg-theme-color"></span>
      </h1>
      <div className="">
        {ALL_FAQS.map((faq, index) => (
          <FaqItem key={index} {...faq} />
        ))}
      </div>
    </section>
  );
};

export default FAQ;
