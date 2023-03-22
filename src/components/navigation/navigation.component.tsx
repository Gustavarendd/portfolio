import { NavigationContainer, NavLinks, NavLink } from './navigation.styles';

const Navigation = () => {
  return (
    <NavigationContainer>
      <h2>Gustav's Portfolio</h2>
      <NavLinks>
        <NavLink>Intro</NavLink>
        <NavLink>About</NavLink>
        <NavLink>Skills</NavLink>
        <NavLink>Portfolio</NavLink>
        <NavLink>Contact</NavLink>
      </NavLinks>
    </NavigationContainer>
  );
};

export default Navigation;
