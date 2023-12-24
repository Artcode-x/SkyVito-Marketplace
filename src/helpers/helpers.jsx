// Input - Валидация

export function safeTextInput(event) {
    return event.target.value.replace(/[^a-zA-Zа-яА-Я]/g, '')
}

export function safeTelInput(event) {
    return event.target.value.replace(/[^0-9+]/g, '')
}

// Format - Замена данных

export function formatLowString(string) {
    if (string) return string.toLowerCase()
    return ''
}

export function formatUppString(string) {
    if (string) return string[0].toUpperCase() + string.toLowerCase().slice(1)
    return ''
}

export function formatSafeString(string) {
    if (string)
        return string
            .replaceAll('&', '&amp;')
            .replaceAll('<', '&lt;')
            .replaceAll('>', '&gt;')
            .replaceAll('"', '&quot;')
    return ''
}

export function formatNumber(number) {
    if (number.length === 1) return `0${number.toString()}`
    return number.toString()
}

export function formatMonth(month) {
    if (month === 0 || month === '01') return 'января'
    if (month === 1 || month === '02') return 'февраля'
    if (month === 2 || month === '03') return 'марта'
    if (month === 3 || month === '04') return 'апреля'
    if (month === 4 || month === '05') return 'мая'
    if (month === 5 || month === '06') return 'июня'
    if (month === 6 || month === '07') return 'июля'
    if (month === 7 || month === '08') return 'августа'
    if (month === 8 || month === '09') return 'сентября'
    if (month === 9 || month === '10') return 'октября'
    if (month === 10 || month === '11') return 'ноября'
    if (month === 11 || month === '12') return 'декабря'
    return ''
}

export function formatDate(time) {
    const date = new Date(time)
    const day = formatNumber(date.getDate())
    const month = formatMonth(date.getMonth())
    const hours = formatNumber(date.getHours())
    const minutes = formatNumber(date.getMinutes())

    return `${day} ${month} в ${hours}:${minutes}`
}

export function formatSellsDate(date) {
    const month = formatMonth(
        date.slice(date.indexOf('-') + 1, date.lastIndexOf('-'))
    )
    const year = date.slice(0, date.indexOf('-'))

    return `${month} ${year}`
}

export function formatCommentDate(date) {
    const day = date.slice(8, 10)
    const month = formatMonth(
        date.slice(date.indexOf('-') + 1, date.lastIndexOf('-'))
    )

    return `${day} ${month}`
}

export function formatTitle(string) {
    if (string) return formatUppString(string.replaceAll(' ', '_'))
    return ''
}

// Search

export function searchItem(title, search) {
    return formatLowString(title).includes(formatLowString(search))
}

// pressKey

export function pressEnterKey(event, callback, disabled) {
    if (disabled) return
    if (event.keyCode === 13) callback()
}
