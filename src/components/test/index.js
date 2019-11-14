import React, {Component} from 'react'
import {Button} from 'antd'
import './index.css'

class tests extends Component {
    constructor(props) {
        super(props)
        this.state = {
            date: 1,
            inter: '',
            list: [1, 2, 3, 4, 5],
            map_arr :[
                {name:'小明',age:16,sex:'男'},
                {name:'小红',age:17,sex:'女'},
                {name:'小白',age:18,sex:'女'},
            ]
        }
    }

    Clock = (e) => {
        this.setState(prevState => ({
            'date': e
        }))
    }
    get_map_name(e){
        e.map((item=>{
        console.log(item.name)
        }))
    }
    de_con(e) {
        this.get_map_name(this.state.map_arr)
        e.preventDefault()
    }

    componentDidMount() {
        this.inter = setInterval(() => {
            this.setState({
                date: this.state.date += 1
            })
        }, 5000)
    }

    componentWillUnmount() {
        clearInterval(this.inter);
    }

    render() {
        return (
            <div>
                <h1>hello.world</h1>
                <p>{this.state.date}</p>
                {/*preventDefault阻止默认行为*/}
                <Button type='primary' onClick={(e)=>{this.de_con(e)}}>点击我</Button>
                <ul>
                    {this.state.list.map((number) =>
                        <li key={number.toString()}>{number}</li>
                    )}
                </ul>
            </div>
        )
    }

}

export default tests