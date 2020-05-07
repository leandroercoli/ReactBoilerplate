import React, { useEffect } from 'react';
import { HashRouter as Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import { useDispatch, useSelector } from 'react-redux'
import {  ThemeProvider as MuiThemeProvider, createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";
import { loginActions } from './actions';
import { Home, Login } from './containers'
import './styles/global.scss' // styling can be used through all components

const THEME = createMuiTheme({
  typography: {
    "fontFamily": "\"Jost\", \"Montserrat\", \"Dosis\", sans-serif",
    "fontSize": 14,
    "fontWeightLight": 200,
    "fontWeightRegular": 200,
    "fontWeightMedium": 200
  }
});

function App() {
  const dispatch = useDispatch()
  const { username } = useSelector(state => state.login)
  const history = createBrowserHistory();

  const updateStoredUser = () => {
    dispatch(loginActions.updateStoredUser())
  }

  const onLogout = async () => {
    dispatch(loginActions.logout())
    history.push("/");
  }

  useEffect(() => {
    updateStoredUser();
  }, [])

  return (
    <MuiThemeProvider theme={responsiveFontSizes(THEME)}> 
    <Router history={history} >
      {
        username && username !== "" ?
          <Home onLogout={onLogout} />
          : <Login />
      }
    </Router>
    </MuiThemeProvider>
  );
}

export default App;
