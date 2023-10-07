import { useAuth } from "@/context/authContext";
import { useRouter } from "next/router";
import dash from "../../../public/imgs/dash.svg"
import {BsPrinter} from "react-icons/bs"
import Image from "next/image";
// @ts-ignore
import html2pdf from "html2pdf.js";


const MembersPage = () => {

    const router = useRouter()


    const {currentUser, setCurrentUser} = useAuth()


    const handlePrint = () => {
       const content = document.getElementById("printable-content");

       const pdfOptions = {
         margin: 10,
         filename: "printable.pdf",
         image: { type: "jpeg", quality: 0.98 },
         html2canvas: { scale: 2 },
         jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
       };

       html2pdf().from(content).set(pdfOptions).save();
    }
    

    return (
      <div className="p-6">
        <div className="md:pl-8 lg:pl-0">
          <p className="text-[21px] font-semibold pb-4">
            Welcome {currentUser?.[" FULL NAME "]}
          </p>
        </div>
        <div id="printable-content">
          <div className="flex justify-center flex-col gap-6 items-center">
            <h1 className="md:w-[32rem] w-[100%] text-center rounded-sm text-[1.5rem] font-semibold py-6 bg-green-400 text-white">
              Dividends
            </h1>
            <div className="grid p-6 lg:grid-cols-4 md:grid-cols-3 md:w-auto w-[20rem] grid-cols-1 xl:gap-24 md:gap-20 gap-16 border-2 border-slate-100 shadow-md">
              <div className="border-b-2 sm:border-b-0 border-b-slate-100 pb-2">
                <p className="text-[18px] mb-2">Full Name</p>
                <p className="font-bold text-[21px]">
                  {currentUser?.[" FULL NAME "]}
                </p>
              </div>
              <div className="border-b-2 sm:border-b-0 border-b-slate-100 pb-2">
                <p className="text-[18px] mb-2">Pass book Number</p>
                <p className="font-bold text-[21px]">{currentUser?.PBNo}</p>
              </div>
              {/* <div className="border-b-2 sm:border-b-0 border-b-slate-100 pb-2">
                <p className="text-[18px] mb-2">Account Number</p>
                <p className="font-bold text-[21px]">
                  {currentUser?.account_no}
                </p>
              </div> */}
              {/* <div className="border-b-2 sm:border-b-0 border-b-slate-100 pb-2">
                <p className="text-[18px] mb-2">Bank</p>
                <p className="font-bold text-[21px]">{currentUser?.bank}</p>
              </div> */}
              <div className="border-b-2 sm:border-b-0 border-b-slate-100 pb-2">
                <p className="text-[18px] mb-2">Entertainment</p>
                <div className="font-bold text-[21px]">
                  {currentUser?.ENTERTAINMENT ? (
                    currentUser?.ENTERTAINMENT
                  ) : (
                    <p className="h-1 mt-4 w-16 bg-black"></p>
                  )}
                </div>
              </div>
              <div className="border-b-2 sm:border-b-0 border-b-slate-100 pb-2">
                <p className="text-[18px] mb-2">Shares</p>
                <div className="font-bold text-[21px]">
                  {currentUser?.SHARES ? (
                    currentUser?.SHARES
                  ) : (
                    <p className="h-1 mt-4 w-16 bg-black"></p>
                  )}
                </div>
              </div>
              <div className="border-b-2 sm:border-b-0 border-b-slate-100 pb-2 ">
                <p className="text-[18px] mb-2">Dividend</p>
                <div className="font-bold text-[21px]">
                  {currentUser?.DIVIDENDS ? (
                    currentUser?.DIVIDENDS
                  ) : (
                    <p className="h-1 mt-4 w-16 bg-black"></p>
                  )}
                </div>
              </div>
              {/* <div className="border-b-2 sm:border-b-0 border-b-slate-100 pb-2">
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
              </div> */}
              <div className="border-b-2 sm:border-b-0 border-b-slate-100 pb-2">
                <p className="text-[18px] mb-2">Total</p>
                <div className="font-bold text-[21px]">
                  {currentUser?.TOTAL ? (
                    currentUser?.TOTAL
                  ) : (
                    <p className="h-1 mt-4 w-16 bg-black"></p>
                  )}
                </div>
              </div>
            </div>
            <div className="w-full flex gap-4 justify-start md:justify-center">
              <button
                className="bg-theme-color flex items-center gap-2 text-white py-4 px-6 rounded-md"
                onClick={handlePrint}
              >
                <p>Print</p> <BsPrinter />
              </button>
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