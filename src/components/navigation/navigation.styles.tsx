import styled from 'styled-components';

export const NavigationContainer = styled.div`
  position: fixed;
  height: 4rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20%;
  background-color: #d0d0d0;
  box-shadow: 0px 5px 15px gray;
  transition: all 0.3s ease;
  z-index: 20;
  min-width: 390px;
  @media screen and (max-width: 800px) {
    font-size: 0.7rem;
    gap: 10%;
    height: 3rem;
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
  @media screen and (max-width: 600px) {
    padding: 5px 5px;
  }
`;
