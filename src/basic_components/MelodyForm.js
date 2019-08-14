import React from 'react';
import { Form } from 'grommet';

function MelodyForm(props) {

    return (
        <>
            <Form {...props}>{props.children}</Form>
        </>
    );
}

export default MelodyForm;