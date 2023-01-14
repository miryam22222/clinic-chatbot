import React, { useState } from 'react';


export default function Dropdown({ children, handleSubmit }) {
// export default function Dropdown({ children }) {

    console.log("primary langs: " + children);
    return (
        <label>
            <select id="dropDownSelector" onChange={handleSubmit}>
            {/* <select id="dropDownSelector"> */}
            <option value="">choose your language</option>
                {children.map(item => (
                    <option key={item} value={item}>{item}</option>
                ))}
                <option disabled class="seperator">────────</option>
                {children.map(item => (
                    <option key={item} value={item}>{item}</option>
                ))}
                <option disabled class="seperator">────────</option>
                {children.map(item => (
                    <option value={item}>{item}</option>
                ))}
            </select>
        </label>
    );

    // return (
    //     <label>
    //         <select onChange={handleSubmit}>
    //             {first.map(item => (
    //                 <option key={item} value={item}>{item}</option>
    //             ))}
    //             <option disabled class="seperator">────────</option>
    //             {second.map(item => (
    //                 <option key={item} value={item}>{item}</option>
    //             ))}
    //         </select>
    //     </label>
    // )

    // return (
    //     <label>
    //         <select onChange={handleSubmit}>
    //             <InnerDropDown>{children}</InnerDropDown>
    //             <option disabled class="seperator">────────</option>
    //             <InnerDropDown>{children}</InnerDropDown>
    //         </select>
    //     </label>
    // )
}

