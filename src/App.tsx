import HomePage from '@/pages/HomePage';
import AboutPage from '@/pages/AboutPage';
import SolutionsPage from '@/pages/SolutionsPage';
import ProjectsPage from '@/pages/ProjectsPage';
import AcademyPage from '@/pages/AcademyPage';
import ConsultingPage from '@/pages/ConsultingPage';
import ContactPage from '@/pages/ContactPage';

const ROUTES: Record<string, () => JSX.Element> = {
  '/': HomePage,
  '/about': AboutPage,
  '/solutions': SolutionsPage,
  '/projects': ProjectsPage,
  '/academy': AcademyPage,
  '/consulting': ConsultingPage,
  '/contact': ContactPage,
};

export default function App() {
  const path = window.location.pathname.replace(/\/$/, '') || '/';
  const Page = ROUTES[path] ?? HomePage;
  return <Page />;
}
