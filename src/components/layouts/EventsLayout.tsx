import { PATH } from '@/routes/path';
import Link from 'next/link';
import { useRouter } from 'next/router';

interface EventsLayoutProps {
  children: React.ReactNode;  
}

const eventsPaths = [
    { name: "AGM", link: PATH.events.annualGeneralMeeting },
    { name: "AFR", link: PATH.events.annualFinancialReport },
  ];

const EventsLayout: React.FC<EventsLayoutProps> = ({ children }) => {
    const router = useRouter();
  const dynamicWidth = `${100 / eventsPaths.length}%`
  return (
    <div className="min-h-[80vh] flex justify-center py-[45px] px-4">
      <div className="md:max-w-[1200px] w-[95vw]">
        <h1 className="text-[2rem] font-semibold mb-[48px]">Events</h1>
        <nav>
          <ul className="flex flex-nowrap flex-col md:flex-row item-center md:items-stretch gap-2 md:gap-0">
            {eventsPaths.map((path, index) => (
              <li key={index} className={`w-full md:ww-[${dynamicWidth}] py-[12px] ${
                router.pathname === path.link
                  ? "border-t-[2px] border-b-[2px] md:border-t-0 border-theme-color"
                  : "md:border-b border-black"
              }`}>
                <Link
                  href={path.link}
                  style={{display: 'inline-block'}}
                  className={`hover:text-blue-200 w-[100%] text-[17px] leading-[23.46px] px-[10px] md:px-[20px] text-center whitespace-pre-wrap h-full`}
                >
                  {path.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="my-10">{children}</div>
      </div>
    </div>
  );
};

export default EventsLayout;
