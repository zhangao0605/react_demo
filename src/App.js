import React, {Component} from 'react';
import {Button, Table} from 'antd';
import {$http} from './services/http'
import './App.css';
import axios from 'axios';

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {

            dataSource: [],
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
        let data = {"page": 1, "chainId": "", "hash": "", "pagesize": 10}
        // $http.post(this, {
        //     url: "/chain/getBlockNewTxPage",
        //     dataType: "json",
        //     data: data,
        //     success: function (res) {
        //         console.log(res)
        //     },
        // });
        let data1 = {"pagenum":'1', "chainId": '1'}
        $http.get(this, {
            url: "/asset/downloadrecords",
            dataType: "json",
            data:data1,
            success: function (res) {
                console.log(res)
            },
        });
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <Table dataSource={this.state.dataSource} columns={this.state.columns}/>
                    <Button onClick={this.clickme} type="primary">Button</Button>
                </header>
            </div>
        );
    }
}

export default App;
