import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Typography, Grow, Button, TextField, InputAdornment, IconButton } from '@material-ui/core';
import Visibility from '@material-ui/icons/Visibility'
import VisibilityOff from '@material-ui/icons/VisibilityOff'
import PersonPinIcon from '@material-ui/icons/PersonPin';
import { loginActions } from '../actions';
import { MessagePaper, Loader, Footer } from '../components'

export function Login() {
    const dispatch = useDispatch()
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [isPasswordVisible, setIsPasswordVisible] = useState("")

    const { message, isLoading } = useSelector(state => state.login)
    const canLogin = username !== "" && password !== ""

    const onLogin = async (event) => {
        event.preventDefault();
        dispatch(loginActions.tryLogin({ username: username.trim(), password }))
    }

    return (
        <div className='login-container'>
            <form className='login-form-container' autoComplete="on" onSubmit={(event) => onLogin(event)} >
                <Grow in={true}>
                    <Typography variant='h4'>Sign in</Typography>
                </Grow>
                {message && <MessagePaper message={message} />}
                <Grow in={true}>
                    <TextField
                        label="Username or email"
                        type="text"
                        value={username}
                        onChange={(event) => setUsername(event.target.value)}
                        required
                        variant="outlined"
                        className="form-textfield"
                        InputProps={{
                            endAdornment: <PersonPinIcon />
                        }}
                    />
                </Grow>
                <Grow in={true}>
                    <TextField
                        label="Password"
                        type={isPasswordVisible ? "text" : "password"}
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                        required
                        variant="outlined"
                        className="form-textfield"
                        InputProps={{
                            endAdornment: <InputAdornment position="end" onClick={() => setIsPasswordVisible(!isPasswordVisible)} style={{cursor:'pointer'}}>
                                    {isPasswordVisible ? <Visibility  /> : <VisibilityOff />}
                            </InputAdornment>
                        }}
                    />
                </Grow>
                <Grow in={true} >
                    <Button variant="contained" color="primary" type="submit" disabled={!canLogin}>
                        <Typography variant='body1' className={'button-text'} >Sign in</Typography>
                    </Button>
                </Grow>
                {isLoading && <Loader />}
            </form>
                <Footer />
        </div>
    )
}