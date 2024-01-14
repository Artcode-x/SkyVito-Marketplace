import axios from 'axios'

const way = 'http://localhost:8090'

//  получение токена с localStorage
export const getTokenFromLocalStorage = () => {
    const token = localStorage.getItem('token')
    return token ? JSON.parse(token) : null
}

export async function updateToken() {
    // если где то попадаем на ошибку 401, берется токен с localstorage
    const token = localStorage.getItem('token')
    // обновляем токен
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
    // записываем обновленный в LocalStorage
    return localStorage.setItem('token', JSON.stringify(response.data))
}

export async function updateTokenFromLocalStorage() {
    const token = localStorage.getItem('token')

    const newToken = await updateToken({ token })

    localStorage.setItem('token', JSON.stringify(newToken))

    return token ? JSON.parse(token) : null
}

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
export async function getUser() {
    let response
    response = await axios({
        method: 'GET',
        url: `${way}/user`,
        headers: {
            authorization: `Bearer ${getTokenFromLocalStorage().access_token}`,
        },
    })
    if (response.status === 401) {
        await updateToken()
        response = await axios({
            method: 'GET',
            url: `${way}/user`,
            headers: {
                authorization: `Bearer ${
                    getTokenFromLocalStorage().access_token
                }`,
            },
        })
    }
    return response.data
}

// получение комментариев/отзывов к объявлению
export async function getCommentsAdv({ id }) {
    const response = await axios.get(`${way}/ads/${id}/comments`)
    return response.data
}

// добавление комментария/отзыва
export async function addComment({ id, text }) {
    let response
    response = await axios(`${way}/ads/${id}/comments`, {
        method: 'POST',
        data: JSON.stringify({ text }),
        headers: {
            'Content-Type': 'application/json',
            authorization: `Bearer ${getTokenFromLocalStorage().access_token}`,
        },
    })
    if (response.status === 401) {
        await updateToken()
        response = await axios(`${way}/ads/${id}/comments`, {
            method: 'POST',
            data: JSON.stringify({ text }),
            headers: {
                'Content-Type': 'application/json',
                authorization: `Bearer ${
                    getTokenFromLocalStorage().access_token
                }`,
            },
        })
    }
    return response.data
}
// обновление данных в profile
export const updateUser = async (user) => {
    const response = await axios(`${way}/user`, {
        method: 'PATCH',
        headers: {
            'content-type': 'application/json',
            authorization: `Bearer ${getTokenFromLocalStorage().access_token}`,
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
    return response.data
}

// смена аватарки
export async function editProfileAvatar({ formAvatar }) {
    console.log(formAvatar)
    const response = await axios(`${way}/user/avatar`, {
        method: 'POST',
        data: formAvatar,
        headers: {
            Authorization: `Bearer ${getTokenFromLocalStorage().access_token}`,
        },
    })

    return response.data
}

export async function addPublish({ title, description, price }) {
    let response = await axios(`${way}/adstext`, {
        method: 'POST',
        data: JSON.stringify({
            title,
            description,
            price,
        }),
        headers: {
            'content-type': 'application/json',
            authorization: `Bearer ${getTokenFromLocalStorage().access_token}`,
        },
    })
    if (response.status === 401) {
        await updateToken()
        response = await axios(`${way}/adstext`, {
            method: 'POST',
            data: JSON.stringify({
                title,
                description,
                price,
            }),
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${
                    getTokenFromLocalStorage().access_token
                }`,
            },
        })
    }

    return response.data
}

// добавление изображения в объявление
export async function addImgPublish({ id, test }) {
    let response = await axios(`${way}/ads/${id}/image`, {
        method: 'POST',
        data: test,
        headers: {
            Authorization: `Bearer ${getTokenFromLocalStorage().access_token}`,
        },
    })
    if (response.status === 401) {
        await updateToken()
        response = await axios(`${way}/ads/${id}/image`, {
            method: 'POST',
            data: test,
            headers: {
                Authorization: `Bearer ${
                    getTokenFromLocalStorage().access_token
                }`,
            },
        })
    }

    return response.data
}

// объявление по id
export async function getAdvByid(id) {
    const response = await axios.get(`${way}/ads/${id}`)
    return response.data
}

// удаление объявления
export async function delAdv({ id }) {
    let response = await axios(`${way}/ads/${id}`, {
        method: 'DELETE',

        headers: {
            authorization: `Bearer ${getTokenFromLocalStorage().access_token}`,
        },
    })
    if (response.status === 401) {
        await updateToken()
        response = await axios(`${way}/ads/${id}`, {
            method: 'DELETE',

            headers: {
                authorization: `Bearer ${
                    getTokenFromLocalStorage().access_token
                }`,
            },
        })
    }

    return response.data
}

// редактирование объявления
export async function editionAdv({ title, description, price, images, id }) {
    let response = await axios(`${way}/ads/${id}`, {
        method: 'PATCH',
        data: JSON.stringify({
            title,
            description,
            price,
            images,
        }),
        headers: {
            'content-type': 'application/json',
            authorization: `Bearer ${getTokenFromLocalStorage().access_token}`,
        },
    })
    if (response.status === 401) {
        await updateToken()
        response = await axios(`${way}/ads/${id}`, {
            method: 'PATCH',
            data: JSON.stringify({
                title,
                description,
                price,
                images,
            }),
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${
                    getTokenFromLocalStorage().access_token
                }`,
            },
        })
    }
    return response.data
}

// Удаление фото (в edit)
export async function delfotoinAd({ id, urlfotki }) {
    let response = await axios(`${way}/ads/${id}/image?file_url=${urlfotki}`, {
        method: 'DELETE',
        headers: {
            authorization: `Bearer ${getTokenFromLocalStorage().access_token}`,
        },
    })
    if (response.status === 401) {
        await updateToken()
        response = await axios(`${way}/ads/${id}/image?file_url=${urlfotki}`, {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${
                    getTokenFromLocalStorage().access_token
                }`,
            },
        })
    }
    return response.data
}

export async function uploadFotoAd({ id, images }) {
    let response = await axios(`${way}/ads/${id}/image`, {
        method: 'POST',
        data: images,
        headers: {
            // 'content-type': 'multipart/form-data',
            authorization: `Bearer ${getTokenFromLocalStorage().access_token}`,
        },
    })
    if (response.status === 401) {
        await updateToken()
        response = await axios(`${way}/ads/${id}/image`, {
            method: 'POST',
            data: images,
            headers: {
                // 'content-type': 'multipart/form-data',
                authorization: `Bearer ${
                    getTokenFromLocalStorage().access_token
                }`,
            },
        })
    }

    return response.data
}

export default GetAllAds
