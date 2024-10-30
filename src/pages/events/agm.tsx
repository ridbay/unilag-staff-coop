import CustomizedTables from "@/components/Table";
import EventsLayout from "@/components/layouts/EventsLayout";
import { FileDownload } from "../resources/downloads";


const rows = [
  {
    id: "Date:",
    title: "7th NOVEMBER, 2024",
  },
  {
    id: "Venue:",
    title: "J.F ADE AJAYI MAIN AUDITURIUM, University of Lagos",
  },
  {
    id: "Start:",
    title: "9:30 AM",
  },
];

const Agm = () => {
  return (
    <EventsLayout>
      <section>
        <h1 className="text-[2rem] font-semibold pl-4 mb-[3rem] text-center md:text-left">
          October Information Flash
        </h1>
        <div className="border border-[#0000005d] w-full">
          <h2 className="text-left py-5 px-2 bg-[#f5f5f5]">
            Welcome to your trusted source for cooperative updates, where prosperity meets community! As the autumn leaves turn golden, we bring you the latest developments, opportunities, and achievements from our vibrant cooperative family. <br /> <br />
            Follow us <strong>@unilagNigeria</strong>  on Facebook, Instagram, Youtube and Twitter.
          </h2>


          <div className="border border-[#00000009] rounded-[5px] p-5 max-w-max mx-3 my-[2rem]">
            {/* <a className=" py-5 px-2 bg-theme-color text-white border-round text-center" href="#" download>Download material</a> */}
            <div style={{ fontFamily: 'Arial, sans-serif' }}>
              <h1 style={{ color: '#2C3E50' }}>UNILAG News Flash</h1>

              <div style={{ borderTop: '2px solid #ccc', marginTop: '20px', paddingTop: '10px' }}>
                <h2>Supplementary Entrance Examination</h2>
                <p>
                  The 2024/2025 School of Foundation Studies Supplementary Entrance Examination is scheduled for{' '}
                  <strong>Saturday, October 26, 2024</strong>. Prospective candidates are advised to print their Exam Passes via{' '}
                  <a href="https://applications.unilag.edu.ng">applications.unilag.edu.ng</a>. The examination will commence at
                  7:30 a.m. at the Distance Learning Institute (DLI), located near the University’s second gate, close to the
                  International School, University of Lagos (ISL).
                </p>
              </div>

              <div style={{ borderTop: '2px solid #ccc', marginTop: '20px', paddingTop: '10px' }}>
                <h2>U.S. Election Event</h2>
                <p>
                  The University of Lagos in collaboration with the U.S. Consulate General, Lagos, will host a U.S. Election Event
                  titled <strong>Democracy in Action: Navigating the U.S. Election Process</strong> on <strong>Tuesday, October 29, 2024</strong>,
                  at 2:00 p.m. at the Senate Lounge, UNILAG Senate House. The event will focus on the U.S. electoral system and the
                  importance of voter engagement.
                </p>
              </div>

              <div style={{ borderTop: '2px solid #ccc', marginTop: '20px', paddingTop: '10px' }}>
                <h2>Senate House Fumigation</h2>
                <p>
                  The Senate House will undergo a fumigation exercise on <strong>Saturday, November 2, 2024</strong> starting at 9:00 a.m.
                  Heads of units and departments are to designate staff to grant the fumigation team access to their offices.
                </p>
              </div>

              <div style={{ borderTop: '2px solid #ccc', marginTop: '20px', paddingTop: '10px' }}>
                <h2>Unique UNILAG Staff Cooperative AGM/Election</h2>
                <p>
                  Unique UNILAG Staff Cooperative Multipurpose Society Limited has released the list of eligible candidates for the
                  26th AGM/Election, scheduled for <strong>Thursday, November 7, 2024</strong>. Campaigns will run from
                  <strong>October 25 to November 6, 2024</strong>.
                </p>
              </div>

              <div style={{ borderTop: '2px solid #ccc', marginTop: '20px', paddingTop: '10px' }}>
                <h2>African Research Security Consortium Stakeholders' Briefing</h2>
                <p>
                  A two-day briefing on research security will take place on <strong>November 5 and 6, 2024</strong>, organized by the
                  African Research Security Consortium in collaboration with the U.S. Department of State and CRDF Global. Topics
                  include research security, licit and illicit research exploitation, cybersecurity, and more.
                </p>
              </div>

              <div style={{ borderTop: '2px solid #ccc', marginTop: '20px', paddingTop: '10px' }}>
                <h2>UNILAG Consult Ltd 40th Anniversary Seminar</h2>
                <p>
                  UNILAG Consult Ltd will celebrate its 40th Anniversary with a seminar on <strong>Tuesday, November 26, 2024</strong>,
                  themed <strong>"Nurturing Excellence, Shaping the Future"</strong>. The event will take place at Tayo Aderinokun Hall, UNILAG, and
                  will feature distinguished speakers reflecting on the organization's achievements.
                </p>
              </div>
            </div>
            {/* <CustomizedTables data={rows} width={{large: "100%", small: "100%"}} /> */}
          </div>

          <div className="border border-[#00000009] rounded-[5px] p-2 max-w-max mx-3 my-[1rem]">
          <FileDownload downloadLink="/pdf/agm_doc.pdf" />

          </div>

        </div>
      </section>

      <section style={{ marginTop: '3vh' }}>
        <h1 className="text-[2rem] font-semibold pl-4 mb-[3rem] text-center md:text-left">
          26th Annual General Meeting (AGM)
        </h1>
        <div className="border border-[#0000005d]">
          <h2 className="text-center py-5 px-2 bg-[#f5f5f5]">
            The details of the 26th Annual General Meeting of Unique Unilag
            Staff Cooperative Multipurpose Society Limited are as follows:
          </h2>
          <div className="border border-[#00000009] rounded-[5px] p-5 max-w-max mx-3 my-[2rem]">
            <h2 className="text-center py-5 bg-theme-color">
              26TH ANNUAL GENERAL MEETING
            </h2>
            <CustomizedTables data={rows} width={{ large: "100%", small: "100%" }} />
          </div>
        </div>
      </section>
    </EventsLayout>
  );
};

export default Agm;
