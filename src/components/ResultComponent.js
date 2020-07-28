import React from 'react';

const ResultComponent = (props) => {
    return (
        <div className="result">
            <br/>
            <h2>{props.result}</h2>
        </div>
    );
};

export default ResultComponent;