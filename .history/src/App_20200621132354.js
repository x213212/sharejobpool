import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from 'element-react';
import CommandButton from './components/CommandButton/CommandButton'
import 'element-theme-default';
function App() {
  
  constructor( props){
    super (props)
    this.state  = {
       test : [
          {username : 'test' ,  content : '廢物'},
          {username : 'test2' ,  content : '廢物'}
       ]
    }

 }
  return (
    <div className="App">
      <header  className="App-header">
        <img width="100px" height="100px" src={logo} className="App-logo" alt="logo" />
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

export default App;
