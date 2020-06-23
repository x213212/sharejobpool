import React from 'react';
import {Component} from 'react'
import { antButton } from 'antd';
export default class CommandButton extends Component {
   constructor(props){
      super(props)
  }
  
   render() {
      //假設有個待辦事項的陣列
      let arrLists = ['打文章','寫程式','耍廢']
         
      //先建立一個空陣列
      let lists = [];
      for(let i=0;i<=arrLists.length-1;i++){
         //記得在JSX中使用JS變數要用花括號包著
         lists.push(<antButton onClick={activateLasers}>{arrLists[i]}</antButton>)
     }

      return (
         <ul>
         {lists}
     </ul>
      );
   }
}
