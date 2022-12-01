import React, {lazy, useEffect, useState} from 'react';
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Breadcrumb, Layout, Menu } from 'antd';
import './index.css'
import AppRoute from "./router/AppRoute";
import {useLocation, withRouter} from "react-router-dom";


const { Header, Content, Footer, Sider } = Layout;
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
const items = [
  getItem('主页', '/home', <PieChartOutlined />),
  getItem('用户', '/user', <DesktopOutlined />),
  getItem('信息', '/info', <UserOutlined />),
  getItem('人员', '/person', <TeamOutlined />),
  getItem('工具', 'util', <TeamOutlined />,[
    getItem('first', '/util/first'),
    getItem('second', '/util/second'),
    getItem('third', '/util/third'),
  ]),
];
const App = (props) => {
  const [collapsed, setCollapsed] = useState(false);
  const [defaultSelectedKeys, setDefaultSelectedKeys]=useState(['/home']);
  // 设置刷新的时候menu selectedKeys
  const [selectedKeys, setSelectedKeys] = useState([]);
  // 设置菜单展开下标
  const [openKeys, setOpenKeys] = useState([])
  let location = useLocation();


  useEffect(()=>{
    if(location.pathname === '/') {
      props.history.push('/home')
    }
    setSelectedKeys([location.pathname])
  },[location.pathname])

  useEffect(()=>{
    if(location.pathname.split('/').length > 1){
    const menuSub = getOpenKey();
    setOpenKeys([menuSub?.key])
    }
  },[])


  // 获取有展开页的key
  const getOpenKey = ()=> {
    let index = 0
    while (index < items.length) {
      if (items[index] && items[index].key !== location.pathname) {
        if (items[index].children &&items[index].children.length ) {
          console.log('children',items[index].children );
          const findIndex = items[index].children.findIndex(item => item.key === location.pathname);
          console.log('findIndex', findIndex);
          if (findIndex !== -1) return items[index];
        }
      }
      index++;
    }
  }


  const menuClick = (e)=>{
    props.history.push(e.key, {title: '100'})
  }


  return (
    <Layout
      style={{
        minHeight: '100vh',
      }}
    >
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div className="logo" />
        <Menu theme="dark"
              defaultSelectedKeys={defaultSelectedKeys}
              selectedKeys={selectedKeys}
              onOpenChange={(openKeys) => {
                setOpenKeys(openKeys);
              }}
              openKeys={openKeys}
              mode="inline"
              items={items}
              onClick={menuClick} />
      </Sider>
      <Layout className="site-layout">
        <Header
          className="site-layout-background"
          style={{
            padding: 0,
          }}
        />
        <Content
          style={{
            margin: '0 16px',
          }}
        >
          <div
            className="site-layout-background"
            style={{
              padding: 24,
              // minHeight: 360,
            }}
          >

            <AppRoute />


          </div>
        </Content>
        <Footer
          style={{
            textAlign: 'center',
          }}
        >
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};
export default withRouter(App);
