import Intro from '../intro/intro.component';
import About from '../about/about.component';
import Portfolio from '../portfolio/portfolio.component';
import Contact from '../contact/contact.component';
import { SectionContainer, Container } from './section.styles';

const Section = () => {
  return (
    <Container>
      <SectionContainer id="intro">
        <Intro />
      </SectionContainer>
      <SectionContainer id="about">
        <About />
      </SectionContainer>
      <SectionContainer id="portfolio">
        <Portfolio />
      </SectionContainer>
      <SectionContainer id="contact">
        <Contact />
      </SectionContainer>
    </Container>
  );
};

export default Section;
