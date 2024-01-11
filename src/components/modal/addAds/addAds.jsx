/* eslint-disable no-await-in-loop */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import * as S from './addAds.styled'
import { formatUrl, pressEnterKey } from '../../../helpers/helpers'
import {
    addNewAdUpdate,
    tokenUpdate,
    userSelProdUpdate,
} from '../../../store/reducers/reducers'
import { tokenSelector } from '../../../store/selectors/selectors'
import { addImgPublish, addPublish, getAdvByid } from '../../../api/api'

function AddAds() {
    const disaptch = useDispatch()
    const navigate = useNavigate()
    const token = useSelector(tokenSelector)

    const [title, setTitle] = useState()
    const [description, setDescription] = useState()
    const [price, setPrice] = useState()

    const [disabled, setDisabled] = useState(false)
    const [showError, setShowError] = useState()

    // const [photos, setPhotos] = useState([])
    // const [urlPhotos, setUrlPhotos] = useState([])

    // тестовые состояния
    const [image, setImage] = useState([])

    const [urlFoto, setUrlfoto] = useState([])
    // записываю в стейт до 5 изображений
    const handleImageChange = async (e) => {
        setImage((prev) => [...prev, e.target.files[0]])
    }

    const checkInputs = () => {
        if (!title) throw new Error('Не введено название')
        if (!description) throw new Error('Не введено описание')
        if (!price) throw new Error('Не введена цена')
    }

    // const formatFile = ({ newPhoto }) => {
    //     const formData = new FormData()
    //     const formatUrlPhoto = URL.createObjectURL(newPhoto)
    //     formData.append('file', newPhoto)
    //     setPhotos((prev) => prev.concat(formData))
    //     setUrlPhotos([...urlPhotos, { formatUrlPhoto }])
    // }

    const addImgtoArray = (e) => {
        // cjхранили фото в файл
        const file = e.target.files[0]
        const fotoAfterFormat = new FormData()
        fotoAfterFormat.append('file', file)
        setImage((prev) => prev.concat(fotoAfterFormat))
        // создаем url для нашего фото
        const ReadyUrlFoto = URL.createObjectURL(file)
        // записываем в стейт с сохранением предыдущего состояния
        setUrlfoto([...urlFoto, ReadyUrlFoto])
        console.log(ReadyUrlFoto)
    }

    const postNewAd = async () => {
        try {
            setDisabled(true)
            checkInputs()

            // создаем объяв без изобр-ий
            const newAdWithoutImg = await addPublish({
                title,
                description,
                price,
                token,
                //  photos,
            })
            const updateTokenFromApi = newAdWithoutImg.newToken
            disaptch(tokenUpdate(updateTokenFromApi))
            localStorage.setItem('token', JSON.stringify(updateTokenFromApi))

            const { id } = newAdWithoutImg.response.data
            let testapi
            const fileCount = image.length > 5 ? 5 : image.length
            for (let i = 0; i < fileCount; i += 1) {
                // const fotoAfterFormat = new FormData()
                // fotoAfterFormat.append('file', image[i])
                testapi = await addImgPublish({
                    id,
                    test: image[i],
                    updateTokenFromApi,
                })
            }
            const getAdvByUSer = await getAdvByid(id)
            console.log(getAdvByUSer)
            disaptch(userSelProdUpdate(testapi))
            navigate(`/adv/${formatUrl(testapi.title)}_${id}`)
        } catch (error) {
            setShowError(error.message)
        } finally {
            setDisabled(false)
        }
    }

    const closeForm = () => {
        disaptch(addNewAdUpdate(false))
    }

    useEffect(() => {
        console.log(urlFoto[0])
    }, [urlFoto])
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
                                        id="1"
                                        type="text"
                                        name="title"
                                        placeholder="Введите название"
                                        onChange={(e) =>
                                            setTitle(e.target.value)
                                        }
                                        onKeyDown={(e) =>
                                            pressEnterKey(
                                                e,
                                                postNewAd,
                                                disabled
                                            )
                                        }
                                    />
                                </S.FormNewArtBlock>
                                <S.FormNewArtBlock>
                                    <S.FormNewArtLabel htmlFor="text">
                                        Описание
                                    </S.FormNewArtLabel>
                                    <S.FormNewArtArea
                                        name="text"
                                        type="text"
                                        placeholder="Введите название"
                                        onChange={(e) =>
                                            setDescription(e.target.value)
                                        }
                                        onKeyDown={(e) =>
                                            pressEnterKey(
                                                e,
                                                postNewAd,
                                                disabled
                                            )
                                        }
                                    />
                                </S.FormNewArtBlock>
                                <S.FormNewArtBlockPrice>
                                    <S.FormNewArtLabel htmlFor="price">
                                        Цена
                                    </S.FormNewArtLabel>
                                    <S.FormNewArtInputPrice
                                        id="price"
                                        name="price"
                                        type="text"
                                        onChange={(e) =>
                                            setPrice(e.target.value)
                                        }
                                        onKeyDown={(e) =>
                                            pressEnterKey(
                                                e,
                                                postNewAd,
                                                disabled
                                            )
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
                                                            addImgtoArray(e)
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
                                                            addImgtoArray(e)
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
                                                            addImgtoArray(e)
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
                                                            addImgtoArray(e)
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
                                                            addImgtoArray(e)
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
                                    onClick={postNewAd}
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

export default AddAds
