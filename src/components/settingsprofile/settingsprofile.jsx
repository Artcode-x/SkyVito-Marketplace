import * as S from './settingsprofile.styled'
import noPhoto from '../img/myprofile.png'

function SettingsProfile() {
    return (
        <S.MainProfile>
            <S.ProfileContent>
                <S.ProfileTitle>Настройки профиля</S.ProfileTitle>
                <S.ProfileSettings>
                    <S.SettingsLeft>
                        <S.SettingsImg>
                            {/*  логика */}
                            {/* {userProfile.avatar ? (
                            <S.Img 
                            src={
                                img ? URL.createObjectURL(img) : `http://localhost:8090/${userProfile.avatar}`  
                            }
                            />
                            ) : (<S.Img src = {noPhoto}/>
                            )} */}
                            <S.Img src={noPhoto} />
                        </S.SettingsImg>
                        <S.SettingsChangeFoto>Заменить</S.SettingsChangeFoto>
                    </S.SettingsLeft>
                    <S.SettingsRight>
                        <S.SettingsForm>
                            <S.SettingsDiv>
                                <S.SettingsFormLabel>Имя</S.SettingsFormLabel>
                                <S.SettingsFormInput
                                    name="name"
                                    type="text"
                                    // onChange={(e) =>
                                    //     handleName(e)
                                    // }
                                />
                            </S.SettingsDiv>
                            <S.SettingsDiv>
                                <S.SettingsFormLabel>
                                    Фамилия
                                </S.SettingsFormLabel>
                                <S.SettingsFormInput
                                    name="surname"
                                    type="text"
                                    // onChange={(e) =>
                                    //     handleSurname(e)
                                    // }
                                />
                            </S.SettingsDiv>
                            <S.SettingsDiv>
                                <S.SettingsFormLabel>Город</S.SettingsFormLabel>
                                <S.SettingsFormInput
                                    name="city"
                                    type="text"
                                    // onChange={(e) =>
                                    //     handleCity(e)
                                    // }
                                />
                            </S.SettingsDiv>
                            <S.SettingsDiv>
                                <S.SettingsFormLabel>
                                    Телефон
                                </S.SettingsFormLabel>

                                <S.PhoneInput
                                    name="phone"
                                    type="tel"
                                    // onChange={(e) =>
                                    //     handlePhone(e)
                                    // }
                                />
                            </S.SettingsDiv>
                            <S.SettingsBtn
                            // id='settingsBtn'
                            // onClick={(e) => {
                            //     e.preventDefault();
                            //     setOpenFormChangePassword(true)
                            // }};
                            >
                                Сохранить
                            </S.SettingsBtn>
                        </S.SettingsForm>
                    </S.SettingsRight>
                </S.ProfileSettings>
            </S.ProfileContent>
        </S.MainProfile>
    )
}

export default SettingsProfile
