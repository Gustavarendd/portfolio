import styled from 'styled-components';

export const NavigationContainer = styled.div`
  position: fixed;
  height: 65px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 25px;
  background-color: lightcoral;

  @media screen and (max-width: 800px) {
    margin-bottom: 20px;
  }
`;
export const NavLinks = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const NavLink = styled.div`
  padding: 10px 15px;
  cursor: pointer;
`;
