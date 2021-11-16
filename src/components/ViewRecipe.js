import React, {useState} from 'react';
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


const kortti = {
    
    minWidth: 100,
    maxWidth: 250, 
    minHeight: 150,
    
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'black',
    borderRadius: 2
}

function ViewRecipes (props) {

    return (
        <box>
        <FormLabel sx={{ color: 'text.primary', fontSize: 34, fontWeight: 'medium', paddingLeft: 4 }}> Selaa reseptejä</FormLabel>
        <Grid container spacing={4} sx={{paddingTop:4, paddingLeft: 4}}>

   


            {
              props.recipes.map(recipe => {
                  return (
                    <Grid item key={ recipe.id } >

        <Box sx={ {border: '2px solid lightcoral', minWidth: 200, minHeight: 200} }> 
                        <Card sx={ kortti }>
                            <CardActions>
                                <Button startIcon={<AccountCircleIcon/>} component={ Link } to={'nayta/' + recipe.id +  '/' + recipe.nimi + '/' + recipe.kategoria}>Näytä</Button>
                                <Button color='secondary' startIcon={<DeleteIcon />}>Poista</Button>
                            </CardActions>
                            <CardHeader         
                                title={ recipe.nimi }
                                subheader={ recipe.kategoria } />
                            <CardContent>

                            <Rating name="read-only-cards" value={recipe.tahdet / recipe.arvostelut} readOnly />

                            
                                {
                                    
                                    recipe.picture ?
                                        <CardMedia
                                        sx={ kortti }
                                        image={ recipe.picture }
                                        title={ recipe.picture } />
                                        :
                                        <Typography sx={ kortti }>Ei kuvaa</Typography> 
                                }
                            </CardContent>
                        </Card>

                        </Box>
                    </Grid>
                )
                  
 
                  
              })  
            }
    </Grid>
    </box>
    )
}


export default ViewRecipes;