import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import AppRoutes from './AppRoutes'
import {
    tokenUpdate,
    userSelProdUpdate,
    userStateUpdate2,
} from './store/reducers/reducers'
// import CustomHeader from './components/custom-header/custom-header'
import Footer from './components/footer/footer'
// import CustomHeader from './components/custom-header/custom-header'

// import * as S from './Avito.styled'

function Avito() {
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        dispatch(tokenUpdate(JSON.parse(localStorage.getItem('token')) || {}))
        dispatch(
            userStateUpdate2(JSON.parse(localStorage.getItem('user')) || {})
        )
        dispatch(
            userSelProdUpdate(
                JSON.parse(localStorage.getItem('UserSelectedAd')) || {}
            )
        )
        setLoading(true)
    }, [])

    return (
        <>
            {/* изначально отображение хотел сделать через props styled comp */}
            {/* {loading && <CustomHeader />} */}

            {loading && <AppRoutes />}
            {/* отображение footer сразу на всех страницах */}
            {window.innerWidth <= 600 && loading && <Footer />}
            {/* {loading && (
                <S.HideOrShow display={false}>
                   
                    <Footer />
                </S.HideOrShow>
            )} */}
        </>
    )
}
export default Avito
