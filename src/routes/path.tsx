const path = (root: string, sublink: string) => `${root}${sublink}`;

const ROOT = "/";
const ROOTS_ABOUT = "/about-us";
const ROOTS_EVENTS = "/events";

export const PATH = {
  root: ROOT,
  aboutUs: {
    root: ROOTS_ABOUT,
    mission: path(ROOTS_ABOUT, "/mission-vision"),
    management: path(ROOTS_ABOUT, "/management"),
    pastPresidents: path(ROOTS_ABOUT, "/past-presidents"),
    trustees: path(ROOTS_ABOUT, "/trustees"),
  },
  events: {
    root: ROOTS_EVENTS,    
    annualGeneralMeeting: path(ROOTS_EVENTS, "/agm"),
    annualFinancialReport: path(ROOTS_EVENTS, "/annual-financial-report"),
  },
};
