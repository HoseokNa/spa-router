import React, { ReactElement, useEffect, useState } from 'react'
import routerContext from '../store/RouterContext'

interface RouterProps {
  children: React.ReactNode
}

const Router = ({ children }: RouterProps) => {
  const [pathname, setPathname] = useState<string>(location.pathname)

  const changePathname = (nextPathname: string) => {
    setPathname(nextPathname)
    window.history.pushState({ pathname: nextPathname }, '', nextPathname)
  }

  const contextValue = {
    pathname,
    changePathname: changePathname,
  }

  useEffect(() => {
    const onPathChange = () => setPathname(location.pathname)

    window.addEventListener('popstate', onPathChange)

    return () => {
      window.removeEventListener('popstate', onPathChange)
    }
  }, [])

  const currentRoute = React.Children.toArray(children).find(
    (e) => (e as ReactElement).props.path === pathname
  ) as ReactElement

  return (
    <routerContext.Provider value={contextValue}>
      {currentRoute}
    </routerContext.Provider>
  )
}

export default Router
