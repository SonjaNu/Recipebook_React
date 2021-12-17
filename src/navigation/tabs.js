import React, { useState } from 'react';
import Box from '@mui/material/Box'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import HomeIcon from '@mui/icons-material/Home';
import { Link } from 'react-router-dom';
import BrightnessLowIcon from '@mui/icons-material/BrightnessLow';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import SpaIcon from '@mui/icons-material/Spa';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';


function TabIcons (props) {

  const [value, setValue] = useState(0);

  const handleChange = (e, val) => {
    setValue(val);
  }

  return (
    <Box>
        <Tabs value={ value } onChange={ handleChange } variant='fullWidth' centered>
          <Tab label='Etusivu' icon={ <HomeIcon /> } component={ Link } to='/' />
          <Tab label='Lisää resepti' icon={ <AddIcon /> } component={ Link } to='/lisaa' />
          <Tab label='Näytä reseptit' icon={ <FormatListBulletedIcon /> } component={ Link } to='/nayta' />
          <Tab label='Reseptihaku' icon={ <SearchIcon /> } component={ Link } to='/haku' />
          <Tab label='Inspiroidu' icon={ <BrightnessLowIcon /> } component={ Link } to='/insp' />
          <Tab label='Terveysnurkka' icon={ <SpaIcon /> } component={ Link } to='/suosikki' />

        </Tabs>
    
     
    </Box>
  );
}

export default TabIcons;