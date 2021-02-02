import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Logo = styled.img`
    display: block;
    min-width: 40px;
    height: 40px;
    margin-bottom: 13px;
`;

export const Header = styled.h2`
    margin: 0;
    font-size: 30px;
    line-height: 36px;
    font-weight: 900;
    text-transform: capitalize;
`;

export const SubHeader = styled.p`
    margin: 0;
    font-size: 20px;
    line-height: 28px;
    font-weight: 400;
`;