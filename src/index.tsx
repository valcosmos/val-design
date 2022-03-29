/*
import React from 'react'
import ReactDOM from 'react-dom'
import './styles/index.scss'
import App from './App'
import reportWebVitals from './reportWebVitals'

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals()
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'

ReactDOM.render(
  // <React.StrictMode>
  // <App />
  // </React.StrictMode>,
  <App />,
  document.getElementById('root')
)
library.add(fas)
*/
export { default as Button } from './components/Button'
export { default as Menu } from './components/Menu'
export { default as Icon } from './components/Icon'
export { default as Input } from './components/Input'
export { default as Alert } from './components/Alert'
