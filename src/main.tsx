import React from 'react'
import ReactDOM from 'react-dom/client'
import About from './components/About'
import Root from './components/Root'
import Route from './components/Route'
import Router from './components/Router'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Router>
      <Route path="/" component={<Root />} />
      <Route path="/about" component={<About />} />
    </Router>
  </React.StrictMode>
)
