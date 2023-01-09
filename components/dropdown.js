import React, { useState } from 'react';

export default function Dropdown({ children, handleSubmit }) {

    return (
        <label>
            <select onChange={handleSubmit}>
                {children.map(item => (
                    <option key={item} value={item}>{item}</option>
                ))}
            </select>
        </label>
    )
}

