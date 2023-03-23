import styled from 'styled-components';

export const IntroContainer = styled.div`
  display: flex;
  width: 100%;

  @media screen and (max-width: 800px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const ProfilePicture = styled.img`
  height: 300px;
  width: 300px;
  border-radius: 50%;
`;

export const IntroTextContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-left: 50px;
  text-align: center;
  @media screen and (max-width: 800px) {
    padding-left: 0px;
  }
`;
