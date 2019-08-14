import React, { useContext } from 'react';
import MelodyButton from '../basic_components/MelodyButton';
import { Link } from 'react-router-dom';
//import { connect } from 'react-redux';
import { MelodyForm, MelodyFormField, MelodyBox, MelodyGrid, MelodyText, MelodyHeading, MelodyImage  } from '../basic_components';
import { Grommet, ResponsiveContext } from 'grommet';
import AppTheme from '../css/app_theme';
//import * as types from '../actions/action_types';
import doctorImage from './resources/doctor_image.png'
import {AppContext} from '../AppContext';

const ResponsiveGrid = ({children,areas, ...props}) => {
    return (
        <ResponsiveContext.Consumer>
            { size => (
                <MelodyGrid areas={areas[size]} {...props}>
                    {children}
                </MelodyGrid>
            )}
        </ResponsiveContext.Consumer>
    )
}


function HomeScreen(props) {
    
    const userLogin = () => {
        props.history.push('/PatientHomeScreen/BookAppointment');
    }

    const {state,dispatch} = useContext(AppContext);

    console.log(`state : ${JSON.stringify(state)}`);

    state.count = 4;
    
    return (
        <Grommet theme={AppTheme}>
        <ResponsiveGrid 
            rows = {['xsmall','medium','flex','xsmall']}
            columns = {['auto','auto','auto','auto','auto']}
            areas = {{
                small : [
                    { name : 'header',start:[0,0],end:[4,0]},
                    { name : 'space1', start:[0,1], end : [1,1]},
                    { name : 'profilePhoto', start:[1,1], end:[3,1]}, 
                    { name : 'space2', start:[4,1], end : [4,1]},
                    { name : 'content', start:[0,2], end : [3,2]}, 
                    { name : 'space3', start:[4,2], end : [4,2]},
                    { name : 'footer', start:[0,3], end:[4,3]}
                ],
                medium : [
                    { name : 'header',start:[0,0],end:[4,0]},
                    { name : 'space1', start:[0,1], end : [1,1]},
                    { name : 'profilePhoto', start:[1,1], end:[2,1]}, 
                    { name : 'space2', start:[2,1], end : [3,1]},
                    { name : 'content', start:[3,1], end : [4,1]}, 
                    { name : 'space3', start:[4,1], end : [4,1]},
                    { name : 'footer', start:[0,3], end:[4,3]}
                ]
            }}
         >
            <MelodyBox gridArea='header'justify="center" align="center" border={{side:'bottom',color:'gray'}}>
                <MelodyHeading>Consult Doctor Online</MelodyHeading>
            </MelodyBox>
            <MelodyBox gridArea='space1'justify="center" align="center"/>
            <MelodyBox gridArea='profilePhoto'>
                <MelodyImage src={doctorImage} fit="contain" alignSelf="center"/>
            </MelodyBox>
            <MelodyBox gridArea='space2' justify="center" align="center"/>
            <MelodyBox gridArea='content' align="center" justify="center">
                <MelodyForm>
                    <MelodyFormField label="Mail Id" name="mailId" />
                    <MelodyFormField label="Password" name="password" type="password" />
                    <MelodyBox direction="column" border={{color:'black'}}>
                        <MelodyButton label="Login" clickHandler={userLogin}/>
                        <MelodyBox direction="row">
                            <MelodyBox border={{color:'gray'}}>
                                <Link to="/register">New User?</Link>
                            </MelodyBox>
                            <MelodyBox border={{color:'black'}}>
                                <Link to="/register">Forgot Password</Link>
                            </MelodyBox>
                        </MelodyBox>
                    </MelodyBox>
                </MelodyForm>
            </MelodyBox>
            <MelodyBox gridArea='space3' justify="center" align="center"/>
            <MelodyBox gridArea='footer' justify="center" align="center">
                <MelodyText> Footer </MelodyText>
                <MelodyButton label="+" clickHandler={ () => dispatch({ type : 'increment'})} />
                <MelodyText> {state.count} </MelodyText>
            </MelodyBox>
        </ResponsiveGrid>
        </Grommet>
    )
}


// function mapStateToProps(state) {
//     return {
//         counter : state.counter
//     }
// }

// function mapDispatchToProps(dispatch) {
//     return {
//         increment : () => dispatch({ type : types.INCREMENT_COUNT}),
//         decrement : () => dispatch({ type : types.DECREMENT_COUNT})
//     }
// }

// export default connect(
//     mapStateToProps,
//     mapDispatchToProps
// )(HomeScreen);

export default HomeScreen;