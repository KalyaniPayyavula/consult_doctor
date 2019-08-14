import React from 'react';
import { Grid } from 'grommet';

function MelodyGrid(props) {
    return (
        <Grid rows={props.rows} columns={props.columns} areas={props.areas}>{props.children}</Grid>
    )
}

export default MelodyGrid;