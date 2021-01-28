import styled from "styled-components";

export const ContentContainer = styled.main`
    display: flex;
`;

export const Photo = styled.div`
    width: 398px;
    height: 398px;
    border-radius: 100%;
    background-color: grey;
`;

export const ContentBox = styled.div`
    display: flex;
    flex-direction: column;
`;

export const ThemeBox = styled.div`
    height: 26px;
    width: 159px;
    background-color: grey;
    align-self: flex-end;
    text-transform: uppercase;
`;

export const SmallContent = styled.p`
    font-size: 12px;
    line-height: 16px;
    font-weight: 700;
    text-transform: uppercase;
`;

export const AuthorName = styled.h1`
    font-size: 38px;
    line-height: 46px;
    font-weight: 900;
    text-transform: capitalize;
`;

export const Description = styled.h2`
    font-size: 20px;
    line-height: 28px;
    font-weight: 400;
`;

export const HireBox = styled.div`
    height: 49px;
    width: 154px;
    background-color: blue;
    text-transform: capitalize;
`;