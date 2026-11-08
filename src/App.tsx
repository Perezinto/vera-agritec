import HomePage from '@/pages/HomePage';
import AboutPage from '@/pages/AboutPage';
import SolutionsPage from '@/pages/SolutionsPage';
import ProjectsPage from '@/pages/ProjectsPage';
import AcademyPage from '@/pages/AcademyPage';
import ConsultingPage from '@/pages/ConsultingPage';
import ContactPage from '@/pages/ContactPage';

// Each HTML file (index.html, about/index.html, ...) sets data-page on #root.
const PAGES: Record<string, () => JSX.Element> = {
  home: HomePage,
  about: AboutPage,
  solutions: SolutionsPage,
  projects: ProjectsPage,
  academy: AcademyPage,
  consulting: ConsultingPage,
  contact: ContactPage,
};

export default function App() {
  const key = document.getElementById('root')?.dataset.page ?? 'home';
  const Page = PAGES[key] ?? HomePage;
  return <Page />;
}
