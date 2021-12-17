import {useState, useEffect} from 'react';
import ViewRecipes from '../components/ViewRecipe';
import Typography from '@mui/material/Typography';

const url = 'http://localhost:8080';


function GetRecipes () {
    const [recipes, setRecipes] = useState([]);
    const [virhe, setVirhe] = useState('Haetaan'); 
  
    const getAllRecipes = async () => {
        try {
          const response = await fetch(url + '/recipe/all');
          const json = await response.json();
          setRecipes(json);
          setVirhe('');
        } catch (error) {
          setRecipes([]);
          setVirhe('Tietojen haku ei onnistunut');
        }
      }
  
    useEffect(() => {
      getAllRecipes();
    }, []); 
  
    if (virhe.length > 0) {
        return ( <Typography>{ virhe }</Typography> );
    }
     
    if (recipes.length > 0) {
        return ( <ViewRecipes recipes={ recipes } /> );
    }
     else {
    return ( <Typography>Ei reseptejä</Typography> );

     }

  }
  
  export default GetRecipes;