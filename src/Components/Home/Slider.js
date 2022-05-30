import React from 'react';
import TypeAnimation from 'react-type-animation';

const Slider = () => {
    return (
        <TypeAnimation
            cursor={false}
            sequence={[
                'Pre-define width of wrapper',
                2000,
                'to prevent layout-shift.',
                2000,
            ]}
            wrapper="h2"
            repeat={Infinity}
            className="type-writer"
        />
    );
};

export default Slider;