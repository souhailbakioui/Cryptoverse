import React from 'react';
import {BrowserRouter as Router, Route,Routes, Link } from 'react-router-dom';

import {Layout,Typography,Space} from 'antd';

//import {Navbar} from "./component"
import {Navbar,HomePage,Exchanges,Cryptocurrencies,CryptoDetails,News}  from './component';
import './App.css';
const App=() => {

    return (
<div className='App'>

    <div className='Navbar'>
        <Navbar/>
    </div>
    <div className='main'>
        <Layout>
        <div className='routes'>
            <Routes>
                <Route exact path='/'  element={<HomePage/>}/>
                <Route exact path='/exchanges' element={<Exchanges/>}/>
                <Route exact path='/cryptocurrencies' element={<Cryptocurrencies/>}/>
                <Route exact path='/crypto/:coinId' element={<CryptoDetails/>} />   
                <Route exact path='/news' element={<News/>}/>  
            </Routes>
            
        </div>
        </Layout>
    </div>
    <div className='footer'>
        <Typography.Title level={5} style={{color:'white',textAlign:'center'}}>
        Cryptovers 
        <br/> All rights reserves
        </Typography.Title>
        <Space>
        <Link to="/">Home</Link>
        <Link to="/exchanges">Exchanges</Link>
        <Link to="/news">News</Link>

            </Space>
    </div>


</div>
    )
}

export default App