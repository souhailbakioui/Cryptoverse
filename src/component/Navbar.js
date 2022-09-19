import React from 'react'
import {Typography,Avatar,Menu} from  'antd';
import {Link} from 'react-router-dom';
import {HomeOutlined,MoneyCollectOutlined,BulbOutlined,FundOutlined,MenuOutlined} from '@ant-design/icons'
import icon from "../images/cryptocurrency.png";


const Navbar = () => {
  return (
    <div className='nav-container'>
        <div className='logo-container'> 
        <Avatar src={icon} />
        <Typography.Title level={2} className="Logo">
            <Link to ="/">Cryptovers</Link>
        </Typography.Title>
        </div>
        <Menu theme="dark">

        <Menu.Item key="3" icon={<HomeOutlined/>}>
            <Link to="/">Home</Link>
          </Menu.Item>


          <Menu.Item key="3" icon={<FundOutlined/>}>
            <Link to="/cryptocurrencies">Cryptocurrencies</Link>
          </Menu.Item>

          <Menu.Item key="3" icon={<MoneyCollectOutlined/>}>
            <Link to="/exchanges">Exchanges</Link>
          </Menu.Item>

          <Menu.Item key="3" icon={<BulbOutlined/>}>
            <Link to="/news">News</Link>
          </Menu.Item>


        </Menu>
        
        </div>
    
  )
}

export default Navbar