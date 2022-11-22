// import { useState } from "react";

// Just a generic Navbar, part of the default layout
// so it appears on all pages that use the default layout
export default function SortFilter({ sortHandler, checkboxes, checkedItems, handleChange }) {
    const Checkbox = ({ type = "checkbox", name, checked = true }) => {
        return (
            <input type={type} name={name} checked={checked} onChange={handleChange} />
        );
    };

    return (
        <div className="sort">
            <div className="sort-filter-row">
                <div>Sort:</div>
                <select id="sort-by-temp" onChange={sortHandler}>
                    <option value={"hot-to-cold"}>Warmest to Coolest</option>
                    <option value={"cold-to-hot"}>Coolest to Warmest</option>
                </select>
                <div>Filter cities:</div>
                {checkboxes.map(item => (
                    <label key={item.key}>
                        <Checkbox
                            name={item.name}
                            checked={checkedItems[item.name]}
                        />
                        {item.name}
                    </label>
                ))}

            </div>
        </div>
    )
}
