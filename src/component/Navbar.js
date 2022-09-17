import React from 'react'
import {Typography,Avatar} from  'antd';
import {Link} from 'react-router-dom';
//import {HomeOutlined,MoneyCollectionOutlined,BuldOutlined,FundOutlined,MenuOutlined} from '@ant-design/icons'
import icon from "../images/cryptocurrency.png";

const Navbar = () => {
  return (
    <div className='nav-container'>
        <div className='logo-container'> 
        <Avatar src={icon} />
        <Typography.Title level={2} className="Logo">
            <Link to ="/">Cryptovers</Link>
        </Typography.Title>
        { /* <Button className="menu-control-container"></Button> */}
        
        </div>
    </div>
  )
}

export default Navbar