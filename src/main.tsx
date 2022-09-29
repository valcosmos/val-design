// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App'
// import './index.css'

// ReactDOM.createRoot(document.getElementById('root')!).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// )

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import './styles/index.scss'
library.add(fas)

export { default as Button } from './components/Button'
export { default as Menu } from './components/Menu'
export { default as Icon } from './components/Icon'
export { default as Input } from './components/Input'
export { default as Alert } from './components/Alert'
export { default as AutoComplete } from './components/AutoComplete'
export { default as Tabs } from './components/Tabs'
export { default as Upload } from './components/Upload'
export { default as Transition } from './components/Transition'
export { default as Progress } from './components/Progress'
export { default as message } from './components/Message'
export { default as Card } from './components/Card'
export { default as Skeleton } from './components/Skeleton'
