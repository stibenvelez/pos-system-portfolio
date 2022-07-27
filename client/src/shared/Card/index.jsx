import React from 'react'

const Card = ({ children, ...res }) => {
    return (
        <div className={`bg-white p-4 shadow rounded-lg ${res.className}`}>{children}</div>
    );
};

export default Card