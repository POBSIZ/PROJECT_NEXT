import React from 'react';
import LogoComponent from './logo_component';

const Logo: React.FC<any> = (props) => {
    return(
        <LogoComponent {...props} />
    )
};

export default Logo;