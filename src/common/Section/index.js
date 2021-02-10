import React from "react";
import { Container, HeaderContent, ItemsList, ListItem } from "./styled";
import { nanoid } from "@reduxjs/toolkit";

const Section = ({ header, body }) => (
  <Container>
    <HeaderContent>{header}</HeaderContent>
    <ItemsList>
      {body && body.map((fragment) => <ListItem key={nanoid()}>{fragment}</ListItem>)}
    </ItemsList>
  </Container>
);

export default Section;
