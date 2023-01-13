import React from 'react';

export default function Card({ children }) {
    // const visibility = React.useContext(VisibilityContext);

    return (
        <div className="card">
            {children}
        </div>
    );
}
