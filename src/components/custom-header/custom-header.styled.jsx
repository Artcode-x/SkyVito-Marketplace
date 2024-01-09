import styled from 'styled-components'

// const size = {
//     mobile: '590px',
// }
// export const device = {
//     mobile: `(min-width: ${size.mobile})`,
// }

// export const hideOrNotDiv = styled.div`
//     @media screen and (max-width: 600px) {
//         display: none;
//     }
// `
export const Header = styled.div`
    width: 100%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    padding: 11px 0;
    max-width: 1178px;
    margin: 0 auto;
    padding: 31px 10px 0px;
    @media screen and (max-width: 590px) {
        box-sizing: border-box;
        width: -webkit-fill-available;
        height: 55px;
        background-color: #009ee4;
        -webkit-box-shadow: 0px 4px 25px rgba(0, 0, 0, 0.05);
        box-shadow: 0px 4px 25px rgba(0, 0, 0, 0.05);
        margin-bottom: 0px;
        padding: 11px 17px;
        position: fixed;
        left: 0;
        top: 0;
        z-index: 3;
    }
`
export const LogoLink = styled.a`
    text-decoration: none;
    cursor: pointer;
    @media screen and (max-width: 590px) {
        display: none;
    }
`
export const LogoImg = styled.img`
    width: 54px;
    height: auto;
`
export const LogoMobLink = styled.div`
    display: none;
    @media screen and (max-width: 590px) {
        display: block;
        width: 32px;
        height: 32px;
    }
`
export const LogoMobImg = styled.img`
    @media screen and (max-width: 590px) {
        width: 32px;
        height: auto;
        display: block;
        -o-object-fit: cover;
        object-fit: cover;
    }
`
