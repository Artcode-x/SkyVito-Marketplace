import { useNavigate } from 'react-router-dom'
import * as S from './login.styled'
import img from '../../components/img/logo_modal.png'

function Login() {
    const navigate = useNavigate()
    const handleLogin = async () => {
        // try {
        //     console.log('text')
        // } catch (error) {
        //     console.log(error.message)
        // } finally {
        //     navigate('/')
        // }
    }
    return (
        // <S.Wrapper>
        <S.ContainerEnter>
            <S.ModalBlock>
                <S.ModalformLogin>
                    <S.ModalLogo>
                        <S.ModalLogoImg src={img} />
                    </S.ModalLogo>
                    <S.ModalInputLogin placeholder="enter your login or email" />
                    <S.ModalInputPassword placeholder="Пароль" />
                    <S.ModalBtnEnter onClick={handleLogin}>
                        Войти
                        {/* <S.ModalBtnEnterLink
                        // onClick={() => handleLogin(email, password)}
                        >
                        Войти
                        </S.ModalBtnEnterLink> */}
                    </S.ModalBtnEnter>
                    <S.ModalBtnSignup onClick={() => navigate('/registration')}>
                        <S.ModalBtnSignupLink
                        // to={/registration}
                        >
                            Зарегистрироваться
                        </S.ModalBtnSignupLink>
                    </S.ModalBtnSignup>
                </S.ModalformLogin>
            </S.ModalBlock>
        </S.ContainerEnter>
        // </S.Wrapper>
    )
}

export default Login
