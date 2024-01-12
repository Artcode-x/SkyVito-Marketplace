import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import CustomHeader from '../../components/custom-header/custom-header'
import UpMenu from '../../components/up-menu/up-menu'
import * as S from './advpage.styled'
import noPhoto from '../../components/img/no-photo.avif'
import {
    flagforEditAdSelector,
    showEditAdWindowSelector,
    tokenSelector,
    userSelProdSelector,
    userSelector,
} from '../../store/selectors/selectors'
import {
    editPrice,
    formatDate,
    formatEmail,
    formatReviews,
    formatSellsDate,
    formatUrl,
} from '../../helpers/helpers'
import { delAdv, getCommentsAdv } from '../../api/api'
import Reviews from '../../components/reviews/reviews'
import Footer from '../../components/footer/footer'
import { addEditAdWindow, tokenUpdate } from '../../store/reducers/reducers'
import Msg from '../../components/modal/msg'
import EditAds from '../../components/modal/editAds/editAds'
import MessageSuccessEdit from '../../components/modal/msgGoodEditAd/MessageSuccessEdit'

function AdvPage() {
    const flagforModal = useSelector(showEditAdWindowSelector)
    const flagforEditAd = useSelector(flagforEditAdSelector)

    const dispatch = useDispatch()

    const userok = useSelector(userSelector)
    const userId = userok.id
    const userSelectAdv = useSelector(userSelProdSelector)
    const someAdvId = userSelectAdv.user_id

    const tokenFromState = useSelector(tokenSelector)

    const navigate = useNavigate()
    const [disabled, setdisabled] = useState(false)

    const [reviewsComments, setReviewsComments] = useState(false)
    const [showReviews, setShowReviews] = useState(false)
   
    const UserSelectProd = useSelector(userSelProdSelector)

   
    const [userPhoneBtn, setShowUserPhoneBtn] = useState(true)
    const [messageForUser, setMessageForUser] = useState(false)

    const showUserPhone = () => {
       
        setShowUserPhoneBtn(false)
    }

    const editAdv = () => {
        dispatch(addEditAdWindow(true))
    }

    const deleteAdv = async () => {
        try {
            setdisabled(true)
            const response = await delAdv({
                token: tokenFromState,
                id: userSelectAdv.id,
            })
            const thisUpdateToken = response.newToken

            dispatch(tokenUpdate(thisUpdateToken))

          
            setMessageForUser(true)
        } catch (error) {
            console.log(error.message)
        } finally {
            setdisabled(false)

            setTimeout(() => {
                navigate(
                    `/profile/${formatUrl(formatEmail(userok.email))}_${
                        userok.id
                    }`
                )
            }, 2000)
        }
    }

    const clickToSellerProfile = () => {
        navigate(`/selProfile/${UserSelectProd.user.id}`)
    }

  
    const getComments = async () => {
        const response = await getCommentsAdv({ id: UserSelectProd.id })
        setReviewsComments(response)
      
    }

    useEffect(() => {
        getComments()
    }, [])

    return (
        <S.Parent>
            <CustomHeader />

            <S.MainContainer>
                {flagforModal && (
                    <S.Xcover>
                        <EditAds />
                    </S.Xcover>
                )}

                {flagforEditAd && (
                    <S.Xcover>
                        <MessageSuccessEdit />
                    </S.Xcover>
                )}
                <UpMenu />
                {messageForUser && (
                    <S.MsgForUser>
                        <Msg />
                    </S.MsgForUser>
                )}

                {showReviews && <S.blur />}
                {showReviews && (
                    <S.Cover>
                        <Reviews
                            getComments={getComments}
                            reviewsComments={reviewsComments}
                            setShowReviews={setShowReviews}
                        />
                    </S.Cover>
                )}

                <S.MainArtic>
                    <S.ArticContent>
                        <S.ArticleLeft>
                            <S.ArticleFillImg>
                                <S.ArticleImgDiv>
                                    {/* тут фото товара */}
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
                                            />
                                        </S.ArticleImgBarDiv>
                                    ))}
                                </S.ArticleImgBar>
                            </S.ArticleFillImg>
                        </S.ArticleLeft>

                        <S.ArticleRight>
                            <S.ArticleBlock>
                                <S.ArticleTitle>
                                    {UserSelectProd.title}
                                </S.ArticleTitle>
                                <S.ArticleInfo>
                                    <S.ArticleDate>
                                        {formatDate(UserSelectProd.created_on)}
                                    </S.ArticleDate>
                                    <S.ArticleCity>
                                        {UserSelectProd.user?.city}
                                    </S.ArticleCity>
                                </S.ArticleInfo>
                                <S.specialButtonForReviews
                                    type="button"
                                    onClick={() => setShowReviews(true)}
                                >
                                    {reviewsComments
                                        ? reviewsComments.length
                                        : '...'}{' '}
                                    {formatReviews(reviewsComments.length)}
                                </S.specialButtonForReviews>
                                <S.ArticlePrice>
                                    {editPrice(UserSelectProd.price)}
                                </S.ArticlePrice>

                                {userId === someAdvId ? (
                                    <S.StyledBlock>
                                        <S.ArticleBtn>
                                            <S.ArticleBtnSpan
                                                onClick={editAdv}
                                                type="button"
                                            >
                                                Редактировать
                                            </S.ArticleBtnSpan>
                                        </S.ArticleBtn>

                                        <S.ArticleBtn>
                                            <S.ArticleBtnSpan
                                                onClick={deleteAdv}
                                                disabled={disabled}
                                            >
                                                {disabled
                                                    ? 'Ожидайте...'
                                                    : 'Снять с публикации'}
                                            </S.ArticleBtnSpan>
                                        </S.ArticleBtn>
                                    </S.StyledBlock>
                                ) : (
                                    <S.ArticleBtn onClick={showUserPhone}>
                                        <S.ArticleBtnSpan>
                                            {userPhoneBtn
                                                ? 'Показать телефон'
                                                : UserSelectProd.user?.phone}
                                        </S.ArticleBtnSpan>
                                    </S.ArticleBtn>
                                )}
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
                                        onClick={() => clickToSellerProfile()}
                                    >
                                        <S.AuthorName>
                                            {UserSelectProd.user?.name}
                                        </S.AuthorName>
                                        <S.AuthorAbout>
                                            Продает товары с{' '}
                                            {formatSellsDate(
                                                UserSelectProd.user.sells_from
                                            )}
                                        </S.AuthorAbout>
                                    </S.AuthorCont>
                                </S.ArticleAuthor>
                            </S.ArticleBlock>
                        </S.ArticleRight>
                    </S.ArticContent>
                </S.MainArtic>

                <S.MainTitle>{UserSelectProd.title}</S.MainTitle>
                <S.MainContent>
                    <S.MainText>{UserSelectProd.description}</S.MainText>
                </S.MainContent>
            </S.MainContainer>
            <Footer />
        </S.Parent>
    )
}

export default AdvPage
