/* eslint-disable no-undef */
/* eslint-disable no-await-in-loop */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
// import { useNavigate } from 'react-router-dom'
import noPhoto from '../../img/no-photo.avif'
import {
    addEditAdWindow,
    addFlagforEditAd,
    tokenUpdate,
    userSelProdUpdate,
} from '../../../store/reducers/reducers'
import * as S from './editAds.styled'
import {
    delfotoinAd,
    editionAdv,
    updateToken,
    uploadFotoAd,
} from '../../../api/api'
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

    const [adData, setAdData] = useState({
        // title: userSelectAdv.title,
        // description: userSelectAdv.description,
        // price: userSelectAdv.price,
        images: userSelectAdv.images,
    })

    // 1.
    // const handleInputChange = (e) => {
    //     const { name, value } = e.target
    //     console.log('inputChange')
    //     setAdData({
    //         ...adData,
    //         [name]: value,
    //     })
    // }
    // 2.
    // const formatingFoto = (e) => {
    //     const files = Array.from(e.target.files) //
    //     if (imgs.length + files.length <= 5) {
    //         const newImages = files.map((file) => ({
    //             id: Date.now(),
    //             url: URL.createObjectURL(file),
    //             // eslint-disable-next-line object-shorthand
    //             file: file,
    //         }))

    //         setImgs([...imgs, ...newImages])
    //     } else {
    //         alert('Максимальное количество изображений - 5')
    //     }
    // }

    const editAdv = async () => {
        try {
            setDisabled(true)
            checkInputs()
            let response = await editionAdv({
                title,
                description,
                price,
                // images: image[0],
                //  token: tokenFromState,
                id: userSelectAdv.id,
            })
            console.log(response)
            // удаляю все фотки - работает

            const arrayFotos = userSelectAdv.images.length
            for (let i = 0; i < arrayFotos; i += 1) {
                response = await delfotoinAd({
                    id: userSelectAdv.id,
                    //   token: upToken,
                    urlfotki: userSelectAdv.images[i].url,
                })
            }
            const updid = response.id
            console.log(updid)
            for (let i = 0; i < arrayFotos; i += 1) {
                response = await uploadFotoAd({
                    id: updid,
                    //    token: UPtokEn,
                    images: image[i],
                })
                disaptch(userSelProdUpdate(response))
            }
        } catch (error) {
            console.log(error)

            if (error.status === 401) {
                await updateToken()
                let response = await editionAdv({
                    title,
                    description,
                    price,
                    id: userSelectAdv.id,
                })

                const arrayFotos = userSelectAdv.images.length
                for (let i = 0; i < arrayFotos; i += 1) {
                    await updateToken()
                    response = await delfotoinAd({
                        id: userSelectAdv.id,
                        //   token: upToken,
                        urlfotki: userSelectAdv.images[i].url,
                    })
                }
                const updid = response.id
                console.log(updid)

                for (let i = 0; i < arrayFotos; i += 1) {
                    await updateToken()
                    response = await uploadFotoAd({
                        id: updid,
                        images: image[i],
                    })

                    disaptch(userSelProdUpdate(response))
                }
            }
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
                            <S.ModalTitle>
                                Редактировать объявление
                            </S.ModalTitle>
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
                                    {/* map */}
                                    <S.FormNewArtBarImg>
                                        <S.FormNewArtImg>
                                            <S.FormNewArtLabel htmlFor="img_upload">
                                                {/* Картинка будет заменяться */}
                                                {/* если есть фото в обьявлении */}

                                                {/* // покажем ссылку на? */}

                                                {userSelectAdv.images.length !==
                                                0 ? (
                                                    <S.Parent>
                                                        <S.SomeImg
                                                            // фото с загрузчика либо фото которое в объяве
                                                            src={
                                                                urlFoto[0]
                                                                    ? urlFoto[0]
                                                                    : `http://localhost:8090/${userSelectAdv?.images[0].url}`
                                                            }
                                                        />
                                                        <S.FormNewArtImgCover
                                                            accept="image/*"
                                                            multiple
                                                            onChange={(e) =>
                                                                formatingFoto(e)
                                                            }
                                                            type="file"
                                                            name="img_upload"
                                                            id="img_upload"
                                                        />
                                                    </S.Parent>
                                                ) : (
                                                    <S.Parent>
                                                        <S.SomeImg
                                                            src={
                                                                urlFoto[0]
                                                                    ? urlFoto[0]
                                                                    : noPhoto
                                                            }
                                                        />
                                                        <S.FormNewArtImgCover
                                                            accept="image/*"
                                                            multiple
                                                            onChange={(e) =>
                                                                formatingFoto(e)
                                                            }
                                                            type="file"
                                                            name="img_upload"
                                                            id="img_upload"
                                                        />
                                                    </S.Parent>
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
