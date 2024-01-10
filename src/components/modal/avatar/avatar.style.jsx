// import styled from 'styled-components'
// import exit from '../../../images/exit.png'
// import exit_hover from '../../../images/exit-hover.png'

// export const ModalForm = styled.div`
//     --modal-width: 366px;
//     --modal-height: 647px;
//     position: absolute;
//     left: calc(50% - (var(--modal-width) / 2));
//     top: calc(50% - (var(--modal-height) / 2));
//     box-sizing: border-box;
//     width: var(--modal-width);
//     min-height: var(--modal-height);
//     background-color: #ffffff;
//     border-radius: 12px;
//     padding: 43px 47px 47px 40px;
//     display: flex;
//     align-items: center;
//     flex-direction: column;
//     box-shadow: 3px 3px 10px 5px #d9d9d9;
//     display: ${(props) => (props.modal === 'visible' ? 'block' : 'none')};
//     z-index: 2;
//     opacity: 1;
// `
// export const ModalExit = styled.div`
//     position: absolute;
//     left: 295px;
//     top: 25px;
//     width: 43px;
//     height: 43px;
//     background-image: url(${exit});
//     &:hover {
//         background-image: url(${exit_hover});
//     }
//     cursor: pointer;
// `
// export const ModalFormArea = styled.form`
//   display: flex;
//   margin-top: 50px;
//   width: 286px;
//   height: 470px;
//   flex-direction: column;
//   align-items: center;
//   padding-top:25px;
// }
// `
// export const ModalImgContainer = styled.div`
//     width: 170px;
//     height: 170px;
//     border-radius: 50%;
//     border: 1px solid #f0f0f0;
//     background-color: #f0f0f0;
//     overflow: hidden;
//     display: flex;
//     justify-content: center;
//     align-items: center;
// `
// export const ModalImg = styled.img`
//     width: 100%;
//     height: 100%;
//     object-fit: cover;
// `
// export const ModalInput = styled.input`
//     background-color: #ffffff;
//     border: 1px solid rgba(0, 0, 0, 0.2);
//     border-radius: 6px;
//     padding: 13px 19px;
//     width: 250px;
//     &::placeholder {
//         color: #d9d9d9;
//     }
// `
// export const ModalButton = styled.div`
//     display: flex;
//     align-items: center;
//     margin-left: 6px;
//     margin-top: 20px;
//     justify-content: center;
//     font-size: 16px;
//     line-height: 1;
//     color: #ffffff;
//     width: 154px;
//     height: 50px;
//     border-radius: 6px;
//     border: 1px solid #009ee4;
//     cursor: pointer;
//     background-color: ${(props) =>
//         props.disabled === true ? '#d9d9d9' : '#009ee4'};
//     border: ${(props) =>
//         props.disabled === true ? '1px solid #d9d9d9' : '1px solid #009ee4'};
//     &:hover {
//         background-color: ${(props) =>
//             props.disabled === true ? '#d9d9d9' : '#0080c1'};
//         border: ${(props) =>
//             props.disabled === true
//                 ? '1px solid #d9d9d9'
//                 : '1px solid #009ee4'};
//     }
//     &:active {
//         background-color: ${(props) =>
//             props.disabled === true ? '#d9d9d9' : '#009ee4'};
//         border: ${(props) =>
//             props.disabled === true
//                 ? '1px solid #d9d9d9'
//                 : '1px solid #009ee4'};
//     }
// `
// export const ModalFileName = styled.div`
//     margin-top: 20px;
//     width: 266px;
//     height: 30px;
//     background-color: #ffffff;
// `
