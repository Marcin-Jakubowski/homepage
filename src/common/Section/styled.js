import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding: 32px;
  margin-bottom: 72px;
  background-color: ${({ theme }) => theme.color.secondaryBackground};
  border-radius: 4px;
  box-shadow: 0px -2px 50px rgba(9, 10, 51, 0.02),
    0px 16px 58px rgba(9, 10, 51, 0.03);
`;

export const HeaderContent = styled.h2`
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
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 8px;
`;

export const ListItem = styled.li`
  color: ${({ theme }) => theme.color.secondaryFont};
`;
