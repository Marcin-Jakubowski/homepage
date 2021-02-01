import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding: 32px;
  background-color: white;
`;

export const HeaderContent = styled.p`
  font-size: 30px;
  line-height: 36px;
  font-weight: 900;
  margin: 0;
`;

export const ItemsList = styled.div`
  font-size: 18px;
  line-height: 25px;
  font-weight: 400;
`;

export const ListItem = styled.li`
  color: ${({ theme }) => theme.color.secondaryFont};
`;
