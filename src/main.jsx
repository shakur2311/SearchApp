import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import IndexContext from './Contexts/indexContext'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <IndexContext>
        <App/>
    </IndexContext>
)
