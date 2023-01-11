import React from 'react';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import Card from './card';

export default function ClinicScroller() {
    return (
        <ScrollMenu>
            {["testcard", "testcard2", "testcard2", "testcard2"].map(({ id }) => (
                <Card
                    itemId={123} // NOTE: itemId is required for track items
                    title={123}
                    key={123}
                // onClick={handleClick(123)}
                // selected={isItemSelected(123)}
                />
            ))}
        </ScrollMenu>
    )
}