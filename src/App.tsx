import './App.css'
import useRouterElements from '../useRouterElement'
function App() {
  const elementRouter = useRouterElements()
  return <div>{elementRouter}</div>
}

export default App
