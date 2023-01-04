// shows title.svg from the resources folder
import React from 'react';
import Image from 'next/image';
import HeaderImage from '../resources/title.svg';

export default function Header() {
    return (
        <div>
            <Image alt="תרגומידע"
                src={HeaderImage}
                width={322.55}
                height={63}></Image>
        </div>
    )
}
