import {Link as RouterLink} from 'react-router-dom';
// material
import {styled} from '@material-ui/core/styles';
import {Card, Stack, Link, Container, Typography, TextField} from '@material-ui/core';
// layouts
import AuthLayout from '../layouts/AuthLayout';
// components
import Page from '../components/Page';
import {MHidden} from '../components/@material-extend';
import {LoginForm} from '../components/authentication/login';
import AuthSocial from '../components/authentication/AuthSocial';
import {LoadingButton} from "@material-ui/lab";


import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../store/feature/counterSlice'
import {getUsers,getUsersBYId} from "../store/asyncAction/userAction";
import { useContext } from "react";
import GlobalContext from "../context/GlobalContext";

// ----------------------------------------------------------------------

const RootStyle = styled(Page)(({theme}) => ({
    [theme.breakpoints.up('md')]: {
        display: 'flex'
    }
}));

const SectionStyle = styled(Card)(({theme}) => ({
    width: '100%',
    maxWidth: 464,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    margin: theme.spacing(2, 0, 2, 2)
}));

const ContentStyle = styled('div')(({theme}) => ({
    maxWidth: 480,
    margin: 'auto',
    display: 'flex',
    minHeight: '100vh',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: theme.spacing(12, 0)
}));


// ----------------------------------------------------------------------

export default function Counter() {
    const gContext = useContext(GlobalContext);
    console.log(gContext)
    const inc=()=>{
        gContext.increament()
    }
    const count = useSelector((state) => state.counter)
    console.log(count);
    const dispatch = useDispatch()
    return (
        <RootStyle title="Login | Minimal-UI">
            {JSON.stringify(count.user)}

            <Container maxWidth="sm">
                <ContentStyle>
                   Context Api  State{gContext.value}
                    <h1>Home</h1>
                    <button onClick={inc}>+</button>

                    <TextField
                        fullWidth
                    />
                    <LoadingButton
                        fullWidth
                        size="small"
                        type="submit"
                        variant="contained"
                        onClick={() => dispatch(getUsersBYId(1))}
                    >
                        Register
                    </LoadingButton>
                </ContentStyle>
            </Container>
        </RootStyle>
    );
}
