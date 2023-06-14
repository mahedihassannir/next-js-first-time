import React from 'react';

const Singleblog = ({ params }) => {
    console.log(params);
    return (
        <div>

            hi i am single blog ${params.id}
        </div>
    );
};

export default Singleblog;