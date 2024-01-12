import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
// import { useNavigate } from 'react-router-dom'
import {
    addEditAdWindow,
    addFlagforEditAd,
    tokenUpdate,
    userSelProdUpdate,
} from '../../../store/reducers/reducers'
import * as S from './editAds.styled'
import { editionAdv } from '../../../api/api'
import {
    tokenSelector,
    userSelProdSelector,
} from '../../../store/selectors/selectors'
import { pressEnterKey } from '../../../helpers/helpers'

function EditAds() {
    const disaptch = useDispatch()

    const tokenFromState = useSelector(tokenSelector)
    const userSelectAdv = useSelector(userSelProdSelector)

    const [title, setTitle] = useState()
    const [description, setDescription] = useState()
    const [price, setPrice] = useState()

    const [disabled, setDisabled] = useState(false)
    const [showError, setShowError] = useState()

    const [image, setImage] = useState([])
    const [urlFoto, setUrlfoto] = useState([])
    console.log(image)

    const checkInputs = () => {
        if (!title) throw new Error('Не введено название')
        if (!description) throw new Error('Не введено описание')
        if (!price) throw new Error('Не введена цена')
    }

    const closeForm = () => {
        disaptch(addEditAdWindow(false))
    }

    const formatingFoto = (e) => {
        const file = e.target.files[0]
        const fotoAfterFormat = new FormData()
        fotoAfterFormat.append('file', file)
        setImage((prev) => prev.concat(fotoAfterFormat))
        const ReadyUrlFoto = URL.createObjectURL(file)
        setUrlfoto([...urlFoto, ReadyUrlFoto])
    }

    const editAdv = async () => {
        try {
            setDisabled(true)
            checkInputs()
            const response = await editionAdv({
                title,
                description,
                price,
                // images: urlFoto,
                token: tokenFromState,
                id: userSelectAdv.id,
            })
            console.log(response)
            const itsUpdateToken = response.newToken
            disaptch(tokenUpdate(itsUpdateToken))
            localStorage.setItem('token', JSON.stringify(itsUpdateToken))

            disaptch(userSelProdUpdate(response.response.data))
        } catch (error) {
            setShowError(error.message)
        } finally {
            setDisabled(false)
            disaptch(addFlagforEditAd(true))
            closeForm()
            setTimeout(() => {
                disaptch(addFlagforEditAd(false))
            }, 2000)
        }
    }
    useEffect(() => {
        setTitle(userSelectAdv.title)
        setDescription(userSelectAdv.description)
        setPrice(userSelectAdv.price)
    }, [])

    return (
        <S.Parent>
            <S.Wrapper>
                <S.ContainerBg>
                    <S.ModalBlock>
                        <S.ModalContent>
                            <S.ModalTitle>Новое объявление</S.ModalTitle>
                            <S.ModalBtnClose>
                                <S.ModalBtnCloseLine onClick={closeForm} />
                            </S.ModalBtnClose>
                            <S.ModalFormNewArt htmlFor="1">
                                <S.FormNewArtBlock>
                                    <S.FormNewArtLabel htmlFor="title">
                                        Название
                                    </S.FormNewArtLabel>
                                    <S.FormNewArtInput
                                        value={title}
                                        id="1"
                                        type="text"
                                        name="title"
                                        placeholder="Введите название"
                                        onChange={(e) =>
                                            setTitle(e.target.value)
                                        }
                                        onKeyDown={(e) =>
                                            pressEnterKey(e, editAdv, disabled)
                                        }
                                    />
                                </S.FormNewArtBlock>
                                <S.FormNewArtBlock>
                                    <S.FormNewArtLabel htmlFor="text">
                                        Описание
                                    </S.FormNewArtLabel>
                                    <S.FormNewArtArea
                                        value={description}
                                        name="text"
                                        type="text"
                                        placeholder="Введите название"
                                        onChange={(e) =>
                                            setDescription(e.target.value)
                                        }
                                        onKeyDown={(e) =>
                                            pressEnterKey(e, editAdv, disabled)
                                        }
                                    />
                                </S.FormNewArtBlock>
                                <S.FormNewArtBlockPrice>
                                    <S.FormNewArtLabel htmlFor="price">
                                        Цена
                                    </S.FormNewArtLabel>
                                    <S.FormNewArtInputPrice
                                        value={price}
                                        id="price"
                                        name="price"
                                        type="text"
                                        onChange={(e) =>
                                            setPrice(e.target.value)
                                        }
                                        onKeyDown={(e) =>
                                            pressEnterKey(e, editAdv, disabled)
                                        }
                                    />
                                    <S.FormNewArtInputPriceCover />
                                </S.FormNewArtBlockPrice>

                                <S.FormNewArtBlock>
                                    <S.FormNewArtP2>
                                        Фотографии товара
                                        <S.FormNewArtSpan>
                                            не более 5 фотографий
                                        </S.FormNewArtSpan>
                                    </S.FormNewArtP2>
                                    <S.FormNewArtBarImg>
                                        <S.FormNewArtImg>
                                            <S.FormNewArtLabel htmlFor="img_upload">
                                                {urlFoto[0] ? (
                                                    <S.SomeImg
                                                        src={urlFoto[0]}
                                                    />
                                                ) : (
                                                    <S.FormNewArtImgCover
                                                        onChange={(e) =>
                                                            formatingFoto(e)
                                                        }
                                                        type="file"
                                                        name="img_upload"
                                                        id="img_upload"
                                                        //  hidden
                                                    />
                                                )}
                                            </S.FormNewArtLabel>
                                        </S.FormNewArtImg>
                                        <S.FormNewArtImg>
                                            <S.FormNewArtLabel htmlFor="img_upload2">
                                                {urlFoto[1] ? (
                                                    <S.SomeImg
                                                        src={urlFoto[1]}
                                                    />
                                                ) : (
                                                    <S.FormNewArtImgCover
                                                        onChange={(e) =>
                                                            formatingFoto(e)
                                                        }
                                                        type="file"
                                                        name="img_upload"
                                                        id="img_upload2"
                                                        //  hidden
                                                    />
                                                )}
                                            </S.FormNewArtLabel>
                                        </S.FormNewArtImg>
                                        <S.FormNewArtImg>
                                            <S.FormNewArtLabel htmlFor="img_upload3">
                                                {urlFoto[2] ? (
                                                    <S.SomeImg
                                                        src={urlFoto[2]}
                                                    />
                                                ) : (
                                                    <S.FormNewArtImgCover
                                                        onChange={(e) =>
                                                            formatingFoto(e)
                                                        }
                                                        type="file"
                                                        name="img_upload"
                                                        id="img_upload3"
                                                        //  hidden
                                                    />
                                                )}
                                            </S.FormNewArtLabel>
                                        </S.FormNewArtImg>
                                        <S.FormNewArtImg>
                                            <S.FormNewArtLabel htmlFor="img_upload4">
                                                {urlFoto[3] ? (
                                                    <S.SomeImg
                                                        src={urlFoto[3]}
                                                    />
                                                ) : (
                                                    <S.FormNewArtImgCover
                                                        onChange={(e) =>
                                                            formatingFoto(e)
                                                        }
                                                        type="file"
                                                        name="img_upload"
                                                        id="img_upload4"
                                                        //  hidden
                                                    />
                                                )}
                                            </S.FormNewArtLabel>
                                        </S.FormNewArtImg>
                                        <S.FormNewArtImg>
                                            <S.FormNewArtLabel htmlFor="img_upload5">
                                                {urlFoto[4] ? (
                                                    <S.SomeImg
                                                        src={urlFoto[4]}
                                                    />
                                                ) : (
                                                    <S.FormNewArtImgCover
                                                        onChange={(e) =>
                                                            formatingFoto(e)
                                                        }
                                                        type="file"
                                                        name="img_upload"
                                                        id="img_upload5"
                                                        //  hidden
                                                    />
                                                )}
                                            </S.FormNewArtLabel>
                                        </S.FormNewArtImg>
                                    </S.FormNewArtBarImg>
                                </S.FormNewArtBlock>
                                <S.FormNewArtBtnPub
                                    onClick={editAdv}
                                    type="button"
                                    disabled={disabled}
                                >
                                    {/* Опубликовать */}
                                    {disabled
                                        ? 'объявление загружается, ожидайте'
                                        : 'опубликовать'}
                                </S.FormNewArtBtnPub>
                                {showError && <S.Error>{showError}</S.Error>}
                            </S.ModalFormNewArt>
                        </S.ModalContent>
                    </S.ModalBlock>
                </S.ContainerBg>
            </S.Wrapper>
        </S.Parent>
    )
}

export default EditAds
