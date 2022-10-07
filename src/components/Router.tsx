import React, { ReactElement } from 'react'

interface RouterProps {
  children: React.ReactNode
}

const Router = ({ children }: RouterProps) => {
  const { pathname } = window.location
  const currentRoute = React.Children.toArray(children).find(
    (e) => (e as ReactElement).props.path === pathname
  ) as ReactElement

  return currentRoute
}

export default Router
