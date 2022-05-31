import React, { useEffect, useRef } from 'react';
import VanillaTilt from 'vanilla-tilt';

function Tilt(props) {
    const { options, ...rest } = props;
    const tilt = useRef(null);

    useEffect(() => {
        VanillaTilt.init(tilt.current, options);
    }, [options]);

    return <div ref={tilt} {...rest} />;
}
const Features = ({ title, details }) => {
    const options = {
        scale: 1,
        speed: 1500,
        max: 40,
        glare: true,
        "max-glare": 1
    };
    return (
        <>

            <Tilt options={options} className="z-50" >
                <div class="glassmorphic-card">
                    <div class="imgBox">
                        <i class="fa fa-pencil-ruler"></i>
                    </div>
                    <div class="contentBox">
                        <h3>{title}</h3>
                        <p title={details}>{details.slice(0, 100)}...</p>
                        <a href="https://github.com/AyonJD"><span>Explore More</span></a>
                    </div>
                </div>
            </Tilt>
        </>
    );
};

export default Features;