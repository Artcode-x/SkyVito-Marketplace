import { Link } from 'react-router-dom'
// import { useState } from 'react'
import { useDispatch } from 'react-redux'
import * as S from './footer.styled'
import img01 from '../img/icon_01.png'
import img02 from '../img/icon_02.png'
import img03 from '../img/icon_03.png'
// import AddAds from '../modal/addAds/addAds'
import { addNewAdUpdate } from '../../store/reducers/reducers'

function Footer() {
    const dispatch = useDispatch()

    const setOpenFormAddAds = () => {
        dispatch(addNewAdUpdate(true))
    }

    //  const [openFormAddAds, setOpenFormAddAds] = useState()
    //  console.log(openFormAddAds)
    return (
        <>
            {/* {openFormAddAds && (<></>)< AddAds/>} */}
            <S.Footer>
                <S.FooterContainer>
                    <S.FooterImg>
                        <Link to="/">
                            <S.Img src={img01} alt="home" />
                        </Link>
                    </S.FooterImg>
                    <S.FooterImg>
                        {/* <Link to="/"> */}
                        <S.Img
                            src={img02}
                            alt="add"
                            onClick={setOpenFormAddAds}
                        />
                        {/* </Link> */}
                    </S.FooterImg>
                    <S.FooterImg>
                        <Link to="/login">
                            <S.Img src={img03} alt="login" />
                        </Link>
                    </S.FooterImg>
                </S.FooterContainer>
            </S.Footer>
        </>
    )
}

export default Footer
