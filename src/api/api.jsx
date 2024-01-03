import axios from 'axios'

const way = 'http://localhost:8090'

// Получение всех постов
async function GetAllAds() {
    const response = await axios.get(`${way}/ads`)
    // возвр нужн-ю нам инфо, она в data
    return response.data
}
// &sorting=new

// Получение постов конкретного продавца
export async function GetUserAd({ id }) {
    console.log(id)
    const response = await axios.get(`${way}/ads?user_id=${id}`)
    // возвр нужн-ю нам инфо, она в data
    return response.data
}

// Регистрация
export async function addRegistrUser({ email, password, name, surname, city }) {
    const response = await axios({
        method: 'POST',
        url: `${way}/auth/register`,
        data: {
            email: `${email}@gmail.com`,
            password,
            name,
            surname,
            city,
        },
    })

    return response.data
}

// Получаем токен
export async function getToken({ email, password }) {
    const response = await axios({
        method: 'POST',
        url: `${way}/auth/login`,
        data: {
            email: `${email}@gmail.com`,
            password,
        },
    })
    return response.data
}

// Получить текущего юзера
// принимаем токен со стр логина
export async function GetUser({ token }) {
    const response = await axios({
        method: 'GET',
        url: `${way}/user`,
        headers: {
            authorization: `Bearer ${token}`,
        },
    })
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
