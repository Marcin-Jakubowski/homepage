import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
`;

export const SmallContent = styled.p`
  font-size: 12px;
  line-height: 16px;
  font-weight: 700;
  text-transform: uppercase;
  color: ${({theme}) => theme.color.secondaryFont};
`;

export const Mail = styled.address`
  font-size: 32px;
  line-height: 39px;
  font-weight: 900;
`;

export const Content = styled.p`
  font-size: 18px;
  line-height: 25px;
  font-weight: 400;
`;