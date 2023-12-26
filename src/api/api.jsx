import axios from 'axios'

const way = 'http://localhost:8090'

async function GetAllAds() {
    const response = await axios.get(`${way}/ads`)
    // возвр нужн-ю нам инфо, она в data
    return response.data
}

export async function GetUserAd({ userid }) {
    const response = await axios.get(`${way}/ads?user_id=${userid}&sorting=new`)
    // возвр нужн-ю нам инфо, она в data
    return response.data
}

export async function getTest() {
    const resp = await fetch('http://localhost:8090/ads')
    return resp.json()
}

export default GetAllAds

//  function GetAllAds() {
//     return axios.get(`http://localhost:8090/ads`).then((resp) => resp.data)
// }
