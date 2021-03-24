import React from 'react'

import { Container } from './home.style'


import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core'
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import MenuIcon from '@material-ui/icons/Menu'


const useStyles = makeStyles({
  root: {
    height: '100vh'
  },
  title: {
    color: `#111111`
  },
  menuButton: {
    background: `red`
  }
})


const Home: React.FC = () => {
  const classes = useStyles()

  return (
    <>
      <Container>
        <div className={classes.root}>
          <AppBar color="inherit">
            <Toolbar>
              <div style={{flex: 1}}>
              <IconButton edge="start" color="inherit" className={classes.menuButton} aria-label="menu">
                <MenuIcon />
              </IconButton>
              </div>
              
              
              <Button color="inherit">Login</Button>
            </Toolbar>
          </AppBar>
        </div>
      </Container>
    </>
  )
}

export default Home