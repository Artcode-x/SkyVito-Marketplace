import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import CustomHeader from '../../components/custom-header/custom-header'
import * as S from './main.styled'
import img from '../../components/img/logo.png'
import Products from '../../components/products/products'
import { searchUpdate } from '../../store/reducers/reducers'
import imgMobile from '../../components/img/logo-mob.png'
// import Footer from '../../components/footer/footer'

function Main() {
    const dispatch = useDispatch()

    return (
        <S.Parent>
            {/* Был конфликт с заголовком */}
            {/* {window.innerWidth <= 600 ? null : <CustomHeader />} */}

            <S.HideMobileVer>
                <CustomHeader />
            </S.HideMobileVer>

            {/* <S.HideOrNot $display="none"> */}
            {/* {windowSize < 590 && } */}

            {/* </S.HideOrNot> */}
            <S.MainSearch>
                {/* desktop */}
                <S.SearchLogoLink href="#" target="blank">
                    <Link to="/">
                        <S.SearchLogoImg src={img} alt="logo" />
                    </Link>
                </S.SearchLogoLink>
                {/* для моб-ой */}
                <S.SearchLogoMobLink>
                    <Link to="/">
                        <S.SearchLogoMobImg src={imgMobile} alt="logo" />
                    </Link>
                </S.SearchLogoMobLink>
                <S.SearchForm action="#">
                    {/* А тут поиск */}
                    <S.SearchText
                        type="search"
                        name="search"
                        onChange={(e) => dispatch(searchUpdate(e.target.value))}
                    />
                    {/* для моб-ой */}
                    <S.SearchTextMob
                        type="search"
                        name="search"
                        onChange={(e) => dispatch(searchUpdate(e.target.value))}
                    />
                </S.SearchForm>
                <S.SearchBtn>Найти</S.SearchBtn>
            </S.MainSearch>
            <S.MainContainer>
                <S.MainH2>Обьявления</S.MainH2>
                <Products />
            </S.MainContainer>
            {/* <Footer /> */}
        </S.Parent>
        // <button type="button" onClick={click}>
        //     KNOPKA
        // </button>
    )
}

export default Main
