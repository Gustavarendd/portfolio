import Intro from '../intro/intro.component';
import About from '../about/about.component';
import Portfolio from '../portfolio/portfolio.component';
import Contact from '../contact/contact.component';
import { SectionContainer, Container } from './section.styles';

const Section = () => {
  return (
    <Container>
      <SectionContainer>
        <Intro />
      </SectionContainer>
      <SectionContainer>
        <About />
      </SectionContainer>
      <SectionContainer>
        <Portfolio />
      </SectionContainer>
      <SectionContainer>
        <Contact />
      </SectionContainer>
    </Container>
  );
};

export default Section;
