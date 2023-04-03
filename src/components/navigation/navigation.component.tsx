import { NavigationContainer, NavLinks, NavLink } from './navigation.styles';

const Navigation = () => {
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id)!;
    section!.scrollIntoView({
      behavior: 'smooth',

      inline: 'start',
    });
  };
  return (
    <NavigationContainer>
      <h2>Portfolio Website</h2>
      <NavLinks>
        <NavLink onClick={() => scrollToSection('intro')}>Intro</NavLink>
        <NavLink onClick={() => scrollToSection('about')}>About Me</NavLink>
        <NavLink onClick={() => scrollToSection('portfolio')}>
          Portfolio
        </NavLink>
        <NavLink onClick={() => scrollToSection('contact')}>Contact</NavLink>
      </NavLinks>
    </NavigationContainer>
  );
};

export default Navigation;
