
import { Link } from 'react-router-dom'
import { Layout, Menu } from 'antd'

import './MenuSider.scss';

const MenuSider = (props) => {
  const { menuCollapsed } = props;
  const { Sider } = Layout;
  const { SubMenu } = Menu;

  return (
    <Sider className="admin-sider" collapsed={menuCollapsed}>
      <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
        <SubMenu key="sub1" title="Primero">
          <Menu.Item key="1">
            <Link to={"/admin"}>
              <span className="nav-text">Primero</span>
            </Link>
          </Menu.Item>
        </SubMenu>
        <SubMenu key="sub2" title="Segundo" >
          <Menu.Item key="2">
            <Link to={"/admin/menu-web"}>
              <span className="nav-text">Segundo</span>
            </Link>
          </Menu.Item>
        </SubMenu>
        <SubMenu key="sub3" title="GitJs" >
          <Menu.Item key="3">
            <Link to={"/resources/gitjs"}>
              <span className="nav-text">Inicio ISSUE</span>
            </Link>
          </Menu.Item>
        </SubMenu>
        <SubMenu key="sub4" title="ReactJs" >
          <Menu.Item key="4">
            <Link to={"/resources/reactjs"}>
              <span className="nav-text">Instalación</span>
            </Link>
          </Menu.Item>
        </SubMenu>
      </Menu>
    </Sider>
  )
}

export default MenuSider
