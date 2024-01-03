import { useDispatch, useSelector } from 'react-redux'

import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import CustomHeader from '../../components/custom-header/custom-header'
import UpMenu from '../../components/up-menu/up-menu'
import * as S from './advpage.styled'
import noPhoto from '../../components/img/no-photo.avif'
import { userSelProdSelector } from '../../store/selectors/selectors'
import { userStateUpdate2 } from '../../store/reducers/reducers'
import { formatDate, formatSellsDate } from '../../helpers/helpers'

function AdvPage() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    // обращаемся к данным с редакса, для пол-ия объявления что выбрал user, и используем как ключ
    const UserSelectProd = useSelector(userSelProdSelector)

    // изн номер скрыт
    const [userPhoneBtn, setShowUserPhoneBtn] = useState(true)
    const showUserPhone = () => {
        // показать номер по нажатию
        setShowUserPhoneBtn(false)
    }

    const clickToSellerProfile = () => {
        dispatch(userStateUpdate2(UserSelectProd.user))
        navigate(`/selProfile/${UserSelectProd.user.id}`)
    }
    return (
        <>
            {/* <Header /> */}
            <CustomHeader />
            <S.MainContainer>
                {/* <S.MainMenu> */}
                <UpMenu />
                {/* </S.MainMenu> */}
                <S.MainArtic>
                    <S.ArticContent>
                        <S.ArticleLeft>
                            <S.ArticleFillImg>
                                <S.ArticleImgDiv>
                                    {/* тут фотка товара */}
                                    <S.ArticleImgImg
                                        src={`http://localhost:8090/${UserSelectProd.images[0]?.url}`}
                                    />
                                </S.ArticleImgDiv>
                                <S.ArticleImgBar>
                                    {/* тут будет метод map изображений */}
                                    {UserSelectProd.images?.map((img) => (
                                        <S.ArticleImgBarDiv key={img.id}>
                                            <S.ArticleBarDivImg
                                                src={`http://localhost:8090/${img.url}`}
                                                // src={`http://localhost:8090/${img.images[0].url}`}
                                            />
                                        </S.ArticleImgBarDiv>
                                    ))}
                                </S.ArticleImgBar>
                                {/* тут что то под моб версию */}
                            </S.ArticleFillImg>
                        </S.ArticleLeft>

                        <S.ArticleRight>
                            <S.ArticleBlock>
                                <S.ArticleTitle>
                                    {UserSelectProd.title}
                                </S.ArticleTitle>
                                <S.ArticleInfo>
                                    <S.ArticleDate>
                                        {/* Берем ф-ию с helpers для форматирования отображения даты */}
                                        {formatDate(UserSelectProd.created_on)}
                                    </S.ArticleDate>
                                    <S.ArticleCity>
                                        {UserSelectProd.user?.city}
                                    </S.ArticleCity>
                                </S.ArticleInfo>
                                <S.ArticlePrice>
                                    {UserSelectProd.price}
                                </S.ArticlePrice>
                                <S.ArticleBtn onClick={showUserPhone}>
                                    Показать телефон
                                    <S.ArticleBtnSpan>
                                        {userPhoneBtn
                                            ? `+7 XXX XXX XX XX`
                                            : UserSelectProd.user?.phone}
                                    </S.ArticleBtnSpan>
                                </S.ArticleBtn>

                                <S.ArticleAuthor>
                                    <S.AuthorImg>
                                        {/* Покажем аватар если он есть */}
                                        {UserSelectProd.user?.avatar ? (
                                            <S.AuthorImgImg
                                                src={`http://localhost:8090/${UserSelectProd.user.avatar}`}
                                                alt="avaUsera"
                                            />
                                        ) : (
                                            <S.AuthorImgImg
                                                src={noPhoto}
                                                alt="noAva"
                                            />
                                        )}
                                    </S.AuthorImg>

                                    <S.AuthorCont
                                        key={UserSelectProd.user?.id}
                                        onClick={
                                            () => clickToSellerProfile()
                                            // navigate(
                                            //     `/profile/${UserSelectProd.user.id}`)
                                        }
                                    >
                                        <S.AuthorName>
                                            {UserSelectProd.user?.name}
                                        </S.AuthorName>
                                        <S.AuthorAbout>
                                            Продает товары с{' '}
                                            {formatSellsDate(
                                                UserSelectProd.user.sells_from
                                            )}
                                            {/* {UserSelectProd.user?.sells_from} */}
                                        </S.AuthorAbout>
                                    </S.AuthorCont>
                                </S.ArticleAuthor>
                            </S.ArticleBlock>
                        </S.ArticleRight>
                    </S.ArticContent>
                </S.MainArtic>

                <S.MainTitle>{UserSelectProd.title}</S.MainTitle>
                <S.MainContent>
                    {/* описание в этом блоке будем получать с {data} */}
                    <S.MainText>{UserSelectProd.description}</S.MainText>
                </S.MainContent>
            </S.MainContainer>
        </>
    )
}

export default AdvPage
