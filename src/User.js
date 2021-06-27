import React from 'react';

const User = (props) => {
    console.warn(props.data.name);
    const data=props 
    return (
        <div>
            <h1>User Component Redux</h1>
            <h2>{data.name}</h2>
        </div>
    );
};

export default User;