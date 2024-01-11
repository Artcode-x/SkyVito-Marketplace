import styled from 'styled-components'

export const Parent = styled.div`
    background-color: white;
`

export const MainMenu = styled.div`
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
    padding: 43px 5px 77px;
`
export const MenuLogoLink = styled.a``
export const MenuLogoImg = styled.a`
    width: 54px;
    height: auto;
    cursor: pointer;
`

export const MainContainer = styled.div`
    max-width: 1178px;
    margin: 0 auto;
    padding: 0px 10px 79px;
`

// export const MainCenterBlock = styled.div`
//     margin: 0 auto;
//     padding: 0 20px;
// `

export const MainArtic = styled.div`
    max-width: 1178px;
    padding: 0 0 70px;
    margin: 0 auto;
    padding: 0 5px 70px;
    @media screen and (max-width: 768px) {
        max-width: 1178px;
        width: 100%;
        //   padding: 55px 0 0px;
        padding: 5px 0 0px;
        margin: 0 auto;
    }
`
export const ArticContent = styled.div`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: top;
    -ms-flex-align: top;
    align-items: top;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    /* justify-content: center; */
    justify-content: flex-start;
    @media screen and (max-width: 768px) {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
    }
`
export const ArticleLeft = styled.div`
    max-width: 480px;
    margin-right: 54px;
    @media screen and (max-width: 890px) {
        margin-right: 20px;
    }
    @media screen and (max-width: 768px) {
        max-width: 100%;
        width: 100%;
        min-width: 320px;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        margin-right: 0;
        margin-bottom: 20px;
    }
`

export const ArticleFillImg = styled.div`
    width: 100%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    &:hover::before {
        border-top: 2px solid #0080c1;
        border-left: 2px solid #0080c1;
    }
    @media screen and (max-width: 768px) {
        max-width: 100%;
        width: 100%;
        overflow: hidden;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
        position: relative;
        &::before {
            content: '';
            display: block;
            width: 23px;
            height: 23px;
            background-color: transparent;
            border-top: 2px solid #000000;
            border-left: 2px solid #000000;
            -webkit-transform: rotate(-45deg);
            transform: rotate(-45deg);
            position: absolute;
            top: 24px;
            left: 32px;
            cursor: pointer;
        }
    }
`
export const ArticleImgDiv = styled.div`
    width: 480px;
    height: 480px;
    background-color: #f0f0f0;
    margin: 0 5px;
    @media screen and (max-width: 768px) {
        width: 100%;
        min-width: 320px;
        height: auto;
        min-height: 320px;
        margin: 0 0px;
    }
`
export const ArticleImgImg = styled.img`
    width: 100%;
    height: auto;
    display: block;
    -o-object-fit: cover;
    object-fit: cover;
`
export const ArticleImgBar = styled.div`
    margin-top: 30px;
    width: 490px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: left;
    -ms-flex-pack: left;
    justify-content: left;
    overflow: hidden;
    margin-left: -5px;
    @media screen and (max-width: 768px) {
        display: none;
    }
`
export const ArticleImgBarDiv = styled.div`
    width: 88px;
    min-width: 88px;
    height: 88px;
    background-color: #f0f0f0;
    border: 2px solid #f0f0f0;
    margin: 0 5px;
`

// export const ArticleBarDiv = styled.div`
//     width: 88px;
//     min-width: 88px;
//     height: 88px;
//     background-color: #f0f0f0;
//     border: 2px solid #f0f0f0;
//     margin: 0 5px;
// `
export const ArticleBarDivImg = styled.img`
    width: 100%;
    height: auto;
    display: block;
    -o-object-fit: cover;
    object-fit: cover;
    //
    cursor: pointer;
    &:hover {
        opacity: 1;
    }
`

export const ArticleRight = styled.div`
    max-width: 621px;
    @media screen and (max-width: 768px) {
        max-width: 100%;
        width: 100%;
        padding: 0 20px;
    }
`
export const ArticleBlock = styled.div`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
`
export const ArticleTitle = styled.h3`
    margin-bottom: 10px;
    font-size: 32px;
    line-height: 46px;
    font-weight: 500;
    color: #000000;
    @media screen and (max-width: 768px) {
        margin-bottom: 10px;
        font-size: 18px;
        line-height: 1;
    }
`
export const ArticleInfo = styled.div`
    margin-bottom: 34px;
    @media screen and (max-width: 768px) {
        margin-bottom: 20px;
    }
`
export const ArticleDate = styled.p`
    font-size: 16px;
    line-height: 21px;
    color: #5f5f5f;
    margin-bottom: 4px;
    @media screen and (max-width: 768px) {
        font-size: 14px;
        line-height: 17px;
        color: #5f5f5f;
        margin-bottom: 4px;
    }
`
export const ArticleCity = styled.p`
    font-size: 16px;
    line-height: 21px;
    color: #5f5f5f;
    margin-bottom: 4px;
    @media screen and (max-width: 768px) {
        font-size: 14px;
        line-height: 17px;
        color: #5f5f5f;
        margin-bottom: 4px;
    }
`

// export const ArticleLink = styled.p`
//     font-size: 16px;
//     line-height: 21px;
//     color: #009ee4;
//     text-decoration: none;
//     font-family: 'StratosSkyeng', sans-serif;
//     cursor: pointer;
//     @media screen and (max-width: 768px) {
//         font-size: 14px;
//         line-height: 19px;
//         color: #009ee4;
//     }
// `

export const ArticlePrice = styled.p`
    font-size: 28px;
    line-height: 39px;
    font-weight: 700;
    margin-bottom: 20px;
    @media screen and (max-width: 768px) {
        font-size: 18px;
        line-height: 25px;
        font-weight: 700;
        margin-bottom: 20px;
    }
`

export const specialButtonForReviews = styled.button`
    font-size: 16px;
    line-height: 21px;
    color: #009ee4;
    background: transparent;
    border: none;
    text-align: left;
    cursor: pointer;
`

export const ArticleBtn = styled.button`
    background-color: #009ee4;
    border-radius: 6px;
    border: 1px solid #009ee4;
    width: 214px;
    height: 62px;
    font-size: 16px;
    font-weight: 500;
    line-height: 22px;
    color: #ffffff;
    font-family: 'Roboto', sans-serif;
    cursor: pointer;
    &:hover {
        background-color: #0080c1;
    }
    @media screen and (max-width: 768px) {
        width: 100%;
        height: 57px;
        font-size: 14px;
        line-height: 20px;
        color: #ffffff;
    }
`
export const ArticleBtnSpan = styled.span`
    display: block;
    font-size: 14px;
    font-weight: 400;
    @media screen and (max-width: 768px) {
        font-size: 12px;
    }
`

export const ArticleAuthor = styled.div`
    margin-top: 34px;
    margin-bottom: 20px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-box-align: start;
    -ms-flex-align: start;
    align-items: flex-start;
    @media screen and (max-width: 768px) {
        margin-top: 30px;
        margin-bottom: 30px;
    }
`
export const AuthorImg = styled.div`
    width: 40px;
    height: 40px;
    background-color: #f0f0f0;
    border-radius: 50%;
`
export const AuthorImgImg = styled.img`
    width: 100%;
    height: auto;
    display: block;
    -o-object-fit: cover;
    object-fit: cover;
`
export const AuthorCont = styled.div`
    margin-left: 12px;
`
export const AuthorName = styled.p`
    font-size: 20px;
    line-height: 26px;
    font-weight: 600;
    color: #009ee4;
    cursor: pointer;
    @media screen and (max-width: 768px) {
        font-size: 18px;
        line-height: 23px;
        font-weight: 600;
    }
`
export const AuthorAbout = styled.p`
    font-size: 16px;
    line-height: 32px;
    color: #5f5f5f;
    @media screen and (max-width: 768px) {
        font-size: 14px;
        line-height: 28px;
    }
`
export const MainTitle = styled.div`
    font-size: 32px;
    line-height: 46px;
    font-weight: 500;
    color: #000000;
    margin-bottom: 32px;
    padding: 0 5px;
    @media screen and (max-width: 768px) {
        margin-bottom: 14px;
        padding: 0;
        font-size: 18px;
        line-height: 1;
    }
`
export const MainContent = styled.div`
    max-width: 792px;
    width: 100%;
    padding: 0 5px 117px;
    @media screen and (max-width: 768px) {
        width: 100%;
        margin: 0 auto;
        padding: 0 0 84px;
    }
`
export const MainText = styled.p`
    font-size: 16px;
    line-height: 24px;
    color: #000000;
`

export const Cover = styled.div`
    width: 60vh;
    height: auto;
    position: fixed;
    top: 10%;
    left: 25%;
    right: 25%;
    z-index: 10;
    background-color: #908d8d;
    opacity: 0.9;
`

export const blur = styled.div`
    background-color: #d0cecd;
    width: 100vw;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;

    z-index: 10;
    opacity: 0.7;
`

export const StyledBlock = styled.div`
    display: grid;
    gap: 10px;
    grid-template-columns: 1fr 1fr;
`

export const MsgForUser = styled.div`
    color: #009ee4;
    font-weight: 400;
    font-size: 38px;
    line-height: 24px;
    margin-top: 20px;
    text-align: center;
    padding-bottom: 40px;
`
export const ArticleBtnSpan2 = styled.span`
    display: block;
    font-size: 14px;
    font-weight: 400;
    @media screen and (max-width: 768px) {
        font-size: 12px;
    }
`

export const ArticleBtn2 = styled.button`
    background-color: #009ee4;
    border-radius: 6px;
    border: 1px solid #009ee4;
    width: 214px;
    height: 62px;
    font-size: 16px;
    font-weight: 500;
    line-height: 22px;
    color: #ffffff;
    font-family: 'Roboto', sans-serif;
    cursor: pointer;
    &:hover {
        background-color: #0080c1;
    }
    @media screen and (max-width: 768px) {
        width: 100%;
        height: 57px;
        font-size: 14px;
        line-height: 20px;
        color: #ffffff;
    }
`

export const Xcover = styled.div`
    width: 60vh;
    height: auto;
    position: fixed;
    top: 10%;
    left: 25%;
    right: 25%;
    z-index: 10;
    background-color: #908d8d;
    opacity: 0.9;
`
