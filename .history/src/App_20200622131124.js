import React from 'react';
import logo from './logo.svg';
import './App.css';
import { render } from '@testing-library/react';
import CommandJobpool from './components/CommandJobpool/CommandJobpool'
import CommandHome from './components/CommandHome/CommandHome'
import CommandJob from './components/CommandJob/CommandJob'
import { Component } from 'react'
import { Layout, Menu, Breadcrumb } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Connection, Exchange, Queue } from './untils';
import { withRouter } from "react-router-dom";
import history from './history';

const config = {
    host:'localhost',
    port:5672,
    username:'x1234',
    password:'x1234',
    virtualhost:'vhost',
    ttl: 10000 
    // Message time to live,
    // ssl: true // Enable ssl connection, make sure the port is 5671 or an other ssl port
}

let connection = new Connection(config);

connection.on('error', (event) => {

});

connection.on('connected', (event) => {

    let queue = new Queue( this.connection, {
        name: 'queue_name',
        passive: false,
        durable: true,
        exclusive: false,
        consumer_arguments: {'x-priority': 1}
    });

    let exchange = new Exchange(connection, {
        name: 'exchange_name',
        type: 'direct',
        durable: true,
        autoDelete: false,
        internal: false
    });

    queue.bind(exchange, 'queue_name');

    // Receive one message when it arrives
    queue.on('message', (data) => {

    });

    // Receive all messages send with in a second
    queue.on('messages', (data) => {

    });

});



const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
export  class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      comments: [
        { username: 'test', content: 'test' },
        { username: 'test2', content: 'testhaha' }

      ]
    }
    let message = 'test';
    let routing_key = '';
    let properties = {
        expiration: 10000
    }
    this.exchange.publish(message, routing_key, properties)
  }

  render() {
    return (
      <div className="App">
        <Layout>
          <Header className="header">
            <div className="logo" />
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
              <Menu.Item key="1">nav 1</Menu.Item>
              <Menu.Item key="2">nav 2</Menu.Item>
              <Menu.Item key="3">nav 3</Menu.Item>
            </Menu>
          </Header>
          <Layout>
            <Sider width={200} className="site-layout-background">
              <Menu
                mode="inline"
                defaultSelectedKeys={['0']}
                defaultOpenKeys={['sub1']}
                style={{ height: '100%', borderRight: 0 }}
              >
                <SubMenu key="sub1" icon={<UserOutlined />} title="subnav 1">
                  <Menu.Item key="1"><Link to="/">Home</Link></Menu.Item>

                  <Menu.Item key="2"><Link to="/jobpool">Jobpool</Link></Menu.Item>
                  <Menu.Item key="3"><Link to="/job">Job</Link></Menu.Item>
                  <Menu.Item key="4">option4</Menu.Item>
                </SubMenu>
                <SubMenu key="sub2" icon={<LaptopOutlined />} title="subnav 2">
                  <Menu.Item key="5">option5</Menu.Item>
                  <Menu.Item key="6">option6</Menu.Item>
                  <Menu.Item key="7">option7</Menu.Item>
                  <Menu.Item key="8">option8</Menu.Item>
                </SubMenu>
                <SubMenu key="sub3" icon={<NotificationOutlined />} title="subnav 3">
                  <Menu.Item key="9">option9</Menu.Item>
                  <Menu.Item key="10">option10</Menu.Item>
                  <Menu.Item key="11">option11</Menu.Item>
                  <Menu.Item key="12">option12</Menu.Item>
                </SubMenu>
              </Menu>
            </Sider>
            <Layout style={{ padding: '0 24px 24px' }}>
              <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item>List</Breadcrumb.Item>
                <Breadcrumb.Item>App</Breadcrumb.Item>
              </Breadcrumb>
              <Content
                className="site-layout-background"
                style={{
                  padding: 24,
                  margin: 0,
                  minHeight: 280,
                }}
              >
                <Switch>
                  <Route exact path="/">
                    <h2>Home</h2>
                    <CommandHome />
                  </Route>
                  <Route path="/jobpool">
                    <h2>Job Pool</h2>
                    <CommandJobpool />
                  </Route>
                  <Route path='/job'  component={CommandJob}>
                    <h2>Job</h2>
                    <CommandJob />
                  </Route>
                </Switch>

              </Content>
            </Layout>
          </Layout>
        </Layout>


      </div>

    );
  }
}
export default withRouter(App);