import { ReactNode, Suspense, lazy } from 'react'
import { Navigate } from 'react-router-dom'
import Home from '../pages/Home'

const Page1 = lazy(() => import('../pages/Page1'))
const Page2 = lazy(() => import('../pages/Page2'))
const Cart = lazy(() => import('../pages/Cart'))

const withWrapperCom = (comp: ReactNode) => (
  <Suspense fallback={<div>Loading...</div>}>{comp}</Suspense>
)

const routes = [
  {
    path: '/',
    element: <Navigate to='/page1' />
  },
  {
    path: '/',
    element: withWrapperCom(<Home />),
    children: [
      {
        path: '/page1',
        element: withWrapperCom(<Page1 />)
      },
      {
        path: '/page2',
        element: withWrapperCom(<Page2 />)
      },
      {
        path: '/cart',
        element: withWrapperCom(<Cart />)
      }
    ]
  }
]

export default routes
