import FaqItem from "@/components/FaqItem";
import Link from "next/link";

const ALL_FAQS = [
  {
    question: "Who We Are: (UUSCMS)?",
    answer:
      "Unique Unilag Staff Cooperative Multipurpose Society with registration number 1114 of 1992, consisting of members of staff of University of Lagos, registered by law under the cooperative act Chapter C 15 of the laws of Lagos State of Nigeria.",
  },
  {
    question: "Why “Unique”?",
    answer:
      "The multiple award winning multipurpose society is interested in improving the welfare and the net-worth of its members, hence, activities of the society that concern members (loans: normal, equipment loan, housing scheme loan, commodities, e.t.c. are given expedite action by the management team.",
  },
  {
    question: "How do I become a member of “Unique”?",
    answer: (
      <>
        <p>
          Any member of staff of University of Lagos on permanent appointment or
          whose appointment has been regularised by the University Council is
          qualified to be a member of “Unique”.
        </p>
        <p>
          An application letter, directly or through an existing member of the
          society, to the General Secretary is required and a non-refundable
          registration fee is paid.
        </p>
      </>
    ),
  },
  {
    question: "What do I gain if I join “Unique”?",
    answer:
      "The benefits derivable include: access to loans; dividends from cooperative and shares, profit-sharing, democratic decision-making, and social support from fellow members. ",
  },
  {
    question: "Does Unique insure its members?",
    answer: "Yes, members are registered under life insurance scheme.",
  },
  {
    question: "When can I access loan?",
    answer:
      "Every member can access not more than their savings balance as loan after six months contribution and twice their savings balance as loan after 12 months contribution.",
  },
  {
    question: "What is the time frame for loan processing?",
    answer:
      "After the submission of duly completed forms, the loan will be attended to.",
  },
  {
    question:
      "What are the repayment periods and rates charges on Unique loans?",
    answer: (
      <>
        <p>
          <strong>Normal loan</strong> is repayable for a maximum of 24 months
          and it attracts a 10% rate interest.
        </p>
        <p>
          <strong>Equipment loan</strong> is repayable at 9 months maximum and
          it attracts a 10% rate interest.
        </p>
        <p>
          <strong>Housing Scheme loan</strong> is repayable over 4 years with an
          interest rate of 6% per annum at reducing balance. Applicable to
          members who are shareholders in the cooperative.
        </p>
        <p>
          <strong>Emergency loan</strong> loans treated before and after the
          mandatory credit committee meetings held every second Thursday of the
          month. Such loans attract an administrative charge as processing fee.
        </p>
        <p>
          <strong>
            ** Pls note that any of the loans can be repaid in less than the
            stipulated period but with the normal interest rate.
          </strong>
        </p>
      </>
    ),
  },
  {
    question: "Is subscription to shares mandatory?",
    answer: (
      <>
        <p>
          Subscription to shares by members is sacrosanct in compliance with
          <strong> Section 8.3</strong> of the society’s Bye-Laws and{" "}
          <strong>Chapter 14</strong> of the Cooperative Societies’ Law of Lagos
          State. Shares serve as additional investment for the subscribers and
          it attracts dividends annually.
        </p>
        <p>
          <strong>**To buy shares,</strong> interested members can pay to the
          Unique Cooperative shares account at WEMA Bank: 0121193627
        </p>
        <p>
          The Cooperative shares is sold at a nominal price of N2.00 per share
          and a minimum of 50,000 units (N100,000) is required.
        </p>
      </>
    ),
  },
  {
    question:
      "Is it mandatory that I have 1/3 (one-third) of my salary as net pay to qualify me for a loan?",
    answer:
      "Yes, after the monthly deductions are made from your salary, you must have 1/3 of your salary to take home when applying for any kind of loan.",
  },
  {
    question: "How do I close my account with “Unique”?",
    answer:
      "Upon submission of a written application for closure of account, an admin charge of 1% is charged on the savings balance while the net savings is paid to the members account within a week.",
  },
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
      <>
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
      </>
    ),
  },
  {
    question: "Can I see the Bye-Law before joining?",
    answer: (
      <>
        Yes you can. Click{" "}
        <Link href="/" className="text-theme-color">
          here
        </Link>{" "}
        or Go to <strong>RESOURCES &gt; BYE-LAW</strong>.
      </>
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
        writes formally to the President requesting for
        <strong>‘withdrawal of membership’</strong> from the Society.
        Subsequently, the University will stop the member’s deductions to the
        Society.
      </p>
    ),
  },
  {
    question: "When do I qualify for a loan?",
    answer: (
      <>
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
      </>
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
      <>
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
      </>
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
      <>
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
      </>
    ),
  },
  {
    question: "Others",
    answer: (
      <>
        <p>
          A member can apply for a self-guaranteed loan if his/her savings
          balance is more than the amount of loan applied for plus the interest.
        </p>
        <h3>
          <strong>
            For all payments to Unique Unilag Staff Cooperative Multipurpose
            Society Ltd, please pay into:
          </strong>
        </h3>
        <p>
          <strong>FIRST BANK​​ 3049494720</strong>
        </p>
        <p>
          <strong>UBA ​​​1000522354</strong>
        </p>
        <p>
          <strong>WEMA BANK​​ 0227717842</strong>
        </p>
        <p>
          <strong>ECO BANK ​​1962000861</strong>
        </p>
        <p>
          <strong>ACCESS​BANK ​​0043661233</strong>
        </p>
        <p>
          <strong>GTB​​​0 140873855</strong>
        </p>
        <p>For enquiries, please contact:</p>
        <ul className="list-disc">
          <li>
            <strong>Unique Secretariat at HRDC Building,</strong>
          </li>
          <li>
            <a
              href="mailto:uniqueunilag@yahoo.com"
              className="text-blue-300 underline"
            >
              uniqueunilag@yahoo.com
            </a>
          </li>
          <li>
            <a
              href="www.unquecoop.unilag.edu.ng"
              className="text-blue-300 underline"
              target="_blank"
            >
              www.unquecoop.unilag.edu.ng
            </a>
          </li>
          <li>
            <strong>08023409997, 08029574095, 08037223517, 08029469080</strong>
          </li>
        </ul>
      </>
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
