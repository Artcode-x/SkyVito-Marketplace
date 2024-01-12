import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useState } from 'react'
import * as S from './login.styled'
import img from '../../components/img/logo_modal.png'
import { GetUser, getToken } from '../../api/api'
import { tokenUpdate, userStateUpdate2 } from '../../store/reducers/reducers'
import {
    formatEmail,
    formatUrl,
    pressEnterKey,
    validateInputText,
} from '../../helpers/helpers'

function Login() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [disabled, setDisabled] = useState(false)
    const [showError, setShowError] = useState(null)

    const checkInputs = () => {
        if (!email) {
            setShowError('Не введен логин!')
        } else if (!password) {
            setShowError('Не введен пароль!')
        }
    }

    const clickLogin = async () => {
        try {
            setDisabled(true)
            checkInputs()
            const responseToken = await getToken({
                email,
                password,
            })

            const responseUser = await GetUser({
                token: responseToken.access_token,
            })

            dispatch(tokenUpdate(responseToken))
            dispatch(userStateUpdate2(responseUser))

            localStorage.setItem('token', JSON.stringify(responseToken))
            localStorage.setItem('user', JSON.stringify(responseUser))

            navigate(
                `/profile/${formatUrl(formatEmail(responseUser.email))}_${
                    responseUser.id
                }`
            )
        } catch (error) {
            console.log(error.message)
        } finally {
            setDisabled(false)
        }
    }

    return (
        <S.ContainerEnter>
            <S.ModalBlock>
                <S.ModalformLogin>
                    <S.ModalLogo>
                        <S.ModalLogoImg src={img} />
                    </S.ModalLogo>
                    <S.ModalInputLogin
                        value={email}
                        onChange={(e) => setEmail(validateInputText(e))}
                        onKeyDown={(e) =>
                            pressEnterKey(e, clickLogin, disabled)
                        }
                        maxLength={18}
                        type="text"
                        name="email"
                        placeholder="enter your login or email"
                    />
                    <S.ModalInputPassword
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        onKeyDown={(e) =>
                            pressEnterKey(e, clickLogin, disabled)
                        }
                        maxLength={18}
                        type="password"
                        name="password"
                        placeholder="Пароль"
                    />
                    <S.ModalBtnEnter onClick={clickLogin}>
                        <S.ModalBtnEnterLink>
                            {disabled ? 'Выполняется вход' : 'Войти'}
                        </S.ModalBtnEnterLink>
                    </S.ModalBtnEnter>
                    <S.ModalBtnSignup onClick={() => navigate('/registration')}>
                        <S.ModalBtnSignupLink>
                            Зарегистрироваться
                        </S.ModalBtnSignupLink>
                    </S.ModalBtnSignup>
                    {/* Блок для отображения ошибки */}
                    {showError && <S.ForErrors>{showError}</S.ForErrors>}
                </S.ModalformLogin>
            </S.ModalBlock>
        </S.ContainerEnter>
    )
}

export default Login
