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
      <div className="App" width="100%" height = "100%">

    
        <div id="wrapper">
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
        <div class="middle">

		<div class="container">
			<main class="content">
				<strong>Content:</strong> Sed placerat accumsan ligula. Aliquam felis magna, congue quis, tempus eu, aliquam vitae, ante. Cras neque justo, ultrices at, rhoncus a, facilisis eget, nisl. Quisque vitae pede. Nam et augue. Sed a elit. Ut vel massa. Suspendisse nibh pede, ultrices vitae, ultrices nec, mollis non, nibh. In sit amet pede quis leo vulputate hendrerit. Cras laoreet leo et justo auctor condimentum. Integer id enim. Suspendisse egestas, dui ac egestas mollis, libero orci hendrerit lacus, et malesuada lorem neque ac libero. Morbi tempor pulvinar pede. Donec vel elit.
			</main>
		</div>

		<aside class="left-sidebar">
			<strong>Left Sidebar:</strong> Integer velit. Vestibulum nisi nunc, accumsan ut, vehicula sit amet, porta a, mi. Nam nisl tellus, placerat eget, posuere eget, egestas eget, dui. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In elementum urna a eros. Integer iaculis. Maecenas vel elit.
		</aside>

	</div>
        </div>
        
        <footer class="footer">
        <strong>Footer:</strong> Mus elit Morbi mus enim lacus at quis Nam eget morbi. Et semper urna urna non at cursus dolor vestibulum neque enim. Tellus interdum at laoreet laoreet lacinia lacinia sed Quisque justo quis. Hendrerit scelerisque lorem elit orci tempor tincidunt enim Phasellus dignissim tincidunt. Nunc vel et Sed nisl Vestibulum odio montes Aliquam volutpat pellentesque. Ut pede sagittis et quis nunc gravida porttitor ligula.
      </footer>

      </div>
      
    );
  }
}
