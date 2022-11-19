import SortFilter from "./sort-filter";

function getDataQueryKeys(event) {
    if (event.target.id === "data-sort") {
        setSortKey(event.target.value);
    }
}

// This is our base page layout - See it is used in pages_app.js
export default function Layout({ children }) {
    return (
        <body>
            <div className="row">
                <div id="container">
                    <div id="main">
                        <title>Weather in random locations</title>
                        <h1 className="content">Weather in the World</h1>
                        <SortFilter changeHandler={getDataQueryKeys} />
                        {children}
                    </div>
                </div>
            </div>
        </body>
    )
}