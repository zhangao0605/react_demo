import React, {Component} from 'react';
import './index.css'
import {Link} from 'react-router-dom'
class home extends Component {
    constructor(props) {

        super(props)
        this.state = {}
    }
    componentDidMount() {
        //console.log(this.props.match.params);
        console.log(this.props.history.location.params);
    }
    render() {
        return (
            <div className='app_home'>
                <div>second</div>
                <Link to="/tests">跳转</Link>
            </div>

        )


    }

}
export default home