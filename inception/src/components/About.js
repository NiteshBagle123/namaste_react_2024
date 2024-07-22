import React from "react";
import User from "./User";
import UserClass from './UserClass';

class About extends React.Component {
    constructor (props) {
        super(props);
        console.log('About constructor');
    }

    componentDidMount() {
        console.log('About componentDidMount')
    }

    render () {
        console.log('About render');
        return (
            <div className="about">
                <h1>About</h1>
                <h2>This is about page details</h2>
                <UserClass />
            </div>
        );
    }
}

export default About;