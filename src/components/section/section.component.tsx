import { Fragment } from 'react';
import Intro from '../intro/intro.component';
import About from '../about/about.component';
import Skills from '../skills/skills.component';
import Portfolio from '../portfolio/portfolio.component';
import Contact from '../contact/contact.component';
import { SectionContainer } from './section.styles';

const Section = () => {
  return (
    <Fragment>
      <SectionContainer>
        <Intro />
      </SectionContainer>
      <SectionContainer>
        <About />
      </SectionContainer>
      <SectionContainer>
        <Skills />
      </SectionContainer>
      <SectionContainer>
        <Portfolio />
      </SectionContainer>
      <SectionContainer>
        <Contact />
      </SectionContainer>
    </Fragment>
  );
};

export default Section;
