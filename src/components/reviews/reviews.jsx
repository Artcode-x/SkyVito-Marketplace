import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import * as S from './reviews.styled'
import {
    tokenSelector,
    userSelProdSelector,
    userSelector,
} from '../../store/selectors/selectors'
import noPhoto from '../img/no-photo.avif'
import { addComment } from '../../api/api'
import { tokenUpdate } from '../../store/reducers/reducers'

function Reviews({ setShowReviews, getComments, reviewsComments }) {
    const dispatch = useDispatch()
    const user = useSelector(userSelector)

    const token = useSelector(tokenSelector)

    const UserSelectProduct = useSelector(userSelProdSelector)

    const [newComment, setNewComment] = useState()
    const [flyToBackend, setFlyToBackend] = useState(false)
    const [error, setError] = useState(false)

    const [disabled, setDisabled] = useState(false)

    const clickAddComment = async () => {
        const checkInput = () => {
            if (!newComment)
                throw new Error('Нельзя отправить пустой комментарий')
        }

        try {
            setDisabled(true)

            checkInput()

            const responsefromapi = await addComment({
                text: newComment,
                id: UserSelectProduct.id,
                token,
            })
            await getComments()
            dispatch(tokenUpdate(responsefromapi.newToken))
            localStorage.setItem(
                'token',
                JSON.stringify(responsefromapi.newToken)
            )
            setFlyToBackend(true)
        } catch (error1) {
            setError(error1.message)
        } finally {
            setNewComment('')
            setDisabled(false)
        }
    }

    return (
        <S.Wrapper>
            <S.ContainerBg>
                <S.ModalBlock>
                    <S.ModalBtnClose>
                        <S.ModalBtnCloseLine
                            onClick={() => setShowReviews(false)}
                        />
                    </S.ModalBtnClose>
                    <S.ModalContent>
                        <S.ModalTitle>Отзывы о товаре</S.ModalTitle>
                    </S.ModalContent>

                    <S.ModalScroll>
                        {!user ? (
                            <S.formNewArt>
                                Для того чтобы оставить отзыв,{' '}
                                <Link to="/login">авторизируйтесь</Link>
                            </S.formNewArt>
                        ) : (
                            <S.ModalFormNewArt>
                                <S.formNewArtBlock>
                                    <S.formNewArt>Добавить отзыв</S.formNewArt>
                                    <S.formNewArtArea
                                        name="text"
                                        placeholder="Введите отзыв"
                                        value={newComment}
                                        onChange={(e) =>
                                            setNewComment(e.target.value)
                                        }
                                    />
                                </S.formNewArtBlock>
                                <S.formNewArtBtnPub
                                    type="button"
                                    disabled={disabled}
                                    onClick={(e) => clickAddComment(e)}
                                >
                                    Опубликовать
                                </S.formNewArtBtnPub>

                                {flyToBackend ? (
                                    <S.formNewArt>
                                        Комментарий добавлен
                                    </S.formNewArt>
                                ) : (
                                    ''
                                )}
                                {error && <S.Error>{error}</S.Error>}
                            </S.ModalFormNewArt>
                        )}
                        <S.gridBlock>
                            <S.ModalReviews>
                                {/*  блок коммента */}
                                <S.ReviewsReview>
                                    {reviewsComments &&
                                        reviewsComments.map((element) => (
                                            <S.ReviewItem key={element.id}>
                                                <S.ReviewLeft>
                                                    <S.ReviewImg>
                                                        {element.author
                                                            ?.avatar ? (
                                                            <S.ReviewImgImg
                                                                src={`http://localhost:8090/${element.author?.avatar}`}
                                                                alt=""
                                                            />
                                                        ) : (
                                                            <S.ReviewImgImg
                                                                src={noPhoto}
                                                            />
                                                        )}
                                                    </S.ReviewImg>
                                                </S.ReviewLeft>
                                                <S.ReviewRight>
                                                    <S.ReviewName>
                                                        {element.author?.name}

                                                        <S.ReviewNameSpan>
                                                            {new Date(
                                                                element.created_on
                                                            ).toLocaleString(
                                                                'ru',
                                                                {
                                                                    addSuffix: true,
                                                                }
                                                            )}
                                                        </S.ReviewNameSpan>
                                                    </S.ReviewName>
                                                    <S.ReviewTitle>
                                                        Комментарий
                                                    </S.ReviewTitle>
                                                    <S.ReviewText>
                                                        {element.text}
                                                    </S.ReviewText>
                                                </S.ReviewRight>
                                            </S.ReviewItem>
                                        ))}
                                </S.ReviewsReview>
                            </S.ModalReviews>
                        </S.gridBlock>
                    </S.ModalScroll>
                </S.ModalBlock>
            </S.ContainerBg>
            {/* )} */}
        </S.Wrapper>
    )
}

export default Reviews
