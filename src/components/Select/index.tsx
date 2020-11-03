import React, { SelectHTMLAttributes } from 'react';

import './styles.css';

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement>{
    name: string;
    status: string;
    options: Array<{
        value: string,
        label: string
    }>;
}

const Select: React.FC<SelectProps> = ({ name, status, options, ...rest }) => {
    return (
        <div className={status === "" ? "select-block" : status === "invalid" ? "select-block select-block-invalid" : "select-block select-block-valid"}>
            <select id={name} {...rest}>
                <option value="0">Escolha uma personalidade fake para você</option>
                {options.map(option => {
                    return <option key={option.value} value={option.value}>{option.label}</option>
                })}
            </select>
        </div>
    );
}

export default Select;