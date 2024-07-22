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
                <User name="Nitesh Bagle" location="Ulhasnagar"/>
                <UserClass name="Nitesh Bagle" location="Ulhasnagar" user="user1"/>
                <UserClass name="Nitesh Bagle" location="Ulhasnagar" user="user2"/>
                <UserClass name="Nitesh Bagle" location="Ulhasnagar" user="user3"/>
            </div>
        );
    }
}

export default About;