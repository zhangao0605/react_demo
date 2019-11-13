import React, {Component} from 'react';
import {Button, Table} from 'antd';
import {$http} from '../../services/http'
import './index.css';

class table extends Component {
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
                    dataIndex: 'height',
                    key: 'height',
                },
                {
                    title: '住址',
                    dataIndex: 'hash',
                    key: 'hash',
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
                this.setState({'dataSource':res.data.dataList})
                setTimeout=()=>{

                }

            },
        });
    }
    to_second=()=>{
        this.props.history.push({
            pathname:'/home',
            params:{
                id:111
            }
        })
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <Table dataSource={this.state.dataSource} columns={this.state.columns}/>
                    <Button onClick={this.clickme} type="primary">Button</Button>
                    <p onClick={this.to_second}>跳转</p>
                </header>
            </div>
        );
    }
}

export default table;
