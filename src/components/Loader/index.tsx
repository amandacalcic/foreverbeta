import React, { AllHTMLAttributes } from 'react';

import './styles.css';


const Loader: React.FC<AllHTMLAttributes<HTMLDivElement>> = ({...rest}) => {
    return (
        <div className="load-page-container" {...rest} >
            <div className="loader" />
        </div>
    );
}

export default Loader;