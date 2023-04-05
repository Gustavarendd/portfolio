import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 10%;
  width: 100%;

  @media screen and (max-width: 800px) {
    flex-direction: column;
  }
`;

export const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export const Picture = styled.img`
  height: 300px;
  width: 300px;
  border-radius: 50%;
`;
