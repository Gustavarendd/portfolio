import styled from 'styled-components';

export const ProjectContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 1rem;
  min-width: 100%;
  scroll-snap-align: start;
  text-align: center;

  @media screen and (max-width: 1000px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const PortfolioImage = styled.img`
  align-self: center;
  width: 100%;

  @media screen and (max-width: 1000px) {
    max-width: 400px;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  max-width: 100%;
  gap: 1rem;
`;
