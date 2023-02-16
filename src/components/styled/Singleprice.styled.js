import styled from "styled-components";

export const Vstack = styled.div`
    display: flex;
    flex-direction: column;
`
export const Hstack = styled.div`
    display: flex;
    flex-direction: row;
`
export const Hstackflexi = styled(Hstack)`
    @media screen and (max-width:600px){
        flex-direction: column;
    }
`
export const Styledsingleprice = styled(Vstack)`
    width: 580px;
    height: 420px;
    margin: 20px 0;
    box-shadow: 0 15px 20px rgba(0,0,0,0.1);
    @media screen and (max-width:600px){
        width: auto;
        height: auto;
        margin: 30px 30px;
    }
`
//styled for top section :
export const Joincommunity = styled(Vstack)`
    width: 580px;
    height : 195px;
    border-radius: 6px 6px 0 0;
    background-color: #fff;
    h1{
        font-size: 1.4rem;
        font-weight: var(--bold);
        color: var(--Cyan);
        margin: 35px 35px 9px;
    }
    h2{
        font-size: 1.05rem;
        font-weight: var(--bold);
        color: var(--Bright-Yellow);
        margin: 9px 35px 6px;
    }
    h3{
        font-size: .9rem;
        font-weight: var(--reguler);
        line-height: 1.45rem;
        color: var(--Grayish-Blue);
        margin: 6px 35px auto;
    }
    @media screen and (max-width:600px){
        width: auto;
        height : auto;
        padding-bottom: 20px;
        margin: 0;
        h1{
            margin: 25px 35px 9px;
        }
    }
`
//styled for bottom left section :
export const Monthlysubscribe = styled(Vstack)`
    width: 290px;
    height : 225px;
    color: #fff;
    border-radius: 0 0 0 7px;
    background-color: var(--Cyan);
    h1{
        font-size: 1.8rem;
        font-weight: var(--bold);
        margin: 5px 10px 0 35px;
    }
    h2{
        font-size: 1rem;
        font-weight: var(--bold);
        margin: 35px 35px 10px;
    }
    h3{
        font-size: .85rem;
        font-weight: var(--reguler);
        margin: 5px 35px 30px;
    }
    span{
        font-size: .9rem;
        font-weight: var(--reguler);
        color: var(--Light-Gray);
        margin: 13px 0;
    }
    @media screen and (max-width:600px){
        width: auto;
        height : auto;
        border-radius: 0;
        padding-bottom: 20px;
        margin: 0;
        h2{
        margin: 25px 35px 10px;
        }
    }
`
export const ButtonSignUp = styled.button`
    width: 220px;
    height: 40px;
    font-size: .9rem;
    font-weight: var(--bold);
    color: #fff;
    border-radius: 5px;
    border-style: none;
    background-color: var(--Bright-Yellow);
    box-shadow: 0 10px 30px rgba(0,0,0,0.15);
    margin: 0 auto;
    &:hover{
        border-style: solid;
        border-color: var(--Bright-Yellow);
        color: var(--Bright-Yellow);
        background-color: var(--Light-Gray);
        cursor: pointer;
    }
    @media screen and (max-width:600px){
        width: 250px;
        margin-bottom: 5px;
    }
`
//styled for bottom right section :
export const Whyus = styled(Vstack)`
    width: 290px;
    height : 225px;
    border-radius: 0 0 7px 0;
    background-color:var(--Light-Cyan);
    ul{
        font-size: .8rem;
        font-weight: var(--reguler);
        color:var(--Light-Gray);
        padding:0;
        margin: 10px 10px 0 35px;
        list-style: none;
    }
    li{
       margin-bottom:3px;
    }
    h2{
        font-size: 1rem;
        font-weight: var(--bold);
        color:var(--Light-Gray);
        margin: 35px 35px 10px;
    }
    @media screen and (max-width:600px){
        width: auto;
        height : auto;
        padding-bottom: 20px;
        border-radius: 0 0 7px 7px;
        h2{
            margin: 25px 35px 10px;
        }
    }
`
//Styled for Attribution :
export const Attribution = styled.div`
    display: flex;
    margin: 10px auto 0;
    font-size: 12px;
    text-align: center;
    @media screen and (max-width:600px){
        flex-direction: column;
        margin: 10px 20px 5px;
    }
`
export const AttributionA = styled(Attribution)`
    color: hsl(228, 45%, 44%);
`