import parseExcelData from "@/lib/parseExcelData";
import {useState} from "react"

const AdminHome = () => {
  const [excel, setExcel] = useState<File | null>(null)

  return <div>
    <input type="file" onChange={(e) => {
      if(e.target.files){
        setExcel(e.target.files[0])
      }
    }}/>
    <button className="bg-blue-500 py-4 px-6 text-white " onClick={() => parseExcelData(excel)}>Upload</button>
  </div>;
};
export default AdminHome;