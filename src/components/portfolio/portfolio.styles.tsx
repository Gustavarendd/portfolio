import styled from 'styled-components';

export const PortfolioContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ProjectContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 10px;
  width: 100%;
`;

export const PortfolioImage = styled.img`
  max-width: 100%;
`;
