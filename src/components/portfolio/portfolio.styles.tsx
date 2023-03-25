import styled from 'styled-components';

export const PortfolioContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 50px;
  width: 100%;
`;

export const Container = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  gap: 20px;
`;

export const ProjectsContainer = styled.div`
  display: flex;
  overflow-x: scroll;
  scroll-snap-type: x mandatory;
  max-width: 100%;
  scroll-behavior: smooth;
  scrollbar-width: none;
  -ms-overflow-style: none;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const Project = styled.div`
  min-width: 100%;
  scroll-snap-align: start;
`;
