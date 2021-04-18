import React from 'react';

import Home from './pages/Home'
import GlobalStyles from './styles/global';
import { ThemeProvider, createMuiTheme, makeStyles } from '@material-ui/core'


//é uma função que cria um objeto de estilos que poderão ser usados em cada arquivo da aplicação
const useStyles = makeStyles({
  root: {
    background: 'red',
    height: '100vh'
  }
})

function App() {
  //create é uma formada de englobar as configurações padrões como cores, fontes, tammanhos etc
  const theme = createMuiTheme({
    //com esta propriedade consigo mudar a configuração padrão do materiau ui
    palette: {
      primary: {
        main: '#9609c1'
      }
    }
  })


  //instacia esta classe de estilos
  const classes = useStyles()

  return (  
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Home />
    </ThemeProvider>
  );
}

export default App;