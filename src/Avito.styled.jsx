import styled from 'styled-components'

export const HideOrShow = styled.div`
    //  display: ${(props) => props.$display || 'flex'};

    //  display: ${(props) => (props.display ? 'flex' : 'none')};

    /* @media screen and (max-width: 590px) {
        width: 225px;
       
    } */
`

// export const mobileSize = 590

// const size = {
//     mobile: '590',
// }

export const device = styled.div`
    display: ${(props) => (props.display ? 'none' : 'flex')};
`
//  mobile: `(min-width: ${size.mobile}px)`;

const sizeMob = {
    mobile: '590px',
}

export const dev = {
    Mobile: `(min-width: ${sizeMob.mobile})`,
}

// export const test = styled.div`

// @media { ${(props) => (props.${dev.Mobile} ? '')}
// }

/* @media ${dev.Mobile} {
       width: 10%;
       
    }` */
