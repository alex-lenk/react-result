import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.css'
import Counter from './components/counter'

const root = ReactDOM.createRoot(document.getElementById('root'))

const App = () => {
    return <Counter/>
}

root.render(<App/>)
