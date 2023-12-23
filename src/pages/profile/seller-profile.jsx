import * as S from './seller-profile.styled'
import Header from '../../components/header/header'
import UpMenu from '../../components/up-menu/up-menu'
import noPhoto from '../../components/img/no-photo.avif'

function SellerProfile() {
    return (
        <>
            <Header />
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
                                    <S.ArticleImgImg src={noPhoto} />
                                </S.ArticleImgDiv>
                                <S.ArticleImgBar>
                                    {/* тут будет метод map изображений */}
                                    <S.ArticleImgBarDiv>
                                        <S.ArticleBarDivImg src={noPhoto} />
                                    </S.ArticleImgBarDiv>
                                    <S.ArticleImgBarDiv>
                                        <S.ArticleBarDivImg src={noPhoto} />
                                    </S.ArticleImgBarDiv>
                                    <S.ArticleImgBarDiv>
                                        <S.ArticleBarDivImg src={noPhoto} />
                                    </S.ArticleImgBarDiv>
                                    <S.ArticleImgBarDiv>
                                        <S.ArticleBarDivImg src={noPhoto} />
                                    </S.ArticleImgBarDiv>
                                    <S.ArticleImgBarDiv>
                                        <S.ArticleBarDivImg src={noPhoto} />
                                    </S.ArticleImgBarDiv>
                                    {/* stop */}
                                </S.ArticleImgBar>
                                {/* тут что то под моб версию */}
                            </S.ArticleFillImg>
                        </S.ArticleLeft>

                        <S.ArticleRight>
                            <S.ArticleBlock>
                                <S.ArticleTitle>
                                    Ракетка для большого тенниса Triumph Pro STС
                                    Б/У
                                </S.ArticleTitle>
                                <S.ArticleInfo>
                                    <S.ArticleDate>
                                        Сегодня в 10:45
                                    </S.ArticleDate>
                                    <S.ArticleCity>
                                        Санкт-Петербург
                                    </S.ArticleCity>
                                </S.ArticleInfo>
                                <S.ArticlePrice>2 200 ₽</S.ArticlePrice>
                                {/* ТОЛЬКО ТУТ БЛОК МЕНЯЕТСЯ */}

                                {/* <S.ArticleBtn>
                                    Показать телефон
                                    <S.ArticleBtnSpan>
                                        8 905 ХХХ ХХ ХХ
                                    </S.ArticleBtnSpan>
                                </S.ArticleBtn> */}
                                <S.ArticleBtnBlock>
                                    <S.ArticleBtnRedact>
                                        Редактировать
                                    </S.ArticleBtnRedact>
                                    <S.ArticleBtnRemove>
                                        Снять с публикации
                                    </S.ArticleBtnRemove>
                                </S.ArticleBtnBlock>

                                <S.ArticleAuthor>
                                    {/* блок с картинкой */}
                                    <S.AuthorImg>
                                        <S.AuthorImgImg src={noPhoto} />
                                    </S.AuthorImg>
                                    <S.AuthorCont>
                                        <S.AuthorName>Кирилл</S.AuthorName>
                                        <S.AuthorAbout>
                                            Продает товары с августа 2021
                                        </S.AuthorAbout>
                                    </S.AuthorCont>
                                </S.ArticleAuthor>
                            </S.ArticleBlock>
                        </S.ArticleRight>
                    </S.ArticContent>
                </S.MainArtic>

                <S.MainTitle>Описание товара</S.MainTitle>
                <S.MainContent>
                    {/* описание в этом блоке будем получать с {data} */}
                    <S.MainText>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit
                        anim id est laborum.
                    </S.MainText>
                </S.MainContent>
            </S.MainContainer>
        </>
    )
}

export default SellerProfile
