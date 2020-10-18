import React, { ButtonHTMLAttributes } from 'react';

import './styles.css';

interface PrimaryButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    title: string;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({title, ...rest}) => {
    return (
        <button {...rest} >{title}</button>
    );
}

export default PrimaryButton;