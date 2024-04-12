
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import { Layout }  from './components/index.js'
import {Messages, Help, News, Home} from './pages/index.js'

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path='/' element={<Layout />}>
          <Route path='/' element={<Home />} />
          <Route path='/messages' element={<Messages />} />
          <Route path='/help' element={<Help />} />
          <Route path='/news' element={<News />} />
        </Route>
      </>
    )
  )


  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
