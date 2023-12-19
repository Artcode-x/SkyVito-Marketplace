import * as S from './profile.styled'
import Header from '../../components/header/header'
import UpMenu from '../../components/up-menu/up-menu'
import SettingsProfile from '../../components/settingsprofile/settingsprofile'
import Products from '../../components/products/products'

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
                            </S.MainH2>
                            {/* для лучшего восприятия кода разбил логику и вынес settingsprofile в компоненты */}
                            <SettingsProfile />
                            <S.MainTitle>Мои товары</S.MainTitle>
                        </S.MainCenterBlock>
                        <S.MainContent>
                            {/* Тут отдельная компонента с товарами */}
                            <Products />
                        </S.MainContent>
                    </S.MainContainer>
                </S.Container>
            </S.Container>
        </S.Wrapper>
    )
}

export default Profile
