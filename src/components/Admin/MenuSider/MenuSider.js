
import { Link } from 'react-router-dom'
import { Layout, Menu } from 'antd'

import './MenuSider.scss';

const MenuSider = (props) => {
  const { menuCollapsed } = props;
  const { Sider } = Layout;

  return (
    <Sider className="admin-sider" collapsed={menuCollapsed}>
      <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
        <Menu.Item key="1">
          <Link to={"/admin"}>
            <span className="nav-text">Git</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link to={"/admin/menu-web"}>
            <span className="nav-text">React</span>
          </Link>
        </Menu.Item>
      </Menu>
    </Sider>
  )
}

export default MenuSider
