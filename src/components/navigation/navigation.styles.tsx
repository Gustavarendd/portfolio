import styled from 'styled-components';

export const NavigationContainer = styled.div`
  position: fixed;
  height: 65px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20%;
  background-color: #d0d0d0;
  box-shadow: 0px 5px 15px gray;

  @media screen and (max-width: 800px) {
  }
`;

export const NavLinks = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;

export const NavLink = styled.div`
  padding: 10px 10px;
  cursor: pointer;
`;
