import styled from 'styled-components';

export const ProjectContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 10px;
  width: 100%;

  @media screen and (max-width: 1000px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const PortfolioImageContainer = styled.img`
  width: 100%;

  @media screen and (max-width: 1000px) {
    max-width: 400px;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 10px;
`;
