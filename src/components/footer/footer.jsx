import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import * as S from './footer.styled'
import img01 from '../img/icon_01.png'
import img02 from '../img/icon_02.png'
import img03 from '../img/icon_03.png'
import { addNewAdUpdate } from '../../store/reducers/reducers'

function Footer() {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const setOpenFormAddAds = () => {
        dispatch(addNewAdUpdate(true))
    }

    const gotoGeneral = () => {
        navigate('/')
    }

    return (
        <S.Footer>
            <S.FooterContainer>
                <S.FooterImg>
                    <S.Img src={img01} alt="home" onClick={gotoGeneral} />
                </S.FooterImg>
                <S.FooterImg>
                    <S.Img src={img02} alt="add" onClick={setOpenFormAddAds} />
                </S.FooterImg>
                <S.FooterImg>
                    <Link to="/login">
                        <S.Img src={img03} alt="login" />
                    </Link>
                </S.FooterImg>
            </S.FooterContainer>
        </S.Footer>
    )
}

export default Footer
