import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import CreateRecipe from './components/CreateRecipe';
import ViewRecipe from './components/ViewRecipe';
import RecipeItem from './components/RecipeItem';
import SearchRecipe from './components/SearchRecipes';
import FrontPage from './components/FrontPage';
import './App.css';
import BookMenu from './navigation/menu';
import TabIcons from './navigation/tabs';
import {red, purple, blue, green, yellow, blueGrey, pink } from '@mui/material/colors';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Inspiration from './components/Inspiration';
import GetRecipes from './components/GetRecipes';
import Favorites from './components/Favorites';
import EditRecipe from './components/EditRecipe';
import Pastries from './components/Pastries';
import Cocktails from './components/Cocktails';
import Pies from './components/Pies';
import Salads from './components/Salads';
import Smoothies from './components/Smoothies';
import Soups from './components/Soups';
import Starters from './components/Starters';
import ThemeFood from './components/ThemeFood';
import Breads from './components/Breads';
import Cakes from './components/Cakes';
import EverydayFood from './components/EverydayFood';



const theme = createTheme({
  palette: { primary: {main: '#864000', 
    contrastText: '#FFEFCF'},    
    secondary: {main: '#FF7A00', 
      contrastText: '#FFEFCF'},    
      text: {primary: '#D44000', 
        secondary: blueGrey[900], 
        contrastText: '#FFEFCF'},    
        action: {hover:  pink[50]},    
        background: {default: '#FFEFCF'} },
        
        typography: { fontFamily: ['Sriracha', 'cursive'], },
        
        overrides: {  },

        
      
      });


  
      const inspiraatiotiedot = [ {id: 1, otsikko: 'Leivonnaiset', teksti: "Leivonnaiset ovat hyviä herkkuja.", kuvaus: "Lauran kanssa ensimmäinen ulkomaanmatka", img: "./photos/pastry.jpg"},
      {id: 2, otsikko: 'Cocktailit', teksti: "Nam, Mojito!", kuvaus: " cocktaileja", img: "./photos/cocktail.jpg"},
      ];

function App() {

  return(
<BrowserRouter>
    <ThemeProvider theme={ theme }>
  
  <CssBaseline />
  
  <BookMenu />
  <TabIcons/>
  <Switch>
  <Route exact path='/'>
          <FrontPage />
        </Route> 
        <Route path='/lisaa'>
          <CreateRecipe />
        </Route>

        <Route path='/muokkaa/:id/:nimi/:kategoria?/:allergia?/:ainekset?/:ohje?/:valmistusaika?/:vaikeus?/:arvostelut?/'>
          <EditRecipe />
        </Route>

       {/* <Route path='/nayta'>
          <ViewRecipe recipes={recipes} />
        </Route>
      */}

        <Route path='/nayta'>
          <GetRecipes />
        </Route>

        <Route path='/hae/:id/:nimi/:kategoria?/:allergia?/:ainekset?/:ohje?/:valmistusaika?/:vaikeus?/:arvostelut?/'>
          <RecipeItem />
        </Route> 
        <Route path='/haku'>
          <SearchRecipe /> 
        </Route>
        <Route path='/insp'>
          <Inspiration />
        </Route>

        <Route path='/suosikki'>
        <Favorites />
        </Route>

        <Route path='/leivonnaiset'>
        <Pastries />
        </Route>

        <Route path='/cocktailit'>
        <Cocktails />
        </Route>

        <Route path='/leivat'>
        <Breads />
        </Route>

        <Route path='/kakut'>
        <Cakes />
        </Route>

        <Route path='/arkiruoka'>
        <EverydayFood />
        </Route>

        <Route path='/piirakat'>
        <Pies />
        </Route>

        <Route path='/salaatit'>
        <Salads />
        </Route>

        <Route path='/smoothiet'>
        <Smoothies />
        </Route>

        <Route path='/keitot'>
        <Soups />
        </Route>

        <Route path='/alkupalat'>
        <Starters />
        </Route>

        <Route path='/teemaruuat'>
        <ThemeFood />
        </Route>

        <Route path='*'>
          <FrontPage />
        </Route>
      </Switch>
    
</ThemeProvider>
</BrowserRouter>

   
  );
}

export default App;
