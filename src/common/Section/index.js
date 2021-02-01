import React from "react";
import { Container, HeaderContent, ItemsList, ListItem } from "./styled";

const Section = ({ header, body }) => (
  <Container>
    <HeaderContent>{header}</HeaderContent>
    <ItemsList>
      {body && body.map((fragment) => <ListItem>{fragment}</ListItem>)}
    </ItemsList>
  </Container>
);

export default Section;
