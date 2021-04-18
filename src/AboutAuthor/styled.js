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
  border: 1px solid black;
  align-self: flex-end;
  display: flex;
  align-items: center;
  text-transform: uppercase;
  color: ${({ theme }) => theme.color.secondaryFont};
  font-weight: 700;
  font-size: 12px;
  line-height: 16px;
  background-color: green;
`;

export const ToggleThemeBox = styled.div`
  border: 1px solid black;
`;

export const ToggleThemeIcon = styled.img`
  border: 1px solid black;
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

export const HireBox = styled.a`
  display: block;
  min-height: 49px;
  width: 154px;
  background-color: ${({ theme }) => theme.color.mainBlue};
  border: 1px solid rgba(209, 213, 218, 0.3);
  border-radius: 4px;
  text-transform: capitalize;
  text-decoration: none;
  color: ${({ theme }) => theme.color.thirdFont};
  font-size: 20px;
  line-height: 24px;
  font-weight: 600;
  padding: 16px;
  display: flex;
  align-items: center;

  &:hover {
    box-shadow: 0px 0px 0px 2px ${({ theme }) => theme.color.buttonShadow};
  }
`;

export const MailIcon = styled.img`
  margin-right: 16px;
`;
