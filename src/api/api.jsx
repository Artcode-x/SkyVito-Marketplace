import axios from 'axios'

async function GetAllAds() {
    const response = await axios.get(`http://localhost:8090/ads`)
    // возвр нужн-ю нам инфо, она в data
    return response.data
}

// export async function getTest() {
//     const resp = await fetch('http://localhost:8090/ads')
//     return resp.json()
// }

export default GetAllAds

//  function GetAllAds() {
//     return axios.get(`http://localhost:8090/ads`).then((resp) => resp.data)
// }
