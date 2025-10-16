import CustomizedTables from "@/components/Table";
import React from "react";


type FileDownloadType = {
  downloadLink: string,
  message?: string
}
export const FileDownload = ({ downloadLink, message }: FileDownloadType) => {
  return (
    <div className="bg-theme-color text-white text-center py-3 rounded-md px-3">
      <a href={downloadLink} target="_blank" title="Unique management event"> {message ?? "Download material"}</a>
    </div>
  );
}

const Downloads = () => {

  function createData(
    id: number,
    name: string,
    downloadLink: React.ReactNode,

  ) {
    return { id, name, downloadLink };
  }

  const headers1 = ["S/N", "Form Name", "Download Link"];


  const rows = [
    createData(
      1,
      "27th Annual General Meeting (AGM) Report",
      <FileDownload downloadLink="/pdf/#" />
    ),
    createData(
      2,
      "26th Annual General Meeting (AGM) Report",
      <FileDownload downloadLink="/pdf/Unique_26th.pdf" />
    ),
    createData(
      3,
      "25th Annual General Meeting (AGM) Report",
      <FileDownload downloadLink="/pdf/25TH AGM PROGRAMME OF EVENTS.pdf" />
    ),
    createData(
      4,
      "22nd Annual General Meeting (AGM) Report",
      <FileDownload downloadLink="#" />
    ),
    // createData(5, "Annual Financial Report", <FileDownload downloadLink="#" />),
    // createData(
    //   5,
    //   "21st Annual General Meeting (AGM) Report",
    //   <FileDownload downloadLink="#" />
    // ),
    createData(
      5,
      "Equipment Loan Form",
      <FileDownload downloadLink="/pdf/Equipment-Loan-Form.pdf" />
    ), createData(
      6,
      "Home Ownership Loan Form",
      <FileDownload downloadLink="/pdf/HOME-OWNERSHIP-LOAN-FORM.pdf" />
    ),
  ];

  return (
    <div className="w-full h-[80vh] mt-8">
      <div className="flex w-full h-full justify-center">
        <CustomizedTables data={rows} headers={headers1} width={{ large: "50%", small: "95%" }} />
      </div>
    </div>
  );
};

export default Downloads;

