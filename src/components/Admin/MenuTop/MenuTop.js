import './MenuTop.scss'
import EyeLogo from '../../../assets/img/svg/Logo_MrElvix.svg'
import { Button } from 'antd'
import { MenuUnfoldOutlined, MenuFoldOutlined, PoweroffOutlined } from '@ant-design/icons';


const MenuTop = (props) => {
  const { menuCollapsed, setMenuCollapsed } = props;
  return (
    <div className="menu-top">
      <div className="menu-top_left">
        <img
          className="menu-top_left-logo"
          src={EyeLogo}
          alt="Eyexoft"
        />
        <Button type="link" onClick={() => setMenuCollapsed(!menuCollapsed)}>
          {menuCollapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        </Button>
      </div>
      <div className="menu-top_right">
        <Button type="link" onClick={() => console.log("click")}>
          <PoweroffOutlined />
        </Button>
      </div>
    </div>
  )

}

export default MenuTop
