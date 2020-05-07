import React, { useEffect } from 'react';
import { HashRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { useSelector } from 'react-redux'
import { Typography } from '@material-ui/core';
import { Topbar, Footer } from '../components'

export function Home({ onLogout }) {
    const { username } = useSelector(state => state.login)

    const setup = () => {
        // Initial data retrieval
    }

    useEffect(() => {
        setup()
    }, [])

    return (
        <Router>
            <div className='home-container'>
                <Topbar onLogout={onLogout} />
                <div className="main">
                    <Switch>
                        <Route path="/home">
                            <Typography variant='h1' style={{ paddingLeft: 10 }}>Welcome /HOME, {username}!</Typography>
                       </Route>
                        <Route path="/">
                            <Redirect exact from="/" to="/home" />
                        </Route>
                    </Switch>
                    <Footer />
                </div>
            </div>
        </Router >
    );
}

