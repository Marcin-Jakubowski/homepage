import styled from "styled-components";

export const ContentContainer = styled.main`
  display: flex;
  padding-top: 115px;
  margin-bottom: 64px;
`;

export const Photo = styled.img`
  min-width: 398px;
  height: 398px;
  border-radius: 50%;
  background-color: grey;
`;

export const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 66px;
  width: 100%;
`;

export const ThemeBox = styled.div`
  display: none;
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
  color: ${({ theme }) => theme.color.secondaryFont};
  margin: 32px 0 12px;
`;

export const AuthorName = styled.h1`
  font-size: 38px;
  line-height: 46px;
  font-weight: 900;
  text-transform: capitalize;
  margin: 0;
`;

export const Description = styled.p`
  font-size: 20px;
  line-height: 28px;
  font-weight: 400;
  color: ${({ theme }) => theme.color.secondaryFont};
  margin: 32px 0;
`;

export const HireBox = styled.div`
  min-height: 49px;
  width: 154px;
  background-color: ${({ theme }) => theme.color.mainBlue};
  border: 1px solid rgba(209, 213, 218, 0.3);
  border-radius: 4px;
  text-transform: capitalize;
  color: ${({ theme }) => theme.color.thirdFont};
  font-size: 20px;
  line-height: 24px;
  font-weight: 600;
  padding: 16px;
  display: flex;
  align-items: center;
`;

export const MailIcon = styled.img`
  margin-right: 16px;
`;
