import React from 'react';
import logo from './logo.svg';
import './App.css';

import CommandButton from './components/CommandButton/CommandButton'
import {Component} from 'react'
import { Layout, Menu, Breadcrumb } from 'antd';

const { Header, Content, Footer } = Layout;

import { render } from '@testing-library/react';

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
        <Layout.Row>
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

        
        </div>
      );
    }
}
