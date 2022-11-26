import React from 'react';

const Buttons = props => {

    // Think of a name for a variable attending to the different button styles
    // Also... should this be a useState situation? or static?

    return(
        <button onClick={props.onClick}>{props.buttonText}</button>
    )
}

export default Buttons