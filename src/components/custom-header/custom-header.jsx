import { Link, useLocation, useNavigate, useParams } from 'react-router-dom'
// import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as S from '../header/header.styled'
import { userSelector } from '../../store/selectors/selectors'
import { formatEmail, formatUrl } from '../../helpers/helpers'
// import img from '../img/logo-mob.png'

import imgMobile from '../img/logo-mob.png'
import * as Mob from './custom-header.styled'

import { addNewAdUpdate } from '../../store/reducers/reducers'

function CustomHeader() {
    const dispatch = useDispatch()

    const location = useLocation().pathname
    const user = useSelector(userSelector)
    const navigate = useNavigate()
    const params = useParams()

    // useEffect(() => {
    //     console.log(location)
    // }, [])

    const onClickPutAd = () => {
        //  navigate('/putAd')
        dispatch(addNewAdUpdate(true))
    }

    const clickToProfile = () => {
        if (!user.id) {
            navigate('/login')
        } else if (user.id) {
            navigate(
                `/profile/${formatUrl(formatEmail(user.email))}_${user.id}`
            )
        }
    }

    return (
        <S.Header>
            <S.HeaderNav>
                <S.HeaderLogo>
                    {/* mob */}
                    {/* <S.LogoMobLink>
                        <Link to="/">
                            <S.LogoMobImg src={img} alt="logo" />
                        </Link>
                    </S.LogoMobLink> */}
                    {/* dsd */}

                    {/* {showAddNewAd ? <AddAds /> : null} */}

                    <Mob.Header>
                        <Mob.LogoMobLink>
                            <Link to="/">
                                <Mob.LogoMobImg src={imgMobile} alt="logo" />
                            </Link>
                        </Mob.LogoMobLink>
                    </Mob.Header>
                    {/* sda */}
                </S.HeaderLogo>
                {location === '/' && (
                    <S.HeaderBtnMainEnter
                        onClick={clickToProfile}
                        type="button"
                    >
                        Вход в личный кабинет
                    </S.HeaderBtnMainEnter>
                )}

                {location === `/selProfile/${params.id}` && (
                    <>
                        <S.headerBtnPutAd
                            onClick={() => onClickPutAd()}
                            type="button"
                        >
                            Разместить обьявление
                        </S.headerBtnPutAd>
                        <S.headerBtnLk onClick={() => navigate('/login')}>
                            Личный кабинет
                        </S.headerBtnLk>
                    </>
                )}

                {location === `/profile/${params.id}` && (
                    <S.headerBtnPutAd
                        onClick={() => onClickPutAd()}
                        type="button"
                    >
                        Разместить обьявление
                    </S.headerBtnPutAd>
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
