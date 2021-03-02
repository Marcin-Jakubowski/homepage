import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
`;

export const SmallContent = styled.p`
  font-size: 12px;
  line-height: 16px;
  font-weight: 700;
  text-transform: uppercase;
  color: ${({ theme }) => theme.color.secondaryFont};
  margin: 0;
`;

export const Mail = styled.a`
  font-size: 32px;
  line-height: 39px;
  font-weight: 900;
  font-style: normal;
  display: block;
  margin: 24px 0;
  text-decoration: none;
  color: ${({ theme }) => theme.color.mainFont};

&:hover {
  color: ${({ theme }) => theme.color.mainBlue};
}
`;

export const Content = styled.p`
  font-size: 18px;
  line-height: 25px;
  font-weight: 400;
  margin: 0;
`;

export const LogosBox = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, 48px);
  grid-gap: 24px;
  align-items: center;
  margin: 56px 0 109px;
`;

export const LogoLink = styled.a`
  width: 48px;
  height: 48px;
`;

export const Logo = styled.img`
  display: block;
`;
