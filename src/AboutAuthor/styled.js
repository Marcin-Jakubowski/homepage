import styled from "styled-components";

export const ContentContainer = styled.main`
  display: flex;
  padding-top: 115px;
`;

export const Photo = styled.div`
  width: 398px;
  height: 398px;
  border-radius: 100%;
  background-color: grey;
`;

export const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 66px;
`;

export const ThemeBox = styled.div`
  height: 26px;
  width: 159px;
  background-color: grey;
  align-self: flex-end;
  text-transform: uppercase;
  color: ${({ theme }) => theme.color.secondaryFont};
`;

export const SmallContent = styled.p`
  font-size: 12px;
  line-height: 16px;
  font-weight: 700;
  text-transform: uppercase;
  color: ${({theme}) => theme.color.secondaryFont};
  margin: 32px 0 12px;
`;

export const AuthorName = styled.h1`
  font-size: 38px;
  line-height: 46px;
  font-weight: 900;
  text-transform: capitalize;
  margin: 0;
`;

export const Description = styled.h2`
  font-size: 20px;
  line-height: 28px;
  font-weight: 400;
  color: ${({theme}) => theme.color.secondaryFont};
  margin: 32px 0;
`;

export const HireBox = styled.div`
  height: 49px;
  width: 154px;
  background-color: blue;
  text-transform: capitalize;
  color: ${({theme}) => theme.color.thirdFont}
`;
