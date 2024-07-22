import User from "./User";
import UserClass from './UserClass';

const About = () => {
    return (
        <div className="about">
            <h1>About</h1>
            <h2>This is about page details</h2>
            <User name="Nitesh Bagle" location="Ulhasnagar"/>
            <UserClass name="Nitesh Bagle" location="Ulhasnagar"/>
        </div>
    )
};

export default About;