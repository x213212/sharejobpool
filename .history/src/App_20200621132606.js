import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from 'element-react';
import CommandButton from './components/CommandButton/CommandButton'
import {Component} from 'react'
import 'element-theme-default';
import { render } from '@testing-library/react';
export default class App extends Component {
  render(){
      return (
        <div className="App">
          <header  className="App-header">
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
          </header>
          <Button type="primary">Hello</Button>
          <CommandButton/>
        </div>
      );
    }
}
