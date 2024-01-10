// import React, { useRef, useState, useEffect } from 'react'
// import * as S from './avatar.style'
// // import { useUpdateAvatarMutation } from '../../../redux/reducers/userApi'
// // import { GetUser } from '../../api/api'

// function ModalAvatar({ modal, setModal, avatar }) {
//     const [image, setImage] = useState(null)
//     const [disabled, setDisabled] = useState(true)
//     const [updateAvatar] = useUpdateAvatarMutation()

//     const inputRef = useRef(0)
//     const submitRef = useRef(0)

//     const updateFn = async (file) => {
//         const body = new FormData()
//         body.append('file', file)
//         await updateAvatar({ body }).unwrap()
//     }

//     const handleImageChange = async (event) => {
//         if (event.target.files && event.target.files[0]) {
//             setImage(URL.createObjectURL(event.target.files[0]))
//             setDisabled(false)
//         }
//     }

//     const handleClickToUpdate = async (e) => {
//         e.preventDefault()
//         const value = inputRef.current.files
//         if (value && value[0]) {
//             updateFn(value[0])
//             setModal('unvisible')
//             setImage(null)
//             setDisabled(true)
//         }
//     }

//     const getCurrentImg = () => {
//         if (avatar)
//             return <S.ModalImg src={`http://localhost:8090/${avatar}`} alt="" />
//         return null
//     }

//     useEffect(() => {}, [image])

//     return (
//         <S.ModalForm modal={modal}>
//             <form className="unvisible">
//                 <input
//                     type="file"
//                     ref={inputRef}
//                     onChange={(e) => handleImageChange(e)}
//                 />
//                 <input
//                     type="submit"
//                     ref={submitRef}
//                     onClick={(e) => handleClickToUpdate(e)}
//                     disabled={disabled}
//                 />
//             </form>
//             <S.ModalExit
//                 onClick={() => {
//                     setImage(null)
//                     setDisabled(true)
//                     setModal(false)
//                 }}
//             />
//             <S.ModalFormArea>
//                 <S.ModalImgContainer>
//                     {image ? (
//                         <S.ModalImg src={image} alt="" />
//                     ) : (
//                         getCurrentImg()
//                     )}
//                 </S.ModalImgContainer>
//                 <S.ModalButton onClick={() => inputRef.current.click()}>
//                     Выберите файл
//                 </S.ModalButton>
//                 <S.ModalButton
//                     disabled={disabled}
//                     onClick={() => submitRef.current.click()}
//                 >
//                     Загрузить
//                 </S.ModalButton>
//             </S.ModalFormArea>
//         </S.ModalForm>
//     )
// }
// export default ModalAvatar
