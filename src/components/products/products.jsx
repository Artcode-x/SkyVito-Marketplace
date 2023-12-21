import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as S from './products.styled'
import noPhoto from '../img/no-photo.avif'
import GetAllAds from '../../api/api'
import { advsAllSelector } from '../../store/selectors/selectors'
import { advsAllUpdate } from '../../store/reducers/reducers'

function Products() {
    const dispatch = useDispatch()
    // let allAd = []
    const allAd = useSelector(advsAllSelector)
    // const allAd = useSelector((store) => store.store.advsAll)

    const fromApi = async () => {
        try {
            // let allAds = []
            const allAds = await GetAllAds()
            dispatch(advsAllUpdate(allAds))
        } catch (error) {
            console.log(error.message)
        }
    }
    useEffect(() => {
        fromApi()
    }, [])
    return (
        <S.ContentCards>
            {/* {isloading ? (<S.MainH2>Обьявления загружаются</S.MainH2>
            ) : AllAds?.length > 0 ? ( */}
            {allAd.map((ad) => (
                <S.CardsItem key={ad.id}>
                    <S.CardsCard>
                        <S.CardImage key={ad.images}>
                            {ad.images.length !== 0 ? (
                                <S.CardImageImg
                                    src={`http://localhost:8090/${ad.images[0]?.url}`}
                                    alt="pic"
                                />
                            ) : (
                                <S.CardImageImg src={noPhoto} alt="nophoto" />
                            )}
                        </S.CardImage>
                        <S.CardContent>
                            <S.CardTitle>
                                {ad.title}
                                {/* Ракетка для большого тенниса Triumph Pro ST */}
                            </S.CardTitle>
                            <S.CardPrice>
                                {ad.price}
                                {/* 2 200 ₽ */}
                            </S.CardPrice>
                            <S.CardPlace>
                                {ad.user.city}
                                {/* Санкт Петербург */}
                            </S.CardPlace>
                            <S.CardDate>
                                {new Date(ad.created_on).toLocaleString('ru', {
                                    addSuffix: true,
                                })}
                                {/* Сегодня в 10:45 */}
                            </S.CardDate>
                        </S.CardContent>
                    </S.CardsCard>
                </S.CardsItem>
            ))}
        </S.ContentCards>
    )
}

export default Products
