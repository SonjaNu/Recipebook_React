import React, { useState} from 'react';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import HomeIcon from '@mui/icons-material/Home';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import BrightnessLowIcon from '@mui/icons-material/BrightnessLow';
import AddIcon from '@mui/icons-material/Add';
import SpaIcon from '@mui/icons-material/Spa';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';


function BookMenu () {

 const [anchorNavi, setOpenNavi] = useState(null);

 const handleMenu = (e) => {
  setOpenNavi(e.currentTarget);
 };

 const handleClose = () => {
  setOpenNavi(null);
 }

 const menu = <Menu
 anchorEl={anchorNavi}
 open={Boolean(anchorNavi)}
 onClose={handleClose}
 anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
>
  <MenuItem onClick={handleClose} component={ Link } to='/'>
    <ListItemIcon><HomeIcon /></ListItemIcon>
    <ListItemText primary="Etusivu" />
  </MenuItem>
  <MenuItem onClick={handleClose} component={ Link } to='/lisaa'>
    <ListItemIcon><AddIcon /></ListItemIcon>
    <ListItemText primary="Lisää Resepti" />
  </MenuItem>
  <MenuItem onClick={handleClose} component={ Link } to='/nayta'>
    <ListItemIcon><FormatListBulletedIcon /></ListItemIcon>
    <ListItemText primary="Näytä reseptit" />
  </MenuItem>
  <MenuItem onClick={handleClose} component={ Link } to='/haku'>
    <ListItemIcon><SearchIcon /></ListItemIcon>
    <ListItemText primary="Reseptihaku" />
  </MenuItem>
  <MenuItem onClick={handleClose} component={ Link } to='/insp'>
    <ListItemIcon><BrightnessLowIcon /></ListItemIcon>
    <ListItemText primary="Inspiroidu" />
  </MenuItem>
  <MenuItem onClick={handleClose} component={ Link } to='/suosikki'>
    <ListItemIcon><SpaIcon /></ListItemIcon>
    <ListItemText primary="Terveysnurkka" />
  </MenuItem>



  
</Menu>;

  return (
    <Box>
      <AppBar position='static'>
        <Toolbar>
          <IconButton onClick={ handleMenu } color='inherit'>
            <MenuIcon />
          </IconButton>

          <Typography variant='h5' sx={ {flexGrow: 1, textAlign: 'center'} }>Recipebook - Elämäni reseptit</Typography>
        </Toolbar>
      </AppBar>
      { menu }
    </Box>
  );
}

export default  BookMenu;




