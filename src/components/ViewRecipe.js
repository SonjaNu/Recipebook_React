import React, {useState} from 'react';
import axios from 'axios';
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
import Button from '@mui/material/Button';
import FormLabel from '@mui/material/FormLabel';
import Rating from '@mui/material/Rating';
import FoodBankOutlinedIcon from '@mui/icons-material/FoodBankOutlined';


const url = 'http://localhost:8080';

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

    const [viesti, setViesti] = useState('');

    const deleteRecipe = (id) => {    
       
          axios.get(url + '/recipe/delete/' +  id)  /* on oltava get, koska palvelinpuolella RecipeServerissä on get-kutsu, eikä delete */
            .then(response => {

              // Jos poisto onnistui eli back palautti statuksen 200
                if (response.status === 200) {
   
                    window.location.reload(false);
                    setViesti('Poistettiin');

                } else {
                    setViesti('Poisto ei onnistunut');
                  }
            })
        }

    return (
        <Box>
    
        <Grid container spacing={4} sx={{paddingTop:4, paddingLeft: 4, paddingBottom: 2}}>

            {
              props.recipes.map(recipe => {
                  return (
                    <Grid item key={ recipe.id } >

                    <Box sx={ {border: '2px solid lightcoral', minWidth: 200, minHeight: 200} }> 
                        <Card sx={ kortti }>

                        {
                                    
                                    recipe.picture ?
                                        <CardMedia
                                        sx={ kortti }
                                        image={ 'http://localhost:8080/download/' +  recipe.picture }
                                        title={ recipe.nimi} />
                                        :
                                        <Typography sx={ kortti }>Ei kuvaa</Typography> 
                                }

                            <CardHeader         
                                title={ recipe.nimi }
                                subheader={ recipe.kategoria } />
                            <CardContent>

                            <Rating name="read-only-cards" value={recipe.tahdet} readOnly />
  
                            </CardContent>

                            <CardActions>
                                <Button startIcon={<FoodBankOutlinedIcon/>} component={ Link } to={'/hae/' + recipe.id +  '/' + recipe.nimi + '/' + recipe.kategoria + '/' + recipe.allergia + '/' + recipe.ainekset + '/' + recipe.ohje + '/' + recipe.valmistusaika + '/' + recipe.vaikeus + '/' + recipe.arvostelut + '/' + recipe.picture}>Näytä</Button>
                                <Button  onClick={ (e) => deleteRecipe(recipe.id) } color='secondary'  startIcon={<DeleteIcon />}>Poista

                                
                                </Button>
                            </CardActions>
                           
                        </Card>

                        </Box>
                    </Grid>
                )
                  
     
              })  
            }
    </Grid>
    </Box>
    )
}


export default ViewRecipes;