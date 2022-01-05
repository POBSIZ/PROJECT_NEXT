import React from 'react';
import TestComponent from './test_component';

const Test: React.FC<any> = (props) => {
    return(
        <TestComponent {...props} />
    )
};

export default Test;