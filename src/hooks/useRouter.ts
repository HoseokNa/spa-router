import { useContext } from 'react'
import RouterContext from '../store/RouterContext'

const useRouter = () => {
  const { pathname, changePathname } = useContext(RouterContext)

  const push = (nextPathname: string) => changePathname(nextPathname)

  return { push }
}

export default useRouter
