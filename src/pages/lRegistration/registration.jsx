import { Link } from 'react-router-dom'
import * as S from './registration.styled'
import img from '../../components/img/logo_modal.png'

function Registration() {
    // const handleRegister = async (
    //     email,
    //     password,
    //     repeatPassword,
    //     name,
    //     city,
    //     lastName
    // ) => {}
    return (
        <S.ContainerSignup>
            <S.ModalBlock>
                <S.ModalFormReg>
                    {/* блок с лого */}
                    <S.ModalLogo>
                        <S.ModalLogoImg src={img} />
                    </S.ModalLogo>
                    <S.ModalInputRegister
                        type="text"
                        name="login"
                        placeholder="email"
                    />
                    <S.ModalInputRegister
                        type="password"
                        name="password"
                        placeholder="Пароль"
                    />
                    <S.ModalInputRegister
                        type="password"
                        name="new-password"
                        placeholder="Повторите пароль"
                    />
                    <S.ModalInputRegister
                        type="text"
                        name="first-name"
                        placeholder="Имя (необязательно)"
                    />
                    <S.ModalInputRegister
                        type="text"
                        name="first-last"
                        placeholder="Фамилия (необязательно)"
                    />
                    <S.ModalInputRegister
                        type="text"
                        name="city"
                        placeholder="Город (необязательно)"
                    />
                    {/* Блок с кнопкой */}
                    <S.ModalBtnReg>
                        <S.ModalBtnRegLink
                        // onClick={() => handleRegister(email, password, repeatPassword, name, city, lastName)}
                        >
                            Зарегистрироваться
                        </S.ModalBtnRegLink>
                    </S.ModalBtnReg>
                    {/* если уже зарегистрирован выводить сообщение */}
                    <S.ModalBlockText>
                        Уже есть аккаунт, <Link to="/Login">Войдите</Link>
                    </S.ModalBlockText>
                </S.ModalFormReg>
            </S.ModalBlock>
        </S.ContainerSignup>
    )
}

export default Registration
