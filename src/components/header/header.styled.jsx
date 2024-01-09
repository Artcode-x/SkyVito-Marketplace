import styled from 'styled-components'

// вход в личный каб

export const Header = styled.header`
    background-color: #009ee4;
    @media screen and (max-width: 590px) {
        /* display: none; */
        display: flex;
        box-sizing: border-box;
        width: 100%;
        height: 57px;
        /* display: none; */
        // justify-content: flex-start;
    }
`

export const HeaderNav = styled.nav`
    max-width: 1178px;
    margin: 0 auto;
    padding: 0 10px;
    height: 79px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: end;
    -ms-flex-pack: end;
    justify-content: end;
`
export const HeaderBtnMainEnter = styled.button`
    width: 224px;
    height: 40px;
    border: 1px solid #ffffff;
    border-radius: 6px;
    background-color: transparent;
    color: #ffffff;
    font-size: 16px;
    line-height: 1;
    cursor: pointer;
    &:hover {
        background: rgba(255, 255, 255, 0.15);
        border: 1px solid #ffffff;
    }
`
//

export const header = styled.div`
    background-color: #009ee4;
`

export const headerNav = styled.nav`
    max-width: 1178px;
    height: 55px;
    justify-content: start;
    padding: 0 20px;
    margin: 0 auto;
    padding: 0 10px;
    height: 79px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: end;
    -ms-flex-pack: end;
    justify-content: end;
`

export const headerBtnLk = styled.button`
    width: 173px;
    height: 40px;
    margin-left: 10px;
    /* display: none; */
    border: 1px solid #ffffff;
    border-radius: 6px;
    background-color: transparent;
    color: #ffffff;
    font-size: 16px;
    line-height: 1;

    appearance: auto;

    letter-spacing: normal;
    word-spacing: normal;
    line-height: normal;
    text-transform: none;
    text-indent: 0px;
    text-shadow: none;
    display: inline-block;
    text-align: center;

    &:hover {
        background: rgba(255, 255, 255, 0.15);
        border: 1px solid #ffffff;
        cursor: pointer;
    }
    @media screen and (max-width: 620px) {
        display: none;
    }
`

export const headerBtnPutAd = styled.button`
    width: 232px;
    height: 40px;
    /* display: none; */
    border: 1px solid #ffffff;
    border-radius: 6px;
    background-color: transparent;
    color: #ffffff;
    font-size: 16px;
    line-height: 1;

    display: inline-block;
    text-align: center;
    &:hover {
        background: rgba(255, 255, 255, 0.15);
        border: 1px solid #ffffff;
        cursor: pointer;
    }
    @media screen and (max-width: 620px) {
        display: none;
        /* width: 200px;
        height: 33px; */
    }
`
// export headerLogo = styled.img``
export const HeaderLogo = styled.div`
    display: none;
    @media screen and (max-width: 620px) {
        display: block;
    }
`

export const LogoMobLink = styled.div`
    @media screen and (max-width: 620px) {
        display: block;
        width: 32px;
        height: 32px;
    }
`
export const LogoMobImg = styled.img`
    // display: none;
    @media screen and (max-width: 620px) {
        width: 32px;
        height: auto;
        display: block;
        -o-object-fit: cover;
        object-fit: cover;
    }
`
