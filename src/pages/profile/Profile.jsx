import { useSelector } from 'react-redux'

import * as S from './profile.styled'

import CustomHeader from '../../components/custom-header/custom-header'
import UpMenu from '../../components/up-menu/up-menu'
import SettingsProfile from '../../components/settingsprofile/settingsprofile'
import Products from '../../components/products/products'
import {
    showAddNewAdWindwowSelector,
    userSelector,
} from '../../store/selectors/selectors'
import AddAds from '../../components/modal/addAds/addAds'

function Profile() {
    const user = useSelector(userSelector)

    const showAddNewAd = useSelector(showAddNewAdWindwowSelector)
    return (
        <S.Wrapper>
            <S.Container>
                {/* тут отдельно заголовок */}

                {showAddNewAd && (
                    <S.Cover>
                        <AddAds />
                    </S.Cover>
                )}

                <CustomHeader />
                <S.Container>
                    <S.MainContainer>
                        <S.MainCenterBlock>
                            <UpMenu />
                            <S.MainH2>{` Здравствуйте, ${user.name}`}</S.MainH2>

                            <SettingsProfile />
                            <S.MainTitle>Мои товары</S.MainTitle>
                        </S.MainCenterBlock>
                        <S.MainContent>
                            <Products id={user.id} />
                        </S.MainContent>
                    </S.MainContainer>
                </S.Container>
            </S.Container>
        </S.Wrapper>
    )
}

export default Profile
