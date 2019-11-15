import React, {Component} from 'react';
import 'antd/dist/antd.css';
import {Input, Button,} from 'antd';
import {connect} from 'react-redux';
import store from '../../store/index'
import {addCount, reduceCount} from '../../store/actions/countAction'

class redux_test extends Component {
    constructor(props) {
        super(props);
        this.state = {
            a: '点击我加一'
        }
    }

    render() {
        return (
            <div>
                <button onClick={() => this.props.dispatch(addCount())}>{this.state.a}</button>
                {this.props.count}
                <button onClick={() => this.props.dispatch(reduceCount(2))}>减2</button>
            </div>
        );
    }

}

// 定义方法mapStateToProps，参数为state，并且返回一个对象，对象内定义需要获取的store内的数据，
// 由于是使用的countReducer中的数据，所以需要使用state.countReducer.属性名
function mapStateToProps(store) {
    return {
        count: store.countReducer.count
    }
}


// connect的第一个参数为数据，即mapStateToProps方法
// 接着在第二个括号内传入当前需要被改造的组件
export default connect(mapStateToProps)(redux_test);