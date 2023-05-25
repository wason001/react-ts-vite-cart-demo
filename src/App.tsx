import routes from './router'
import { useRoutes } from 'react-router-dom'

function App() {
  const Router = useRoutes(routes)
  return <div>{Router}</div>
}

export default App
