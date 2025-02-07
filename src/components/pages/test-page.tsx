import { useParams } from 'react-router'

const TestPage = () => {
  const { id } = useParams()

  return <div>Test Page {id}</div>
}

export default TestPage
