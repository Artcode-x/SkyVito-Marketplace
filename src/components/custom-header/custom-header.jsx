import { useLocation, useNavigate } from 'react-router-dom'
// import { useEffect } from 'react'
import * as S from '../header/header.styled'

function CustomHeader() {
    const location = useLocation().pathname

    const navigate = useNavigate()

    // useEffect(() => {
    //     console.log(location)
    // }, [])

    return (
        <S.Header>
            <S.HeaderNav>
                {location === '/' ? (
                    <S.HeaderBtnMainEnter onClick={() => navigate('/login')}>
                        Вход в личный кабинет
                    </S.HeaderBtnMainEnter>
                ) : (
                    <>
                        <S.headerBtnPutAd onClick={() => navigate('/putAd')}>
                            Разместить обьявление
                        </S.headerBtnPutAd>
                        <S.headerBtnLk onClick={() => navigate('/login')}>
                            Личный кабинет
                        </S.headerBtnLk>
                    </>
                )}
            </S.HeaderNav>
        </S.Header>

        // <S.header>
        //     <S.headerNav>
        //         <S.headerBtnPutAd onClick={() => navigate('/putAd')}>
        //             Разместить обьявление
        //         </S.headerBtnPutAd>
        //         <S.headerBtnLk onClick={() => navigate('/login')}>
        //             Личный кабинет
        //         </S.headerBtnLk>
        //     </S.headerNav>
        // </S.header>
    )
}

export default CustomHeader
