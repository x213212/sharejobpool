import React from 'react';
import {Component} from 'react'
import { Button } from 'antd';
export default class CommandButton extends Component {
   constructor(props){
      super(props)
      this.handleClick = this.handleClick.bind(this);
      this.sayHello = this.sayHello.bind(this);
  }
  handleClick() {
   this.props.onHeaderClick(this.props.value);
 }

//   handleClick(e) {
//    console.log(this.props.value);
   
//    e.preventDefault();
   
//    console.log('The link was clicked.');
//  }
 sayHello(name) {
   alert(`hello, ${name}`);
 }
   render() {
   
      let objLists = 
      [{id:'a',list:'打文章'},{id:'b',list:'寫程式'},{id:'c',list:'耍廢'}]
      

     let lists = objLists.map((list) => <Button  key={list.id} id={list.id} onClick={() => sayHello('James')} value={list.list}>{list.list}</Button>)


      return (
         <ul>
         {lists}
         </ul>
      );
   }
}
