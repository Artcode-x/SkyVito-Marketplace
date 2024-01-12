import { Link, useLocation, useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import * as S from '../header/header.styled'
import { userSelector } from '../../store/selectors/selectors'
import { formatEmail, formatUrl } from '../../helpers/helpers'
import imgMobile from '../img/logo-mob.png'
import * as Mob from './custom-header.styled'
import { addNewAdUpdate } from '../../store/reducers/reducers'

function CustomHeader() {
    const dispatch = useDispatch()

    const location = useLocation().pathname
    const user = useSelector(userSelector)
    const navigate = useNavigate()
    const params = useParams()

    const onClickPutAd = () => {
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
                    <Mob.Header>
                        <Mob.LogoMobLink>
                            <Link to="/">
                                <Mob.LogoMobImg src={imgMobile} alt="logo" />
                            </Link>
                        </Mob.LogoMobLink>
                    </Mob.Header>
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
    )
}

export default CustomHeader
