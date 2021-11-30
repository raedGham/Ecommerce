import React from 'react';

function error({error}) {
    return (
        <div className="mt-5">
            <div className="alert alert-danger" role="alert">
                {error}
            </div>
        </div>
    );
}

export default error;