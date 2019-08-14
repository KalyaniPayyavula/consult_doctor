import React from 'react';
import { Button } from "grommet";

function MelodyButton(props){
    return (
        <Button {...props}>
            {props.children}
        </Button>
    );
}

export default MelodyButton;