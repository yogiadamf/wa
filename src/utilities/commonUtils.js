import Home from '../components/Home'
import Docs from '../components/Docs'
import ContactMe from '../components/ContactMe';

export const TOTAL_SCREENS = [
  {
    screen_name: "Home",
    component: Home,
  },
  {
    screen_name: "Dokumentasi",
    component: Docs,
  },
  {
    screen_name: "Kontak Saya",
    component: ContactMe,
  }
];

export const GET_SCREEN_INDEX = (screen_name) => {
  if (!screen_name) return -1;

  for (let i = 0; i < TOTAL_SCREENS.length; i++) {
    if (TOTAL_SCREENS[i].screen_name === screen_name) return i;
  }

  return -1;
};
