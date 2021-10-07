import { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Layout } from 'antd'
import MenuTop from '../components/Admin/MenuTop'
import MenuSider from '../components/Admin/MenuSider';

import './LayoutBasic.scss'




const LayoutBasic = ({ routes }) => {
  const [menuCollapsed, setMenuCollapsed] = useState(true)
  const { Header, Content, Footer } = Layout
  return (
    <Layout>
      <MenuSider menuCollapsed={menuCollapsed} />
      <Layout className="layout-basic" style={{ marginLeft: menuCollapsed ? "80px" : "200px" }}>
        <Header className="layout-basic__header">
          <MenuTop menuCollapsed={menuCollapsed} setMenuCollapsed={setMenuCollapsed} />
        </Header>
        <Content className="layout-basic__content">
          <LoadRoutes routes={routes} />
        </Content>
        <Footer className="layout-basic__footer"> Eyexoft</Footer>
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