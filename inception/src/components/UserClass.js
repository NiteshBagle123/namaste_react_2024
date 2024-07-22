import React from "react";

class UserClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }

    render() {
        const { name, location } = this.props;
        const { count } = this.state;
        return (
            <div className='user-card'>
                <p>Counter: {count}</p>
                <button onClick={() => this.setState({ ...this.state, count: this.state.count + 1 })}>Counter</button>
                <h2>{name}</h2>
                <h3>Location: {location}</h3>
                <h4>Contact: test</h4>
            </div>
        );
    }
}

export default UserClass;