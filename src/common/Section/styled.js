import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding: 32px;
  background-color: ${({ theme }) => theme.color.secondaryBackground};
  border-radius: 4px;
`;

export const HeaderContent = styled.p`
  font-size: 30px;
  line-height: 36px;
  font-weight: 900;
  margin: 0 0 32px;
  padding-bottom: 15px;
  width: 100%;
  border-bottom: 1px solid ${({ theme }) => theme.color.sectionUnderline};
`;

export const ItemsList = styled.div`
  font-size: 18px;
  line-height: 25px;
  font-weight: 400;
  display: grid;
  grid-template-columns: repeat(3, 1fr)
`;

export const ListItem = styled.li`
  color: ${({ theme }) => theme.color.secondaryFont};
`;
