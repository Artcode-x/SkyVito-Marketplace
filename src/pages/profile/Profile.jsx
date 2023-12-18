import * as S from './profile.styled'
import Header from '../../components/header/header'
import UpMenu from '../../components/up-menu/up-menu'

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
                        </S.MainCenterBlock>
                    </S.MainContainer>
                </S.Container>
            </S.Container>
        </S.Wrapper>
    )
}

export default Profile
