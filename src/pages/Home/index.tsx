import React from 'react'

import { Container } from './home.style'
import {
  makeStyles,
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  Button,
  List,
  Typography,
  Divider,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  Box,
  Grid,
  Hidden,
  Switch,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu'
import AccountCircle from '@material-ui/icons/AccountCircle'
import AppsIcon from '@material-ui/icons/Apps'
import MoreVert from '@material-ui/icons/MoreVert'
import VideoCall from '@material-ui/icons/VideoCall'
import ExploreIcon from '@material-ui/icons/Explore';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import LibraryAddCheckIcon from '@material-ui/icons/LibraryAddCheck';
import HistoryIcon from '@material-ui/icons/History';
import AddCircle from '@material-ui/icons/AddCircle';
import HomeIcon from '@material-ui/icons/Home';
import MailIcon from '@material-ui/icons/Mail';

import Avatar from '../../assets/36265952.jpeg'
import Tumb from '../../assets/thumb1.png'

import LogoLight from '../../assets/preto.png'

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
    display: 'flex',
    // background: theme.palette.primary.main //consigo pegar a cor primaria do tema default 
  },
  title: {
    color: `#111111`
  },
  menuButton: {
    color: `blue`
  },
  leftContainer: {
    
  },
  icons: {
    
  },
  appBar: {
    boxShadow: 'none',
    zIndex: theme.zIndex.drawer + 1,
  },
  logo: {
    height: '25px'
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    borderRight: 'none'
  },
  drawerContainer: {
    overflow: 'auto',
  },
  listItemText: {
    fontSize: 14
  },
  listItem: {
    paddingTop: 4,
    paddingBottom: 4
  },
  subheader: {
    textTransform: 'uppercase',
  },
}))


const videos = [
  {
    id: 1,
    title:
      'FEED DO USUÁRIO | Criando uma Rede Social com React.js e .NET Core #29',
    channel: 'Lucas Nhimi',
    views: '11 mi de visualizações',
    date: 'há 1 semana',
    avatar: <Avatar />,
    thumb: <Tumb />,
  },
  {
    id: 2,
    title:
      'COMO MELHORAR SEU CODIGO JAVASCRIPT (ESLINT + PRETTIER + EDITORCONFIG) | Dicas e Truques #02',
    channel: 'Lucas Nhimi',
    views: '957 mil visualizações',
    date: 'há 1 semana',
    avatar: <Avatar />,
    thumb: <Tumb />,
  },
  {
    id: 3,
    title:
      'CONTEXT API NO EDITOR DE POST | Criando uma Rede Social com React.js e .NET Core #27',
    channel: 'Lucas Nhimi',
    views: '106 mil visualizações',
    date: 'há 1 semana',
    avatar: <Avatar />,
    thumb: <Tumb />,
  },
  {
    id: 4,
    title:
      'CONTEXT API NO EDITOR DE POST | Criando uma Rede Social com React.js e .NET Core #27',
    channel: 'Lucas Nhimi',
    views: '5,6 mi de visualizações',
    date: 'há 1 semana',
    avatar: <Avatar />,
    thumb: <Tumb />,
  },
  {
    id: 5,
    title:
      'EDITOR DE POST COM MARKDOWN 2 | Criando uma Rede Social com React.js e .NET Core #26',
    channel: 'Lucas Nhimi',
    views: '2,2 mi de visualizações',
    date: 'há 1 semana',
    avatar: <Avatar />,
    thumb: <Tumb />,
  },
  {
    id: 6,
    title: 'COMO MIGRAR PARA REACT HOOKS | Dicas e Truques #01',
    channel: 'Lucas Nhimi',
    views: '233 mil visualizações',
    date: 'há 1 semana',
    avatar: <Avatar />,
    thumb: <Tumb />,
  },
  {
    id: 7,
    title:
      'PRÉ-REQUISITOS | Criando uma Rede Social com React.js e .NET Core #01',
    channel: 'Lucas Nhimi',
    views: '118 mil visualizações',
    date: 'há 1 semana',
    avatar: <Avatar />,
    thumb: <Tumb />,
  },
  {
    id: 8,
    title:
      'GIT E GITHUB | Criando uma Rede Social com React.js e .NET Core #04',
    channel: 'Lucas Nhimi',
    views: '1,9 mi de visualizações',
    date: 'há 1 semana',
    avatar: <Avatar />,
    thumb: <Tumb />,
  },
];

const Home: React.FC = () => {
  const classes = useStyles()

  return (
    <>
      <Container>
        <div className={classes.root}>
          <AppBar color="inherit" className={classes.appBar}>
            <Toolbar style={{  justifyContent: 'space-between' }}>
              <div style={{ 
                display: 'flex',
                alignItems: 'center'
              }}>
                
                <IconButton edge="start" color="inherit" className={classes.menuButton} aria-label="menu">
                  <MenuIcon />
                </IconButton>
                <img src={LogoLight} alt="logo youtube light" className={classes.logo}/>
              </div>
              
              <div>
                <IconButton color="inherit" className={classes.icons} >
                  <VideoCall />
                </IconButton>
                <IconButton  color="inherit" className={classes.icons} >
                  <AppsIcon />
                </IconButton>
                <IconButton  color="inherit" className={classes.icons} >
                  <MoreVert />
                </IconButton>
                <Button color="default" startIcon={<AccountCircle />} variant="outlined">SIGN IN</Button>
              </div>
            </Toolbar>
          </AppBar>
          <Drawer
            className={classes.drawer}
            variant="permanent"
            classes={{
              paper: classes.drawerPaper,
            }}
          >
            <Toolbar />
            <div className={classes.drawerContainer}>
              <List>
                <ListItem classes={{
                  root: classes.listItem
                }} button>
                  <ListItemIcon><HomeIcon /></ListItemIcon>
                  <ListItemText classes={{
                    primary: classes.listItemText
                  }} primary={'Home'}/>
                </ListItem>
                <ListItem classes={{
                  root: classes.listItem
                }} button>
                  <ListItemIcon><ExploreIcon /></ListItemIcon>
                  <ListItemText classes={{
                    primary: classes.listItemText
                  }} primary={'Explore'}/>
                </ListItem>
              
                <ListItem button  classes={{
                  root: classes.listItem
                }}>
                  <ListItemIcon><SubscriptionsIcon /></ListItemIcon>
                  <ListItemText classes={{
                    primary: classes.listItemText
                  }} primary={'Subscriptions'}/>
                </ListItem>
              </List>
              <Divider />
              <List>
                <ListItem classes={{
                  root: classes.listItem
                }} button>
                  <ListItemIcon><LibraryAddCheckIcon /></ListItemIcon>
                  <ListItemText classes={{
                    primary: classes.listItemText
                  }} primary={'Libary'}/>
                </ListItem>
                <ListItem classes={{
                  root: classes.listItem
                }} button>
                  <ListItemIcon><HistoryIcon /></ListItemIcon>
                  <ListItemText classes={{
                    primary: classes.listItemText
                  }} primary={'History'}/>
                </ListItem>
              </List>
              <Divider />
                <Box p={3}>
                  <Typography variant="body2">Sign in to like videos, comment, and subscribe.</Typography>
                  <Box mt={2}>
                    <Button color="secondary" startIcon={<AccountCircle />} variant="outlined">SIGN IN</Button>
                  </Box>
                </Box>
              <Divider />
              <Divider />
              <List
                component='nav'
                aria-labelledby='nested-list-subheader'
                subheader={
                  <ListSubheader
                    component='div'
                    id='nested-list-subheader'
                    className={classes.subheader}
                  >
                    O Melhor do youtube
                  </ListSubheader>
                }
              >
                <ListItem button classes={{ root: classes.listItem }}>
                  <ListItemIcon>
                    <AddCircle />
                  </ListItemIcon>
                  <ListItemText
                    classes={{
                      primary: classes.listItemText,
                    }}
                    primary={'Música'}
                  />
                </ListItem>
                <ListItem button classes={{ root: classes.listItem }}>
                  <ListItemIcon>
                    <AddCircle />
                  </ListItemIcon>
                  <ListItemText
                    classes={{
                      primary: classes.listItemText,
                    }}
                    primary={'Esportes'}
                  />
                </ListItem>
                <ListItem button classes={{ root: classes.listItem }}>
                  <ListItemIcon>
                    <AddCircle />
                  </ListItemIcon>
                  <ListItemText
                    classes={{
                      primary: classes.listItemText,
                    }}
                    primary={'Jogos'}
                  />
                </ListItem>
                <ListItem button classes={{ root: classes.listItem }}>
                  <ListItemIcon>
                    <AddCircle />
                  </ListItemIcon>
                  <ListItemText
                    classes={{
                      primary: classes.listItemText,
                    }}
                    primary={'Filmes'}
                  />
                </ListItem>
                <ListItem button classes={{ root: classes.listItem }}>
                  <ListItemIcon>
                    <AddCircle />
                  </ListItemIcon>
                  <ListItemText
                    classes={{
                      primary: classes.listItemText,
                    }}
                    primary={'Notícias'}
                  />
                </ListItem>
                <ListItem button classes={{ root: classes.listItem }}>
                  <ListItemIcon>
                    <AddCircle />
                  </ListItemIcon>
                  <ListItemText
                    classes={{
                      primary: classes.listItemText,
                    }}
                    primary={'Ao vivo'}
                  />
                </ListItem>
                <ListItem button classes={{ root: classes.listItem }}>
                  <ListItemIcon>
                    <AddCircle />
                  </ListItemIcon>
                  <ListItemText
                    classes={{
                      primary: classes.listItemText,
                    }}
                    primary={'Destaques'}
                  />
                </ListItem>
                <ListItem button classes={{ root: classes.listItem }}>
                  <ListItemIcon>
                    <AddCircle />
                  </ListItemIcon>
                  <ListItemText
                    classes={{
                      primary: classes.listItemText,
                    }}
                    primary={'Videos 360'}
                  />
                </ListItem>
              </List>
              <Divider />
              <ListItem button classes={{ root: classes.listItem }}>
                <ListItemIcon>
                  <AddCircle />
                </ListItemIcon>
                <ListItemText
                  classes={{
                    primary: classes.listItemText,
                  }}
                  primary={'Procurar mais'}
                />
              </ListItem>
              <Divider />
            </div>
          </Drawer>
          
          <Box p={5}>
            <Toolbar />
            <Typography 
              variant="h5"
              color="textPrimary"
              style={{ fontWeight: 600 }}
            >
              Recomendados
            </Typography>
            <Grid container spacing={4}>
            {videos.map((item, index) => (
              <Grid item lg={3} md={4} sm={6} xs={12}>
                <Box>
                  <img
                    style={{ width: '100%' }}
                    alt={item.title}
                    src={Tumb}
                  />
                  <Box>
                    <Typography
                      style={{ fontWeight: 600 }}
                      gutterBottom
                      variant='body1'
                      color='textPrimary'
                    >
                      {item.title}
                    </Typography>
                    <Typography
                      display='block'
                      variant='body2'
                      color='textSecondary'
                    >
                      {item.channel}
                    </Typography>
                    <Typography variant='body2' color='textSecondary'>
                      {`${item.views} • ${item.date}`}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
          </Box>
        </div>
      </Container>
    </>
  )
}

export default Home