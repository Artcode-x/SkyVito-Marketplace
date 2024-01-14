import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import CustomHeader from '../../components/custom-header/custom-header'
import * as S from './main.styled'
import img from '../../components/img/logo.png'
import Products from '../../components/products/products'
import { searchUpdate } from '../../store/reducers/reducers'
import imgMobile from '../../components/img/logo-mob.png'
import AddAds from '../../components/modal/addAds/addAds'
import { showAddNewAdWindwowSelector } from '../../store/selectors/selectors'

function Main() {
    const showAddNewAd = useSelector(showAddNewAdWindwowSelector)
    const dispatch = useDispatch()

    return (
        <S.Parent>
            <S.HideMobileVer>
                <CustomHeader />
            </S.HideMobileVer>

            {showAddNewAd && (
                <S.Cover>
                    <AddAds />
                </S.Cover>
            )}

            <S.MainSearch>
                {/* desktop */}
                <S.SearchLogoLink href="#" target="blank">
                    <Link to="/">
                        <S.SearchLogoImg src={img} alt="logo" />
                    </Link>
                </S.SearchLogoLink>
                {/* for mobile */}
                <S.SearchLogoMobLink>
                    <Link to="/">
                        <S.SearchLogoMobImg src={imgMobile} alt="logo" />
                    </Link>
                </S.SearchLogoMobLink>
                <S.SearchForm action="#">
                    {/* поиск */}
                    <S.SearchText
                        type="search"
                        name="search"
                        onChange={(e) => dispatch(searchUpdate(e.target.value))}
                    />
                    {/* for mobile */}
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
        </S.Parent>
    )
}

export default Main
