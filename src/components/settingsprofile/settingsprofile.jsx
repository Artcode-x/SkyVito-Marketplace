import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import * as S from './settingsprofile.styled'
import noPhoto from '../img/myprofile.png'
import { tokenSelector, userSelector } from '../../store/selectors/selectors'
import {
    editProfileAvatar,
    getTokenFromLocalStorage,
    //  getUser,
    updateUser,
} from '../../api/api'
import { tokenUpdate, userStateUpdate2 } from '../../store/reducers/reducers'

function SettingsProfile() {
    const dispatch = useDispatch()
    const user = useSelector(userSelector)
    const tokenFromState = useSelector(tokenSelector)
    const [disabled, setDisabled] = useState(false)
    const [loadingImg, setLoadingImg] = useState(false)
    const [AllDataUser, setAllDataUser] = useState(user)

    const setName = (e) => {
        e.preventDefault()
        setAllDataUser({ ...AllDataUser, name: e.target.value })
    }
    const setSurname = (e) => {
        e.preventDefault()
        setAllDataUser({ ...AllDataUser, surname: e.target.value })
    }
    const setCity = (e) => {
        e.preventDefault()
        setAllDataUser({ ...AllDataUser, city: e.target.value })
    }
    const setPhone = (e) => {
        e.preventDefault()
        setAllDataUser({ ...AllDataUser, phone: e.target.value })
    }

    const saveChangesUser = async () => {
        try {
            setDisabled(true)

            const response = await updateUser(
                AllDataUser,
                getTokenFromLocalStorage()
            )
            console.log(response.response.data)

            // const token = getTokenFromLocalStorage()
            // const token = response.newToken
            dispatch(userStateUpdate2(response.response.data))
            dispatch(tokenUpdate(response.newToken))
            // await getUser({ token })
            localStorage.setItem('token', JSON.stringify(response.newToken))
            localStorage.setItem('user', JSON.stringify(response.response.data))
        } catch (error) {
            if (error.response.status === 401) {
                console.log('токен протух')
            }
        } finally {
            setDisabled(false)
        }
    }

    useEffect(() => {}, [AllDataUser])

    const updateAvatar = async ({ avatar }) => {
        try {
            setLoadingImg(true)

            const formAvatar = new FormData()
            formAvatar.append('file', avatar)

            const response = await editProfileAvatar({
                formAvatar,
                token: tokenFromState,
            })

            dispatch(userStateUpdate2(response.user))
            dispatch(tokenUpdate(response.newToken))
            localStorage.setItem('user', JSON.stringify(response.data.user))
            localStorage.setItem('token', JSON.stringify(response.newToken))
        } catch (error) {
            console.log(error.message)
        } finally {
            setLoadingImg(false)
        }
    }
    return (
        <S.MainProfile>
            <S.ProfileContent>
                <S.ProfileTitle>Настройки профиля</S.ProfileTitle>
                <S.ProfileSettings>
                    <S.SettingsLeft>
                        <S.SettingsImg>
                            {/*  логика */}
                            {user.avatar ? (
                                <S.Img
                                    src={`http://localhost:8090/${user.avatar}`}
                                />
                            ) : (
                                <S.Img src={noPhoto} />
                            )}
                        </S.SettingsImg>
                        <S.SettingsChangeFoto>
                            <S.Label htmlFor="id=changeFoto">
                                {loadingImg ? 'фото загружается' : 'Заменить'}
                                <input
                                    onChange={(e) =>
                                        updateAvatar({
                                            avatar: e.target.files[0],
                                        })
                                    }
                                    id="id=changeFoto"
                                    type="file"
                                    disabled={loadingImg}
                                    name="img_uploads"
                                    hidden
                                />
                            </S.Label>
                        </S.SettingsChangeFoto>
                    </S.SettingsLeft>
                    <S.SettingsRight>
                        <S.SettingsForm>
                            <S.SettingsDiv>
                                <S.SettingsFormLabel>Имя</S.SettingsFormLabel>
                                <S.SettingsFormInput
                                    name="name"
                                    type="text"
                                    placeholder={user.name}
                                    onChange={(e) => setName(e)}
                                />
                            </S.SettingsDiv>
                            <S.SettingsDiv>
                                <S.SettingsFormLabel>
                                    Фамилия
                                </S.SettingsFormLabel>
                                <S.SettingsFormInput
                                    name="surname"
                                    // value={surname}
                                    type="text"
                                    placeholder={user.surname}
                                    onChange={(e) => setSurname(e)}
                                />
                            </S.SettingsDiv>
                            <S.SettingsDiv>
                                <S.SettingsFormLabel>Город</S.SettingsFormLabel>
                                <S.SettingsFormInput
                                    name="city"
                                    // value={city}
                                    type="text"
                                    placeholder={user.city}
                                    onChange={(e) => setCity(e)}
                                />
                            </S.SettingsDiv>
                            <S.SettingsDiv>
                                <S.SettingsFormLabel>
                                    Телефон
                                </S.SettingsFormLabel>

                                <S.PhoneInput
                                    name="phone"
                                    type="tel"
                                    placeholder={user.phone}
                                    onChange={(e) => setPhone(e)}
                                />
                            </S.SettingsDiv>

                            <S.SettingsBtn
                                disabled={disabled}
                                onClick={(event) => {
                                    event.preventDefault()
                                    saveChangesUser()
                                }}
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
