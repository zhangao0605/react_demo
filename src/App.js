import React, {Component} from 'react';
import {Button, Table} from 'antd';
import './App.css';


class App extends Component {
    constructor(props) {
        super(props)
        this.state = {

            dataSource: [
                {
                    key: '1',
                    name: '胡彦斌',
                    age: 32,
                    address: '西湖区湖底公园1号',
                },
                {
                    key: '2',
                    name: '胡彦祖',
                    age: 42,
                    address: '西湖区湖底公园1号',
                },
            ],
            columns: [
                {
                    title: '姓名',
                    dataIndex: 'name',
                    key: 'name',
                },
                {
                    title: '年龄',
                    dataIndex: 'age',
                    key: 'age',
                },
                {
                    title: '住址',
                    dataIndex: 'address',
                    key: 'address',
                },
            ],
        }

    }

    clickme = () => {
        console.log(this)
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <Table dataSource={this.state.dataSource} columns={this.state.columns}/>;
                    <Button onClick={this.clickme} type="primary">Button</Button>
                </header>
            </div>
        );
    }
}

export default App;
