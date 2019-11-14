import React, {Component} from 'react';
import 'antd/dist/antd.css';
import {Input, Button,} from 'antd';
import { connect } from 'react-redux';
import { addCount, reduceCount } from '../../store/actions/countAction'
import PropTypes from 'prop-types';
class redux_test extends Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <div>
                <button onClick={()=>this.props.addCount()}>加1</button>
                {this.props.count}
                <button onClick={()=>this.props.reduceCount(5)}>减5</button>
            </div>
        );
    }

}
// 定义方法mapStateToProps，参数为state，并且返回一个对象，对象内定义需要获取的store内的数据，
// 由于是使用的countReducer中的数据，所以需要使用state.countReducer.属性名
function mapStateToProps(state) {
    console.log(state)
    return {
        count: state.countReducer.count
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addCount: () => dispatch(addCount()),
        reduceCount: (num) => dispatch(reduceCount(num))
    }
}
redux_test.propTypes = {
    count: PropTypes.number.isRequired,
    addCount: PropTypes.func.isRequired,
    reduceCount: PropTypes.func.isRequired
}

// connect的第一个参数为数据，即mapStateToProps方法
// 接着在第二个括号内传入当前需要被改造的组件
export default connect(mapStateToProps,mapDispatchToProps)(redux_test);