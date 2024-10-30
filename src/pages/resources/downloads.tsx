import CustomizedTables from "@/components/Table";
import React from "react";


type FileDownloadType = {
  downloadLink: string
}
export const FileDownload = ({downloadLink}: FileDownloadType) => {
  return (
    <div className="bg-theme-color text-white text-center py-3 rounded-md px-3">
      <a href={downloadLink} target="_blank" title="Unique management event">Download material</a>
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
      "25th Annual General Meeting (AGM) Report",
      <FileDownload downloadLink="/pdf/25TH AGM PROGRAMME OF EVENTS.pdf" />
    ),
    createData(
      2,
      "22nd Annual General Meeting (AGM) Report",
      <FileDownload downloadLink="#" />
    ),
    createData(3, "Annual Financial Report", <FileDownload downloadLink="#" />),
    createData(
      4,
      "21st Annual General Meeting (AGM) Report",
      <FileDownload downloadLink="#" />
    ),
  ];

  return (
    <div className="w-full h-[80vh] mt-8">
      <div className="flex w-full h-full justify-center">
        <CustomizedTables data={rows} headers={headers1} width={{large: "50%", small: "95%"}}/>
      </div>
    </div>
  );
};

export default Downloads;

