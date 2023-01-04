// react component with buttons to pick a language
// One big button with a dropdown menu to pick a language, and 4 predefined buttons under it
// in 3 languages: hebrew, english, arabic

import React, { useState } from 'react';
import Button from './button.js';
import Dropdown from './dropdown.js';

export default function LanguagePicker() {
    const [language, setLanguage] = useState('');

    return (
        <div>
            <Dropdown children={["Arabic", "Indonesian"]}></Dropdown>
            <br></br>
            <Button children={"עברית"}></Button>
            <Button children={"English"}></Button>
            <Button children={"Русский"}></Button>
        </div>
    );
};