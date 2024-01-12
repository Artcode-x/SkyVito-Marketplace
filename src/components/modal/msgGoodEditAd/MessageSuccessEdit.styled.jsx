import styled from 'styled-components'

export const MsgForUser = styled.div`
    color: #009ee4;
    font-weight: 400;
    font-size: 38px;
    line-height: 24px;
    margin-top: 20px;
    text-align: center;
    padding-bottom: 40px;
    @media screen and (max-width: 590px) {
        display: none;
    }
`

export const glavnyi = styled.div`
    display: flex;
    justify-content: center;
    text-align: center;
    background-color: white;
    opacity: 0.8;
    @media screen and (max-width: 590px) {
        display: none;
    }
`
