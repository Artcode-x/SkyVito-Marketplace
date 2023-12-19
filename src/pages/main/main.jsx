// import { useDispatch, useSelector } from 'react-redux'
// import { userSelector } from '../../store/selectors/selectors'
// import {
//     userStateUpdate,
//     userStateUpdate2,
// } from '../../store/reducers/reducers'
import { Link } from 'react-router-dom'
import Header from '../../components/header/header'
import * as S from './main.styled'
import img from '../../components/img/logo.png'
import Products from '../../components/products/products'

function Main() {
    // const dispatch = useDispatch()
    // const user = useSelector(userSelector)
    // const click = () => {
    //     console.log(user)
    //     dispatch(userStateUpdate())
    //     dispatch(userStateUpdate2('test2'))
    // }
    return (
        <>
            <Header />
            <S.MainSearch>
                <S.SearchLogoLink href="#" target="blank">
                    <Link to="/">
                        <S.SearchLogoImg src={img} alt="logo" />
                    </Link>
                </S.SearchLogoLink>

                <S.SearchForm action="#">
                    {/* А тут поиск */}
                    <S.SearchText
                        type="search"
                        name="search"
                        // onChange={(e) => setSearchType(e.target.value)}
                    />
                </S.SearchForm>
                <S.SearchBtn>Найти</S.SearchBtn>
            </S.MainSearch>
            <S.MainContainer>
                <S.MainH2>Обьявления</S.MainH2>
                <Products />
            </S.MainContainer>
        </>
        // <button type="button" onClick={click}>
        //     KNOPKA
        // </button>
    )
}

export default Main
