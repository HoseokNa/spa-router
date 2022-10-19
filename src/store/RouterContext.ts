import { createContext } from 'react'

const RouterContext = createContext({
  pathname: '',
  changePathname: (nextPathname: string) => {},
})

export default RouterContext
