import * as S from './addAds.styled'

function AddAds() {
    return (
        <S.Parent>
            <S.Wrapper>
                <S.ContainerBg>
                    <S.ModalBlock>
                        <S.ModalContent>
                            <S.ModalTitle>Новое объявление</S.ModalTitle>
                            <S.ModalBtnClose>
                                <S.ModalBtnCloseLine>
                                    {/*  onClick={closeForm} */}
                                </S.ModalBtnCloseLine>
                            </S.ModalBtnClose>
                            <S.ModalFormNewArt id="formNewArt" action="#">
                                <S.FormNewArtBlock>
                                    <S.FormNewArtLabel htmlFor="name">
                                        Название
                                    </S.FormNewArtLabel>
                                    <S.FormNewArtInput
                                    // type="text"
                                    // name="name"
                                    // id="formName"
                                    // placeholder="Введите название"
                                    // onChange={handleAdTitleChange}
                                    />
                                </S.FormNewArtBlock>
                                <S.FormNewArtBlock>
                                    <S.FormNewArtLabel htmlFor="text">
                                        Описание
                                    </S.FormNewArtLabel>
                                    <S.FormNewArtArea>
                                        {/*  name="text"
                                     id="formArea"
                                     cols="auto"
                                     rows="10"
                                     placeholder="Введите описание"
                                     onChange={handleAdDescriptionChange} */}
                                    </S.FormNewArtArea>
                                </S.FormNewArtBlock>
                                <S.FormNewArtBlockPrice>
                                    <S.FormNewArtLabel htmlFor="price">
                                        Цена
                                    </S.FormNewArtLabel>
                                    <S.FormNewArtInputPrice
                                    // type="text"
                                    // name="price"
                                    // id="formName"
                                    // onChange={(event) =>
                                    //     handleAdPriceChange(event)
                                    // }
                                    />
                                    <S.FormNewArtInputPriceCover />
                                </S.FormNewArtBlockPrice>
                                {/* {error && <S.Error>{error}</S.Error>} */}
                                <S.FormNewArtBtnPub
                                // id="btnPublish"
                                // disabled={!saveButtonActive}
                                // onClick={(event) => handleClickPublic(event)}
                                >
                                    Опубликовать
                                </S.FormNewArtBtnPub>
                            </S.ModalFormNewArt>
                        </S.ModalContent>
                    </S.ModalBlock>
                </S.ContainerBg>
            </S.Wrapper>
        </S.Parent>
    )
}

export default AddAds
