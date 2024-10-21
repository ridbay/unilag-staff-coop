
import { read, utils } from "xlsx";
import { useState } from "react";
import { useAuth } from "@/context/authContext";
import Dropzone from "react-dropzone";
import { db } from "../../lib/firebase";
import {
  query,
  getDocs,
  collection,
  where,
  addDoc,
  doc,
  setDoc,
} from "firebase/firestore";
import { Toaster } from "react-hot-toast";
import { ToastMessages } from "@/components/toastMessages";



interface excel {
  NAME: string;
  ID: number;
}
const AdminHome = () => {
  const [excel, setExcel] = useState<File | null>(null);
  const { loading, setLoading, AdminSignOut } = useAuth();


   function parseExcelData(file: any) {
     // Assuming 'file' is a buffer containing the Excel file data
     // console.log(file)
    

     const reader = new FileReader();

     reader.onload = async function (event: any) {
       setLoading(true);
       const arrayBuffer = event.target.result;
       const wb = read(arrayBuffer); // parse the array buffer
       const ws = wb.Sheets[wb.SheetNames[0]]; // get the first worksheet
       const data: excel[] = utils.sheet_to_json<excel>(ws, {
         header: 1, // Get raw header values first
       });

       // Clean headers and convert to objects
       //  @ts-ignore
       const cleanedHeaders = data[0].map((header: string) =>
         header.trim().replace(/['"]+/g, "").replace(/\s+/g, "").toLowerCase()
       );
       //  @ts-ignore
       const cleanedData = data.slice(1).map((row: any[]) =>
         row.reduce((acc, value, index) => {
           acc[cleanedHeaders[index]] = value;
           return acc;
         }, {})
       );
       console.log(cleanedData);
       const docRef = doc(db, "members", "unique_members");
       await setDoc(docRef, { data: cleanedData })
         .then(() => {
           console.log("doc successfully added");
           ToastMessages("File uploaded successfully", false);
         })
         .catch(() => {
           ToastMessages("An Error Occured, pls try again", true);
         });
       setLoading(false);
       return cleanedData;
       // The 'arrayBuffer' variable now contains the file data as an ArrayBuffer
       // You can use 'arrayBuffer' for further processing
       // For example, you can send it to a server or parse it depending on your needs
     };

     reader.readAsArrayBuffer(file);

     //   const fileBuffer = FileReader.readAsArrayBuffer();

     //   const workbook = XLSX.read(file, { type: "buffer" });

     //   // Assuming the data is in the first sheet (you can adjust as needed)
     //   const sheet = workbook.Sheets[workbook.SheetNames[0]];

     //   // Assuming your Excel file has specific column headers like 'name', 'email', etc.
     //   const data = XLSX.utils.sheet_to_json(sheet, {
     //     header: ["NAME", "ID" /* other fields */],
     //   });
   }
  return (
    <div className="grid place-content-center h-[85vh] w-full md:ml-0 ml-8">
      <Toaster position="top-right" />
      <h1 className="text-[24px] font-semibold">Welcome Admin</h1>
      <p className="mb-4">
        Please follow the following instructions while uploading your excel file
      </p>
      <ul className="mb-8 max-w-[20rem] md:max-w-[40rem] list-decimal">
        <li>
          Make sure the first row of your excel file contains all the relevant
          headings for a member's information e.g Name, Account number, share
          dividend e.t.c
        </li>
        <li>Also make sure your excel file is not more than 1.5mb in size.</li>
      </ul>
      <Dropzone onDrop={(acceptedFiles) => parseExcelData(acceptedFiles[0])}>
        {({ getRootProps, getInputProps }) => (
          <section>
            <div
              {...getRootProps()}
              className="bg-slate-200 md:w-[30rem] md:h-[15rem] w-[18rem] h-[12rem] border-2 rounded-sm flex justify-center animate-drag-drop items-center border-dashed border-black"
            >
              <input {...getInputProps()} />
              <p>
                {loading
                  ? "Loading..."
                  : "Drag 'n' drop the excel file here, or click to select files"}
              </p>
            </div>
          </section>
        )}
      </Dropzone>

      <div className="w-full flex justify-start mt-6">
        <button
          className="bg-theme-color text-white py-4 px-6 rounded-md"
          onClick={() => {
            AdminSignOut()
          }}
        >
          Log Out
        </button>
      </div>
      {/* <input
        type="file"
        onChange={(e) => {
          if (e.target.files) {
            setExcel(e.target.files[0]);
          }
        }}
      />
      <button
        className="bg-blue-500 py-4 px-6 text-white "
        onClick={() => parseExcelData(excel)}
      >
        Upload
      </button> */}
    </div>
  );
};
export default AdminHome;
