import styled from 'styled-components';

export const PortfolioContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  @media screen and (max-width: 1000px) {
    text-align: center;
  }
`;

export const Header = styled.h3`
  margin-block-end: 0px;
`;

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: fit-content;
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
