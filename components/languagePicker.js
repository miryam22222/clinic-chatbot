import React, { useState } from 'react';
import Button from './button.js';
import Dropdown from './dropdown.js';

export default function LanguagePicker(props) {
    const [visibility, setVisibility] = useState(true);

    const handleChange = (chosenLanguage) => {
        setVisibility(false);
        props.actions.handleLanguagePicked(chosenLanguage);
    };

    if (!visibility) {
        return null;
    }
    return (
        <div>
            <Dropdown handleSubmit={handleChange}>{["Arabic", "Indonesian"]}</Dropdown>
        </div>
    );
};
