import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import * as S from './products.styled'
import noPhoto from '../img/no-photo.avif'
import GetAllAds, { GetUserAd } from '../../api/api'
import {
    advsAllSelector,
    searchSelector,
} from '../../store/selectors/selectors'
import { advsAllUpdate, userSelProdUpdate } from '../../store/reducers/reducers'
import { editPrice, formatUrl } from '../../helpers/helpers'

function Products({ id }) {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const location = useLocation().pathname

    const allAd = useSelector(advsAllSelector)

    const searchInputText = useSelector(searchSelector)

    const fromApi = async () => {
        try {
            if (location === '/') {
                const allAds = await GetAllAds()
                dispatch(advsAllUpdate(allAds))
            } else {
                const sellerAds = await GetUserAd({ id })
                dispatch(advsAllUpdate(sellerAds))
            }
        } catch (error) {
            console.log(error.message)
        }
    }

    const searchItem = (title, search) => {
        if (title.toLowerCase().search(search.toLowerCase()) === -1)
            return false
        return true
    }
    const selectProduct = (ad) => {
        dispatch(userSelProdUpdate(ad))
        localStorage.setItem('UserSelectedAd', JSON.stringify(ad))
        navigate(`/adv/${formatUrl(ad.title)}_${ad.id}`)
    }
    useEffect(() => {
        fromApi()
    }, [])
    return (
        <S.ContentCards>
            {allAd.map((ad) => (
                <S.CardsItem
                    search={searchItem(ad.title, searchInputText)}
                    key={ad.id}
                >
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
                            <S.CardTitle onClick={() => selectProduct(ad)}>
                                {ad.title}
                            </S.CardTitle>
                            <S.CardPrice>{editPrice(ad.price)}</S.CardPrice>
                            <S.CardPlace>{ad.user.city}</S.CardPlace>
                            <S.CardDate>
                                {new Date(ad.created_on).toLocaleString('ru', {
                                    addSuffix: true,
                                })}
                            </S.CardDate>
                        </S.CardContent>
                    </S.CardsCard>
                </S.CardsItem>
            ))}
        </S.ContentCards>
    )
}

export default Products
