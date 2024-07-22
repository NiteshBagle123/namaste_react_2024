import React, { useDebugValue } from "react";

class UserClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'test',
            location: 'test1',
            avatarURL: 'dummy'
        }
        console.log('UserClass constructor');
    }

    async componentDidMount() {
        console.log('UserClass componentDidMount')
        const userDetails = await fetch('https://api.github.com/users/NiteshBagle123');
        const userDetailsJSON = await userDetails.json();
        const { name, location, avatar_url } = userDetailsJSON;
        this.setState({
            name,
            location,
            avatarURL: avatar_url
        })
    }

    componentDidUpdate() {
        console.log('UserClass componentDidUpdate');
    }

    componentWillUnmount() {
        console.log('componentWillUnmount')
    }
    render() {
        console.log('UserClass render');
        return (
            <div className='user-card'>
                <img src={this.state.avatarURL}/>
                <h2>{this.state.name}</h2>
                <h3>Location: {this.state.location}</h3>
                <h4>Contact: test</h4>
            </div>
        );
    }
}

export default UserClass;