import useRouter from '../hooks/useRouter'

const Root = () => {
  const { push } = useRouter()

  return (
    <div>
      <h1>Root!</h1>
      <button onClick={() => push('/about')}>Go About!</button>
    </div>
  )
}

export default Root
