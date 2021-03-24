import React from 'react';

import Home from './pages/Home'
import GlobalStyles from './styles/global';
import { ThemeProvider, createMuiTheme, makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
  root: {
    background: 'red',
    height: '100vh'
  }
})

function App() {
  const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#9609c1'
      }
    }
  })

  const classes = useStyles()

  return (  
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Home />
    </ThemeProvider>
  );
}

export default App;