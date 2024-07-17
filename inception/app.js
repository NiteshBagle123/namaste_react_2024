import React from 'react';
import ReactDOM from 'react-dom/client';

const heading = React.createElement("h1", { id: "heading" }, "Hello from React!");
// React element is object
const root = ReactDOM.createRoot(document.getElementById('root'));
// When we render it to dom it become html element from react html

// JSX --> Javascript syntax for creating react element (html/xml like syntax)
const jsxHeading = (<h1 id="heading">
    Namaste React using JSX
</h1>);

const Title = () => (
    <h2>Title component</h2>
)
const Heading1 = () => (
    <div>
        Functional component
        <Title />
    </div>
)
// tranpilation of code done by babel which is kind of cabinet of parcel
// JSX(babel transpiles to) --> react element --> html dom element

// React component

root.render(<Heading1 />);



