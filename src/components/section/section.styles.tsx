import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  margin-top: 5rem;
  @media screen and (max-width: 800px) {
    margin-top: 4rem;
  }
`;

export const SectionContainer = styled.section`
  display: flex;
  width: 70%;
  max-width: 900px;
  padding: 3rem 3rem 5rem;
  margin: 3rem auto;
  background: rgba(227, 227, 227, 0.7);
  border-radius: 15px;
  box-shadow: 0px 5px 15px grey;
  @media screen and (max-width: 800px) {
    margin: 1rem auto;
  }
`;
