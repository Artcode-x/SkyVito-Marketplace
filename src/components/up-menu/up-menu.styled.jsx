import styled from 'styled-components'

// export const Container = styled.div`
//     max-width: 1178px;
//     margin: 0 auto;
//     padding: 0px 10px 79px;
// `

export const MainMenu = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: start;
    padding: 11px 0;
    /* padding: 31px 10px 64px; */
    padding: 31px 10px 64px;
    @media screen and (max-width: 590px) {
        padding: 31px 10px 34px;
    }
`

export const MenuLogoLink = styled.div`
    width: 54px;
    height: 50px;
`

export const MenuLogoImg = styled.img`
    width: 54px;
    height: auto;
    @media screen and (max-width: 590px) {
        display: none;
        /* width: 34px;
        height: 30px; */
    }
`

export const MenuForm = styled.form`
    margin-left: 60px;
    max-width: 1044px;
    width: 100%;
    @media screen and (max-width: 620px) {
        display: flex;
    }
`

export const MenuBtnS = styled.button`
    width: 241px;
    height: 50px;
    background-color: #009ee4;
    border: 1px solid #009ee4;
    border-radius: 6px;
    font-size: 16px;
    line-height: 1;
    color: #ffffff;
    cursor: pointer;
    &:hover {
        background-color: #0080c1;
    }
    @media screen and (max-width: 620px) {
        width: 170px;
        font-size: small;
    }
`
export const ExitBtn = styled.button`
    margin-left: 10px;
    width: 158px;
    height: 50px;
    background-color: #009ee4;
    border: 1px solid #009ee4;
    border-radius: 6px;
    font-size: 16px;
    line-height: 24px;
    color: #ffffff;
    cursor: pointer;
    &:hover {
        background-color: #0080c1;
    }
    @media screen and (max-width: 620px) {
        width: 75px;
        font-size: small;
    }
`
