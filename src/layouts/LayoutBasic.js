import { Route, Switch } from 'react-router-dom';
import { Layout } from 'antd'

import './LayoutBasic.scss'

const LayoutBasic = ({ routes }) => {
  const { Content, Footer } = Layout
  return (
    <Layout>
      <h2>Menu...</h2>
      <Layout>
        <Content>
          <LoadRoutes routes={routes} />
        </Content>
        <Footer> Eyexoft</Footer>
      </Layout>
    </Layout>
  )
}

export default LayoutBasic

function LoadRoutes({ routes }) {
  return (
    <Switch>
      {routes.map((route, index) => (
        <Route
          key={index}
          path={route.path}
          exact={route.exact}
          component={route.component}
        />
      ))}
    </Switch>
  )
}