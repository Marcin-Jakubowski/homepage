import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 120px;
`;

export const Logo = styled.img`
  display: block;
  min-width: 40px;
  height: 40px;
  margin-bottom: 13px;
`;

export const Header = styled.h2`
  margin: 0;
  font-size: 30px;
  line-height: 36px;
  font-weight: 900;
  text-transform: capitalize;
`;

export const SubHeader = styled.p`
  margin: 0;
  font-size: 20px;
  line-height: 28px;
  font-weight: 400;
`;

export const ProjectsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 32px;
  margin-top: 24px;
`;

export const ProjectTile = styled.div`
  min-width: 592px;
  min-height: 322px;
  background-color: ${({ theme }) => theme.color.secondaryBackground};
  border: 6px solid rgba(209, 213, 218, 0.3);
  box-shadow: 0px -2px 50px rgba(9, 10, 51, 0.02),
    0px 16px 58px rgba(9, 10, 51, 0.03);
  border-radius: 4px;
  padding: 56px;
`;

export const Title = styled.h3`
  color: ${({ theme }) => theme.color.mainBlue};
  font-size: 24px;
  line-height: 29px;
  font-weight: 700;
  margin: 0;
`;

export const Content = styled.p`
  font-size: 18px;
  line-height: 25px;
  color: ${({ theme }) => theme.color.secondaryFont};
`;

export const Link = styled.a`
  color: ${({ theme }) => theme.color.mainBlue};
`;
