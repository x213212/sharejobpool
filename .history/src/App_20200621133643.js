import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from 'element-react';
import CommandButton from './components/CommandButton/CommandButton'
import {Component} from 'react'
import 'element-theme-default';
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
        <div className="App" width ="100%" height="100%">
        
          <header  className="App-header" height="20%" >
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
                    
          <section>
            <nav>
              <ul>
                <li><a href="#">London</a></li>
                <li><a href="#">Paris</a></li>
                <li><a href="#">Tokyo</a></li>
              </ul>
            </nav>
            
            <article>
              <h1>London</h1>
              <p>London is the capital city of England. It is the most populous city in the  United Kingdom, with a metropolitan area of over 13 million inhabitants.</p>
              <p>Standing on the River Thames, London has been a major settlement for two millennia, its history going back to its founding by the Romans, who named it Londinium.</p>
            </article>
          </section>

          <footer height="100%">
            <p>Footer</p>
          </footer>

        
        </div>
      );
    }
}
