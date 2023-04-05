import styled from 'styled-components';

export const ContactSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  @media screen and (max-width: 600px) {
    width: 100%;
  }
`;
