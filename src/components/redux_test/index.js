import React, {Component} from 'react';
import 'antd/dist/antd.css';
import {Input, Button,} from 'antd';
import store from '../../store';

class redux_test extends Component{
    constructor(props){
        super(props);
        this.state = {
            inputValue: 'aa',
            list: store.getState().list  //公共state中的list
        }
        // 监听store变化
        // store.subscribe(this.handleStoreChange);
    }

    render(){
        return (
            <div>
                <Input
                    placeholder="请输入"
                    style={{width:'300px',marginRight:'10px'}}
                    value={this.state.inputValue}
                    onChange={this.handleInputChange}
                />
                <Button type="primary" onClick={this.addListItem}>提交</Button>
            </div>
        )
    }

    handleInputChange = (e) => {
        // console.log(this.state.inputValue)
        this.setState({inputValue:e.target.value})
    }

    addListItem = () => {
        // 派发action
        store.dispatch({
            type: 'change_value',
            value: this.state.inputValue
        })
    }
    componentDidMount(){
        // setInterval(()=>{
        //     console.log(store.getState().list)
        // },1000)
    }
    handleStoreChange = () => {     // 当store发生改变时做的处理，store.subscribe中添加
        this.setState({list: store.getState().list});
    }
}

export default redux_test;