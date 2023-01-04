import React, { useState } from 'react';

export default function Dropdown({ children }) {
    const [language, setLanguage] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        setLanguage(event.target.value);
    }

    return (
        <label>
            <select onChange={handleSubmit}>
                {children.map(item => (
                    <option value={item}>{item}</option>
                ))}
            </select>
        </label>
    )
}

