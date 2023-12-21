const mainSelector = (store) => store.store

export default mainSelector

export const userSelector = (store) => mainSelector(store).user

export const advsAllSelector = (store) => mainSelector(store).advsAll
