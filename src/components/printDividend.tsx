
// @ts-ignore
import html2pdf from "html2pdf.js";



const handlePrint = (name: any) => {
  const content = document.getElementById("printable-content");

  const pdfOptions = {
    margin: 10,
    filename: `${name}-dividend.pdf`,
    image: { type: "jpeg", quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
  };

  html2pdf().from(content).set(pdfOptions).save();
};
