import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from 'element-react';
import CommandButton from './components/CommandButton/CommandButton'
import CommandMenu from './components/CommandMenu/CommandMenu'
import { Component } from 'react'
import 'element-theme-default';
import { render } from '@testing-library/react';
export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      comments: [
        { username: 'test', content: 'test' },
        { username: 'test2', content: 'testhaha' }

      ]
    }

  }
  render() {
    return (
      <div className="App">

        <header className="App-header" >
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
        <div id="wrapper">
          <div id="content">
            <p><strong>1. Main Content</strong></p>
            <h3>The Ultimate Guide to Flexbox </h3>
            <p>The Flex Layout module is new layout module in CSS3 made to improve the items align, directions and order
            in the container even when they are with dynamic or even unknown size. The prime characteristic of the
            flex container is the ability to modify the width or height of its children to fill the available space
            in the best possible way on different screen sizes.
            </p>
            <p>Flexbox is relatively new, but it enjoys excellent browser support today (nearly 83% of browsers support
            Flexbox). Flexbox Layout is used for small application components, whereas CSS Grid Layout Module is
            aimed to handle the large scale layouts.
            </p>
            <h3>The Two axes of Flexbox</h3>
            <p>When working with flexbox you need to think in terms of two axes â the main axis and the cross axis. The
            main axis is defined by the flex-direction property, and the cross axis runs perpendicular to it.
            Everything we do with flexbox refers back to these axes, so it is worth understanding how they work from
            the outset.
            </p>
          </div>
        </div>
        <div id="navigation">
          <CommandMenu/>
        </div>
        <div id="extra">
          <p><strong>3. Additional Stuff</strong></p>
          <h3>In this guide you will learn:</h3>
          <ul>
            <li>How to use CSS Flexbox to build modern layouts</li>
            <li>How to align items both vertically and horizontally</li>
            <li>How to order items within container</li>
            <li>And more</li>
          </ul>
        </div>
        <div id="footer"><p>Footer</p>
        </div>

      </div>
    );
  }
}
