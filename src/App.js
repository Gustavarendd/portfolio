import { lazy, Suspense } from 'react';
import Spinner from './components/spinner/spinner.component';
import { GlobalStyle } from './index.styles';
import Skills from './components/skills/skills.component';
import BackToTopButton from './components/back-to-top/back-to-top.component';

const Section = lazy(() => import('./components/section/section.component'));
const Navigation = lazy(() =>
  import('./components/navigation/navigation.component'),
);
const Footer = lazy(() => import('./components/footer/footer.component'));

function App() {
  return (
    <Suspense fallback={<Spinner />}>
      <GlobalStyle />
      <Navigation />
      <Skills />
      <Section />
      <BackToTopButton />
      <Footer />
    </Suspense>
  );
}

export default App;
