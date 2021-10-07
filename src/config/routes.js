import LayoutAdmin from '../layouts/LayoutAdmin'
import LayoutBasic from '../layouts/LayoutBasic'

// Admin Pages
import AdminHome from '../pages/Admin'
import Home from '../pages/Home'
import Contact from '../pages/Contact'
import Error404 from '../pages/Error404'
import GitJs from '../pages/Resources/GitJs/GitJs'
import ReactJs from '../pages/Resources/ReactJs/ReactJs'
const routes = [
  {
    path: "/admin",
    component: LayoutAdmin,
    exact: false,
    routes: [{
      path: "/admin",
      component: AdminHome,
      exact: true,
    },
    {
      component: Error404,
    }
    ]
  },
  {
    path: "/",
    component: LayoutBasic,
    exact: false,
    routes: [
      {
        path: "/",
        component: Home,
        exact: true,
      },
      {
        path: "/contact",
        component: Contact,
        exact: true,
      },
      {
        path: "/resources/gitjs/gitjs",
        component: GitJs,
        exact: true,
      },
      {
        path: "/resources/reactjs/reactjs",
        component: ReactJs,
        exact: true,
      },
      {
        component: Error404,
      }
    ]
  }
]

export default routes