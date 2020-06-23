import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from 'element-react';
import CommandButton from './components/CommandButton/CommandButton'
import {Component} from 'react'
import 'element-theme-default';
import { render } from '@testing-library/react';
import { Menu ,Layout} from 'element-react';
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
        

          <section className="main">
            <nav>
              <ul>
                <li><a href="#">London</a></li>
                <li><a href="#">Paris</a></li>
                <li><a href="#">Tokyo</a></li>
              </ul>
            </nav>
            
        
          </section>

          <footer>
            <p>Footer</p>
          </footer> */}

<div>
      <Layout.Row type="flex" className="row-bg">
        <Layout.Col span="6"><div className="grid-content bg-purple"></div></Layout.Col>
        <Layout.Col span="6"><div className="grid-content bg-purple-light"></div></Layout.Col>
        <Layout.Col span="6"><div className="grid-content bg-purple"></div></Layout.Col>
      </Layout.Row>
      <Layout.Row type="flex" className="row-bg" justify="center">
        <Layout.Col span="6"><div className="grid-content bg-purple"></div></Layout.Col>
        <Layout.Col span="6"><div className="grid-content bg-purple-light"></div></Layout.Col>
        <Layout.Col span="6"><div className="grid-content bg-purple"></div></Layout.Col>
      </Layout.Row>
      <Layout.Row type="flex" className="row-bg" justify="end">
        <Layout.Col span="6"><div className="grid-content bg-purple"></div></Layout.Col>
        <Layout.Col span="6"><div className="grid-content bg-purple-light"></div></Layout.Col>
        <Layout.Col span="6"><div className="grid-content bg-purple"></div></Layout.Col>
      </Layout.Row>
      <Layout.Row type="flex" className="row-bg" justify="space-between">
        <Layout.Col span="6"><div className="grid-content bg-purple"></div></Layout.Col>
        <Layout.Col span="6"><div className="grid-content bg-purple-light"></div></Layout.Col>
        <Layout.Col span="6"><div className="grid-content bg-purple"></div></Layout.Col>
      </Layout.Row>
      <Layout.Row type="flex" className="row-bg" justify="space-around">
        <Layout.Col span="6"><div className="grid-content bg-purple"></div></Layout.Col>
        <Layout.Col span="6"><div className="grid-content bg-purple-light"></div></Layout.Col>
        <Layout.Col span={6}><div className="grid-content bg-purple"></div></Layout.Col>
      </Layout.Row>
    </div>
        </div>
      );
    }
}
