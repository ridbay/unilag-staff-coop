import { read, utils } from "xlsx";
import { db } from "./firebase";
import { query, getDocs, collection,where, addDoc, doc, setDoc } from 'firebase/firestore'
// const XLSX = require("xlsx");

interface excel {
  NAME: string;
  ID: number;
}

export default function parseExcelData(file: any) {
  // Assuming 'file' is a buffer containing the Excel file data
  console.log(file)

    const reader = new FileReader();

    reader.onload = async function (event: any) {
      const arrayBuffer = event.target.result;
      const wb = read(arrayBuffer); // parse the array buffer
      const ws = wb.Sheets[wb.SheetNames[0]]; // get the first worksheet
      const data: excel[] = utils.sheet_to_json<excel>(ws); // generate
      console.log(data);
      const docRef = doc(db, "members", "unique_members");
      await setDoc(docRef, {data}).then(() => {
        console.log("doc successfully added")
      })

      return data;
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
