import styled from 'styled-components'

export const Wrapper = styled.div`
    width: 100%;
    min-height: 100%;
    overflow: hidden;
    background-color: #f1f1f1;
    display: flex;
    flex-direction: column;
`

export const Container = styled.div`
    max-width: 1440px;
    width: 100%;
    margin: 0 auto;
    background-color: #ffffff;
    /* max-width: 1178px;
    margin: 0 auto;
    padding: 0px 5px 79px; */
`

// header вынес в отдельный компонент / в components

export const Main = styled.main`
    margin: 0 auto;
`
export const MainContainer = styled.div`
    max-width: 1178px;
    margin: 0 auto;
    padding: 0px 10px 79px;
`

export const MainCenterBlock = styled.div`
    margin: 0 auto;
    padding: 0 20px;
`

export const MainH2 = styled.h2`
    font-size: 40px;
    line-height: 42px;
    color: #000000;
    margin-bottom: 30px;
`
// MainMenu (UpMenu) вынес в отдельный компонент

// MainProfile вынес в отдельный компонент
export const MainProfile = styled.div`
    width: 100%;
    padding: 0 0 70px;
`
export const ProfileContent = styled.div`
    max-width: 834px;
`
export const ProfileTitle = styled.h3`
    font-size: 32px;
    line-height: 70px;
    color: #000000;
`

export const ProfileSettings = styled.div`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: top;
    -ms-flex-align: top;
    align-items: top;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
`

export const SettingsLeft = styled.div`
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
    margin-right: 43px;
`
// вложения в settingsLeft
export const SettingsImg = styled.div`
    width: 170px;
    height: 170px;
    border-radius: 50%;
    background-color: #f0f0f0;
`
export const Img = styled.img`
    width: 100%;
    height: auto;
    display: block;
    -o-object-fit: cover;
    object-fit: cover;
`
export const SettingsChangeFoto = styled.button`
    margin-top: 10px;
    margin-bottom: 30px;
    text-decoration: none;
    font-size: 16px;
    line-height: 24px;
    color: #009ee4;
    border: none;
    background: none;
    cursor: pointer;
`
// правая часть вложений
export const SettingsRight = styled.div`
    width: 630px;
`

export const SettingsForm = styled.form`
    width: 630px;
    display: -webkit-box;
    /* display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap; */
    display: inline-grid;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    grid-template-columns: repeat(2, 1fr);
`
export const SettingsFormInput = styled.input`
    background-color: #ffffff;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 6px;
    padding: 13px 19px;
    width: 300px;
`
export const SettingsFormLabel = styled.label`
    font-size: 16px;
    line-height: 24px;
    font-weight: 500;
    color: #c4c4c4;
    margin-bottom: 4px;
    display: block;
`
export const SettingsDiv = styled.div`
    display: inline-block;
    margin: 0 7px 20px;
`

export const SettingsBtn = styled.div`
    font-size: 16px;
    line-height: 1;
    color: #ffffff;
    width: 154px;
    height: 50px;
    margin: 10px 7px 0;
    background-color: #009ee4;
    border-radius: 6px;
    border: 1px solid #009ee4;
    cursor: pointer;
    align-items: center;
    display: flex;
    justify-content: center;
`
