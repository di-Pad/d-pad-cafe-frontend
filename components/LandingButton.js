import React from 'react';

const LandingButton = (props) => {
    const someFunction = () => true;

    return (
        <div className="landing-button-container" onClick={someFunction}>
            <div className="landing-button-text">
                <h2 className="heavy">{props.header}</h2>
                <p>{props.subHeader}</p>
            </div>
            <img src={props.image} alt={props.altText}/>
        </div>
    );
}

export default LandingButton;