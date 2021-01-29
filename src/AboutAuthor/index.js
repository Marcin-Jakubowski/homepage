import React from "react";
import mailIcon from "./mailIcon.svg";
import { AuthorName, ContentBox, ContentContainer, Description, HireBox, MailIcon, Photo, SmallContent, ThemeBox } from "./styled";

const AboutAuthor = () => (
    <ContentContainer>
        <Photo />
        <ContentBox>
            <ThemeBox>theme</ThemeBox>
            <SmallContent>this is</SmallContent>
            <AuthorName>marcin jakubowski</AuthorName>
            <Description>description content</Description>
            <HireBox>
                <MailIcon src={mailIcon} alt="Mail Icon" />
                hire me
            </HireBox>
        </ContentBox>
    </ContentContainer>
);

export default AboutAuthor;