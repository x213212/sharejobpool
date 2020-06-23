import React from 'react';
import {Component} from 'react'
import { Button } from 'antd';
export default class CommandButton extends Component {
   constructor(props){
      super(props)
  }
  
   render() {
      let lists = [<li>打文章</li>,<li>寫程式</li>,<li>耍廢</li>]
      return (
         <div>
            {/* //Hello World!!! */}
      <Button type="primary">{lists}
      </Button>
         </div>
      );
   }
}
