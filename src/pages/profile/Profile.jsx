import * as S from './profile.styled'
import Header from '../../components/header/header'
import UpMenu from '../../components/up-menu/up-menu'
import noPhoto from '../../components/img/myprofile.png'

function Profile() {
    return (
        <S.Wrapper>
            <S.Container>
                {/* тут отдельно заголовок */}
                <Header />
                <S.Container>
                    <S.MainContainer>
                        <S.MainCenterBlock>
                            {/* тут будет верхня подменюшечка с лого и кнопкой */}
                            <UpMenu />
                            <S.MainH2>
                                Здравствуйте, Алекс!
                                {/* Тут будет!  {user.name }  */}
                                <S.MainProfile>
                                    <S.ProfileContent>
                                        <S.ProfileTitle>
                                            Настройки профиля
                                        </S.ProfileTitle>
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
                                                <S.SettingsChangeFoto>
                                                    Заменить
                                                </S.SettingsChangeFoto>
                                            </S.SettingsLeft>
                                            <S.SettingsRight>
                                                <S.SettingsForm>
                                                    <S.SettingsDiv>
                                                        <S.SettingsFormLabel>
                                                            Имя
                                                        </S.SettingsFormLabel>
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
                                                        <S.SettingsFormLabel>
                                                            Город
                                                        </S.SettingsFormLabel>
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

                                                        <S.SettingsFormInput
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
                            </S.MainH2>
                        </S.MainCenterBlock>
                    </S.MainContainer>
                </S.Container>
            </S.Container>
        </S.Wrapper>
    )
}

export default Profile
