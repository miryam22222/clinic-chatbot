import { Children } from "react";
import SortFilter from "./sort-filter";

// This is our base page layout - See it is used in pages_app.js
export default function Layout({ children }) {
    return (
        <div className="row">
            <div id="container">
                <div id="main">
                    <title>Weather in random locations</title>
                    <h1 className="content">Weather in the World</h1>
                    <SortFilter />
                    {children}
                </div>
            </div>
        </div>
    )
}