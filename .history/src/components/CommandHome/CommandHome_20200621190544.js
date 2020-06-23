import React from 'react';
import { Component } from 'react'
import { Form, Input, Button, Checkbox } from 'antd';
import PropTypes from 'prop-types';
const onFinish = values => {
   console.log('Success:', values);

 };

 const onFinishFailed = errorInfo => {
   console.log('Failed:', errorInfo);
 };
 const layout = {
   labelCol: { span: 8 },
   wrapperCol: { span: 16 },
 };
 const tailLayout = {
   wrapperCol: { offset: 8, span: 16 },
 };
export default class CommandHome extends Component {
   constructor(props) {
      super(props)
      this.state = {value: ''};

      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
   }

// log({ name });
   
   handleChange(event) {
    //  this.setState({value: event.target.value});
      // const history = useHistory();
      // this.props.history.push(`/download`)
      window.location.href = ''
      // history.push("/home");
    }
  
    handleSubmit(event) {
      alert('A name was submitted: ' + this.state.value);
      event.preventDefault();
    }
   render() {

      // let objLists = []
      // [{id:'a',list:'打文章'},{id:'b',list:'寫程式'},{id:'c',list:'耍廢'}]
      // for (let i = 0; i < 10; i++) {
      //    objLists.push({ id: i, list: i + "test" })
      // }

      // let lists = objLists.map((list) => <Button key={list.id} id={list.id} onClick={() => this.sayHello(list.list)} >{list.list}</Button>)

      return (
         <Form
           {...layout}
           name="basic"
           initialValues={{ remember: true }}
           onFinish={this.handleChange}
           onFinishFailed={onFinishFailed}
         >
           <Form.Item
             label="Username"
             name="username"
             rules={[{ required: true, message: 'Please input your username!' }]}
           >
             <Input />
           </Form.Item>
     
           <Form.Item
             label="Password"
             name="password"
             rules={[{ required: true, message: 'Please input your password!' }]}
           >
             <Input.Password />
           </Form.Item>
     
           <Form.Item {...tailLayout} name="remember" valuePropName="checked">
             <Checkbox>Remember me</Checkbox>
           </Form.Item>
     
           <Form.Item {...tailLayout}>
             <Button type="primary" htmlType="submit">
               Submit
             </Button>
           </Form.Item>
         </Form>
       );
   }
}
