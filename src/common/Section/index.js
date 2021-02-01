import React from "react";
import { Container, HeaderContent } from "./styled";

const Section = (header, body) => (
    <Container>
        <HeaderContent>
            {header}
        </HeaderContent>
        <ItemsList>
            {body}
        </ItemsList>
    </Container>
);

export default Section;