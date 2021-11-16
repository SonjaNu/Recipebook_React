import React, { useState } from 'react';
import Box from '@mui/material/Box'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import HomeIcon from '@mui/icons-material/Home';
import CreateIcon from '@mui/icons-material/Create';
import ListIcon from '@mui/icons-material/List';
import { Link } from 'react-router-dom';

import BrightnessLowIcon from '@mui/icons-material/BrightnessLow';
import CreateRecipe from '../components/CreateRecipe';
import RecipeItem from '../components/RecipeItem';
import ViewRecipe from '../components/ViewRecipe';
import SearchIcon from '@mui/icons-material/Search';
import StarIcon from '@mui/icons-material/Star';


function TabIcons (props) {

  const [value, setValue] = useState(0);

  const handleChange = (e, val) => {
    setValue(val);
  }

  return (
    <Box>
        <Tabs value={ value } onChange={ handleChange } variant='fullWidth' centered>
          <Tab label='Etusivu' icon={ <HomeIcon /> } component={ Link } to='/' />
          <Tab label='Lisää resepti' icon={ <CreateIcon /> } component={ Link } to='/lisaa' />
          <Tab label='Näytä reseptit' icon={ <ListIcon /> } component={ Link } to='/nayta' />
          <Tab label='Reseptihaku' icon={ <SearchIcon /> } component={ Link } to='/haku' />
          <Tab label='Inspiroidu' icon={ <BrightnessLowIcon /> } component={ Link } to='/insp' />
          <Tab label='Suosikkireseptit' icon={ <StarIcon /> } component={ Link } to='/suosikki' />
          
          
          
        </Tabs>
    
     
    </Box>
  );
}

export default TabIcons;