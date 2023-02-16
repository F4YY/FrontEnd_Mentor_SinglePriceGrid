import styled from "styled-components";

export const Container = styled.div`
    --Cyan: hsl(179, 62%, 43%);
    --Light-Cyan: hsl(180, 50%, 50%);
    --Bright-Yellow: hsl(71, 73%, 54%);
    --Light-Gray: hsl(204, 43%, 93%);
    --Grayish-Blue: hsl(218, 22%, 67%);
    font-size: 16px;
    font-family: Karla;
    --reguler:400;
    --bold:700;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    width:100wh;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    background-color: var(--Light-Gray);
`