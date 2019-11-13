import React, {Component} from 'react';

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
            <div>second</div>
        )


    }

}
export default home