import axios from 'axios'

const way = 'http://localhost:8090'

// Получение всех постов, в конце адреса можно добавить сортировку: ?sorting=new
async function GetAllAds() {
    const response = await axios.get(`${way}/ads`)
    // возвр нужн-ю нам инфо, она в data
    return response.data
}
// &sorting=new

// Получение постов конкретного продавца
export async function GetUserAd({ id }) {
    const response = await axios.get(`${way}/ads?user_id=${id}`)
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

//  получение токена с localStorage
export const getTokenFromLocalStorage = () => {
    const token = localStorage.getItem('token')
    return token ? JSON.parse(token) : null
}

// получение комментариев/отзывов к объявлению
export async function getCommentsAdv({ id }) {
    const response = await axios.get(`${way}/ads/${id}/comments`)

    return response.data
}

// обновляет токен
export async function refreshTokens({ token }) {
    const response = await axios({
        method: 'PUT',
        url: `${way}/auth/login`,
        headers: {
            'Content-Type': 'application/json',
            authorization: `Bearer ${token.access_token}`,
        },
        data: {
            access_token: token.access_token,
            refresh_token: token.refresh_token,
        },
    })
    return response.data
}

// добавление комментария/отзыва
export async function addComment({ id, token, text }) {
    const newToken = await refreshTokens({ token })
    const newComment = await axios(`${way}/ads/${id}/comments`, {
        method: 'POST',
        data: JSON.stringify({ text }),
        headers: {
            'Content-Type': 'application/json',
            authorization: `Bearer ${newToken.access_token}`,
        },
    })
    return { newComment, newToken }
}
// обновление данных в profile
export const updateUser = async (user, token) => {
    // const newToken = await refreshTokens({ token })
    const response = await axios(`${way}/user`, {
        method: 'PATCH',
        headers: {
            'content-type': 'application/json',
            authorization: `Bearer ${token.access_token}`,
        },
        data: JSON.stringify({
            role: 'user',
            email: user.email,
            name: user.name,
            surname: user.surname,
            phone: user.phone,
            city: user.city,
        }),
    })
    return response
}

// обновить токены
export async function updateToken({ token }) {
    const response = await axios(`${way}/auth/login`, {
        method: 'PUT',
        data: JSON.stringify({
            access_token: token.access_token,
            refresh_token: token.refresh_token,
        }),
        headers: {
            'content-type': 'application/json',
            Authorization: `Bearer ${token.access_token}`,
        },
    })

    return response.data
}

// смена аватарки
export async function editProfileAvatar({ formAvatar, token }) {
    const newToken = await updateToken({ token })
    const response = await fetch(`${way}/user/avatar`, {
        method: 'POST',
        body: formAvatar,
        headers: {
            Authorization: `Bearer ${newToken.access_token}`,
        },
    })
    const user = await response.json()
    return { user, newToken }
}

export async function addPublish({ title, description, price, token }) {
    const newToken = await updateToken({ token })
    const response = await axios(`${way}/adstext`, {
        method: 'POST',
        data: JSON.stringify({
            title,
            description,
            price,
        }),
        headers: {
            'content-type': 'application/json',
            authorization: `Bearer ${newToken.access_token}`,
        },
    })
    return { response, newToken }
}

// добавление изображения в объявление
export async function addImgPublish({ id, test, updateTokenFromApi }) {
    const response = await axios(`${way}/ads/${id}/image`, {
        method: 'POST',
        data: test,
        headers: {
            Authorization: `Bearer ${updateTokenFromApi.access_token}`,
        },
    })

    return response.data
}

// объявление по id
export async function getAdvByid(id) {
    const response = await axios.get(`${way}/ads/${id}`)
    return response.data
}

// удаление объявления
export async function delAdv({ id, token }) {
    const newToken = await updateToken({ token })
    const response = await axios(`${way}/ads/${id}`, {
        method: 'DELETE',

        headers: {
            authorization: `Bearer ${newToken.access_token}`,
        },
    })
    return { response, newToken }
}

// редактирование объявления
export async function editionAdv({
    title,
    description,
    price,
    images,
    id,
    token,
}) {
    const newToken = await updateToken({ token })
    const response = await axios(`${way}/ads/${id}`, {
        method: 'PATCH',
        data: JSON.stringify({
            title,
            description,
            price,
            images,
        }),
        headers: {
            'content-type': 'application/json',
            authorization: `Bearer ${newToken.access_token}`,
        },
    })
    return { response, newToken }
}

export default GetAllAds
