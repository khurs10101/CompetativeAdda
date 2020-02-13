import React from 'react'
import ReactDOM from 'react-dom'
import AppRoute from './routes/AppRoute'
import './styles/_base.scss'

const jsx=(
    <div>
        <AppRoute/>
    </div>
)


ReactDOM.render(jsx, document.getElementById('app'))