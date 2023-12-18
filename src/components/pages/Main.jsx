import { useDispatch, useSelector } from 'react-redux'
import { userSelector } from '../../store/selectors/selectors'
import {
    userStateUpdate,
    userStateUpdate2,
} from '../../store/reducers/reducers'

function Main() {
    const dispatch = useDispatch()
    const user = useSelector(userSelector)
    const click = () => {
        console.log(user)
        dispatch(userStateUpdate())
        dispatch(userStateUpdate2('test2'))
    }
    return (
        <button type="button" onClick={click}>
            KNOPKA
        </button>
    )
}

export default Main
