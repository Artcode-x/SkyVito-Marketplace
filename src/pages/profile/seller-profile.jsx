import { useSelector } from 'react-redux'
import { useState } from 'react'
import * as S from './seller-profile.styled'
import CustomHeader from '../../components/custom-header/custom-header'
import UpMenu from '../../components/up-menu/up-menu'
import noPhoto from '../../components/img/no-photo.avif'
import { userSelProdSelector } from '../../store/selectors/selectors'
import Products from '../../components/products/products'
import Footer from '../../components/footer/footer'

function SellerProfile() {
    const UserSelectProd = useSelector(userSelProdSelector)

    const [showSellerPhoneBtn, setShowSellerPhoneBtn] = useState(false)

    const showSellerPhone = () => {
        setShowSellerPhoneBtn(true)
    }

    return (
        <S.Parent>
            <CustomHeader />
            <S.MainContainer>
                <UpMenu />

                <S.MainContainer>
                    <S.MainCenterBlock>
                        <S.MainH2>Профиль продавца</S.MainH2>
                        <S.MainProfileSell>
                            <S.ProfileSellContent>
                                <S.ProfileSellSeller>
                                    <S.SellerLeft>
                                        <S.SellerImg>
                                            {UserSelectProd.user?.avatar ? (
                                                <S.SellerImgImg
                                                    src={`http://localhost:8090/${UserSelectProd.user.avatar}`}
                                                    alt="avaUsera"
                                                />
                                            ) : (
                                                <S.SellerImgImg
                                                    src={noPhoto}
                                                    alt="noAva"
                                                />
                                            )}
                                        </S.SellerImg>
                                    </S.SellerLeft>
                                    <S.SellerRight>
                                        <S.SellerTitle>
                                            {UserSelectProd?.user.name}
                                        </S.SellerTitle>
                                        <S.SellerCity>
                                            {UserSelectProd?.user.city}
                                        </S.SellerCity>
                                        <S.SellerInf>
                                            Продает товары с{' '}
                                            {new Date(
                                                UserSelectProd?.user.sells_from
                                            ).toLocaleString('ru', {
                                                year: 'numeric',
                                                month: 'long',
                                            })}
                                        </S.SellerInf>

                                        <S.SellerImgMobBlock>
                                            <S.SellerImgMob>
                                                {UserSelectProd.user?.avatar ? (
                                                    <S.SellerImgMobImg
                                                        src={`http://localhost:8090/${UserSelectProd.user.avatar}`}
                                                        alt="avaUsera"
                                                    />
                                                ) : (
                                                    <S.SellerImgMobImg
                                                        src={noPhoto}
                                                        alt="noAva"
                                                    />
                                                )}
                                            </S.SellerImgMob>
                                        </S.SellerImgMobBlock>

                                        <S.ArticleBtn onClick={showSellerPhone}>
                                            {showSellerPhoneBtn === true
                                                ? UserSelectProd.user.phone
                                                : 'Показать телефон'}

                                            <S.ArticleBtnSpan />
                                        </S.ArticleBtn>
                                    </S.SellerRight>
                                </S.ProfileSellSeller>
                            </S.ProfileSellContent>
                        </S.MainProfileSell>
                        <S.MainTitle>Товары продавца</S.MainTitle>
                    </S.MainCenterBlock>
                    <S.MainContent>
                        <Products id={UserSelectProd?.user.id} />
                    </S.MainContent>
                </S.MainContainer>
            </S.MainContainer>
            <Footer />
        </S.Parent>
    )
}

export default SellerProfile
