interface RouteProps {
  path: string
  component: React.ReactElement
}

const Route = ({ component }: RouteProps) => {
  return component
}

export default Route
