import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import Avito from './Avito'
import store from './store/store'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Provider store={store}>
                <Avito />
            </Provider>
        </BrowserRouter>
    </React.StrictMode>
)
