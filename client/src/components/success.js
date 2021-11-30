import React from 'react';

function Success({success}) {
    return (
        <div className="mt-5">
            <div className="alert alert-success" role="alert">
                {success}
            </div>
        </div>
    );
}

export default Success;