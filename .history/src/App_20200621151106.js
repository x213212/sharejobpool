import React from 'react';
import logo from './logo.svg';
import './App.css';
import { render } from '@testing-library/react';
import CommandButton from './components/CommandButton/CommandButton'
import {Component} from 'react'
import { Layout, Menu, Breadcrumb } from 'antd';

const { Header, Content, Footer } = Layout;



export default class App extends Component {
  constructor( props) {
    super (props)
    this.state =  {
      comments:[
        {username : 'test' , content: 'test'},
        {username : 'test2' , content: 'testhaha'}

      ]
    }

  }
  render(){
      return (
        <div className="App">
          <Layout className="layout">
            <Header>
              <div className="logo" />
              <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                <Menu.Item key="1">nav 1</Menu.Item>
                <Menu.Item key="2">nav 2</Menu.Item>
                <Menu.Item key="3">nav 3</Menu.Item>
              </Menu>
            </Header>
            <Content style={{ padding: '0 50px' }}>
              <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item>List</Breadcrumb.Item>
                <Breadcrumb.Item>App</Breadcrumb.Item>
              </Breadcrumb>
              <div className="site-layout-content">Content</div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
          </Layout>
        {/* <Layout.Row>
        <Layout.Col span="24"><div className="grid-content bg-purple-dark"></div>
        <header  className="App-header" >
            <img width="200px" height="200px" src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React 
            </a>
          </header></Layout.Col>
      </Layout.Row>
      <Layout.Row>
      <section className="main">
            <nav >
              <ul>
                <li><a href="#">London</a></li>
                <li><a href="#">Paris</a></li>
                <li><a href="#">Tokyo</a></li>
              </ul>
            </nav>
            
        
          </section>

      </Layout.Row>

      
          <footer>
            <p>Footer</p>
          </footer>

         */}
        </div>
      );
    }
}
