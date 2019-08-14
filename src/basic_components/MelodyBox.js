import React from 'react';
import { Box } from 'grommet';

function MelodyBox(props) {

    return (
        <Box {...props}>
                {props.children}
        </Box>
    )
}

export default MelodyBox;
