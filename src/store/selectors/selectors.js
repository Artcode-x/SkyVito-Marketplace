const mainSelector = (store) => store.store

export default mainSelector

export const userSelector = (store) => mainSelector(store).user

export const advsAllSelector = (store) => mainSelector(store).advsAll

export const searchSelector = (store) => mainSelector(store).search

export const userSelProdSelector = (store) =>
    mainSelector(store).userSelectProduct

export const tokenSelector = (store) => mainSelector(store).token

export const showAddNewAdWindwowSelector = (store) =>
    mainSelector(store).showNewAd

export const showEditAdWindowSelector = (store) =>
    mainSelector(store).editAdWindow

export const flagforEditAdSelector = (store) =>
    mainSelector(store).flagforEditAd
