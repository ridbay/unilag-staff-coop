import { useAuth } from "@/context/authContext";
import { useRouter } from "next/router";

const MembersPage = () => {

    const router = useRouter()

    const {currentUser, setCurrentUser} = useAuth()

    return (
      <div className="p-6">
        <div>
          <p className="text-[21px] font-semibold pb-4">Welcome {currentUser?.firstname}</p>
        </div>
        <div>
          <div className="flex justify-center flex-col gap-6 items-center">
            <h1 className="md:w-[32rem] w-[100%] text-center rounded-sm text-[1.5rem] font-semibold py-6 bg-green-400 text-white">
              Dividends
            </h1>
            <div className="grid p-6 lg:grid-cols-4 md:grid-cols-2 md:w-auto w-[20rem] grid-cols-1 xl:gap-24 md:gap-20 gap-16 border-2 border-slate-100 shadow-md">
              <div className="border-b-2 sm:border-b-0 border-b-slate-100 pb-2">
                <p className="text-[18px] mb-2">First Name</p>
                <p className="font-bold text-[21px]">
                  {currentUser?.firstname}
                </p>
              </div>
              <div className="border-b-2 sm:border-b-0 border-b-slate-100 pb-2">
                <p className="text-[18px] mb-2">Last Name</p>
                <p className="font-bold text-[21px]">{currentUser?.lastname}</p>
              </div>
              <div className="border-b-2 sm:border-b-0 border-b-slate-100 pb-2">
                <p className="text-[18px] mb-2">Pass book Number</p>
                <p className="font-bold text-[21px]">
                  {currentUser?.phonebook_no}
                </p>
              </div>
              <div className="border-b-2 sm:border-b-0 border-b-slate-100 pb-2">
                <p className="text-[18px] mb-2">Account Number</p>
                <p className="font-bold text-[21px]">
                  {currentUser?.account_no}
                </p>
              </div>
              <div className="border-b-2 sm:border-b-0 border-b-slate-100 pb-2">
                <p className="text-[18px] mb-2">Bank</p>
                <p className="font-bold text-[21px]">{currentUser?.bank}</p>
              </div>
              <div className="border-b-2 sm:border-b-0 border-b-slate-100 pb-2">
                <p className="text-[18px] mb-2">Dividend Year</p>
                <p className="font-bold text-[21px]">
                  {currentUser?.dividend_year}
                </p>
              </div>
              <div className="border-b-2 sm:border-b-0 border-b-slate-100 pb-2">
                <p className="text-[18px] mb-2">Share Unit</p>
                <p className="font-bold text-[21px]">
                  {currentUser?.share_dividend}
                </p>
              </div>
              <div className="border-b-2 sm:border-b-0 border-b-slate-100 pb-2">
                <p className="text-[18px] mb-2">Share Value</p>
                <p className="font-bold text-[21px]">
                  {currentUser?.share_dividend}
                </p>
              </div>
              <div className="border-b-2 sm:border-b-0 border-b-slate-100 pb-2">
                <p className="text-[18px] mb-2"> Share Dividend</p>
                <p className="font-bold text-[21px]">
                  {currentUser?.share_dividend}
                </p>
              </div>
              <div className="border-b-2 sm:border-b-0 border-b-slate-100 pb-2">
                <p className="text-[18px] mb-2">Non-Share Dividend</p>
                <p className="font-bold text-[21px]">
                  {currentUser?.["non-share_dividend"]}
                </p>
              </div>
              <div className="border-b-2 sm:border-b-0 border-b-slate-100 pb-2">
                <p className="text-[18px] mb-2">Total Dividend</p>
                <p className="font-bold text-[21px]">
                  {currentUser?.total_divivdend}
                </p>
              </div>
            </div>
            <div className="w-full flex justify-start">
              <button
                className="bg-theme-color text-white py-4 px-6 rounded-md"
                onClick={() => {
                  setCurrentUser(null);
                  router.push("/sign-in/member-login");
                }}
              >
                Log Out
              </button>
            </div>
          </div>
        </div>
      </div>
    );
}
export default MembersPage;