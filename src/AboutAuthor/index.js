import React from "react";
import { AuthorName, ContentBox, ContentContainer, Description, HireBox, Photo, SmallContent, ThemeBox } from "./styled";

const AboutAuthor = () => (
    <ContentContainer>
        <Photo />
        <ContentBox>
            <ThemeBox></ThemeBox>
            <SmallContent>this is</SmallContent>
            <AuthorName>marcin jakubowski</AuthorName>
            <Description>description content</Description>
            <HireBox></HireBox>
        </ContentBox>
    </ContentContainer>
);

export default AboutAuthor;