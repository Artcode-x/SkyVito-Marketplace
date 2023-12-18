// менюшечка с картинкой и кнопкой
import { Link, useNavigate } from 'react-router-dom'
import * as S from './up-menu.styled'
import img from '../img/logo.png'

function UpMenu() {
    const navigate = useNavigate()
    return (
        // <S.Container>
        <S.MainMenu>
            <S.MenuLogoLink onClick={() => navigate('/')}>
                <Link to="/">
                    <S.MenuLogoImg src={img} alt="logo" />
                </Link>
            </S.MenuLogoLink>
            <S.MenuForm>
                <S.MenuBtnS id="backToTheSun" onClick={() => navigate('/')}>
                    Вернуться на главную
                </S.MenuBtnS>
            </S.MenuForm>
        </S.MainMenu>
        // </S.Container>
    )
}

export default UpMenu
