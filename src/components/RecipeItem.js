import React, {useState} from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import DeleteIcon from '@mui/icons-material/Delete';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Button from '@mui/material/Button';
import FormLabel from '@mui/material/FormLabel';
import Paper from '@mui/material/Paper';
import Rating from '@mui/material/Rating';
import Avatar from '@mui/material/Avatar';
import PersonIcon from '@mui/icons-material/Person';


const kortti = {
    
  minWidth: 100,
  maxWidth: 250, 
  minHeight: 150,
  
  borderWidth: 1,
  borderStyle: 'solid',
  borderColor: 'black',
  borderRadius: 2
}


function RecipeItem (props) {
  let { id } = useParams();
  let { nimi } = useParams();
  let { kategoria } = useParams();

    return (
      <Card>
      <CardHeader
         avatar={ <Avatar><PersonIcon /></Avatar>}
         title={ nimi }
         subheader={ kategoria } />

      <CardContent>
          <Typography>Id: { id }</Typography>
          
      </CardContent>

      <CardActions>
        <Link to='/nayta'><Typography>Takaisin</Typography></Link>
      </CardActions>
   </Card>
  );
}


export default RecipeItem;