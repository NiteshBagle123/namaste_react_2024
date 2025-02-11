import React, { useState } from 'react';

const User = (props) => {
  const [count, setCount] = useState(0);
  const { name, location } = props;
  return (
    <div className='user-card'>
        <p>Counter: {count}</p>
        <h2>{name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: test</h4>
    </div>
  );
}

export default User;