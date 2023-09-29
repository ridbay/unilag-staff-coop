import CustomizedTables from "@/components/Table";
import AboutLayout from "@/components/layouts/AboutLayout";

const PastPresidents = () => {
  function createData(
    id: number,
    name: string,
    startDate: string,
    endDate: string
  ) {
    return { id, name, startDate, endDate };
  }

  const header = ["S/N", "Name", "Started", "Ended"];

  const rows = [
    createData(1, "Mr Adewuyi Yeken Ademola", "2018", "2022"),
    createData(2, "Mr. Olaoye, B. B..", "2014", "2018"),
    createData(3, "Dr. Kolawole, K. O.", "2012", "2014"),
    createData(4, "	Engr. Ajiboye, J. A.", "2008", "2012"),
    createData(5, "	Mr. Ajao, O.", "2006", "2008"),
    createData(6, "	Dr. Odekunle, L. A.", "2004", "2006"),
    createData(7, "	Alhaji Lawal, Y. A.", "2002", "2004"),
    createData(8, "	Mr. Fagbamila, E. A.", "	2000", "2002"),
    createData(9, "	Mr. Moronkeji, S. I.", "1998", "2000"),
    createData(10, "Mrs. Adubifa, A. O.", "1996", "1998"),
    createData(11, "Mr. Olaitan, M. O.", "1991", "1996"),
    createData(12, "	Mr. Adebimpe, R. A.", "Interim", "Oct. 1991"),
  ];

  return (
    <AboutLayout>
      <div>
        <h1 className="text-[2rem] font-semibold pl-4 mb-[3rem] text-center md:text-left">
          Past President
        </h1>
        <h2 className="text-[1rem]">
          All past Presidents have served the Society committedly in their
          various tenures with dignity, honesty, and integrity which brought
          about the continuous growth and development being witnessed by members
          of the Society. They are as follows in chronological order:
        </h2>
        <div className="mt-8">
          <CustomizedTables headers={header} data={rows} width={{large: "100%", small: "95%"}} />
        </div>
      </div>
    </AboutLayout>
  );
};

export default PastPresidents;
