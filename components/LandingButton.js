import React from 'react';
import Image from 'next/image';
import { forwardRef } from 'react';

const LandingButton = forwardRef((props, ref) => {
    const someFunction = () => true;

    return (
        <div ref={ref} className="landing-button-container" onClick={someFunction}>
            <a>
            <div className="landing-button-text">
                <h2 className="heavy">{props.header}</h2>
                <p>{props.subHeader}</p>
            </div>
            <Image src={props.image} alt={props.altText}/>
            </a> 
        </div>
    );
});

LandingButton.displayName = 'LandingButton';

export default LandingButton;