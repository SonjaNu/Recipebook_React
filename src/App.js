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
import {red, purple, blue, green, yellow, blueGrey } from '@mui/material/colors';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Inspiration from './components/Inspiration';



const theme = createTheme({
  palette: { primary: {main: '#864000', 
    contrastText: '#FFEFCF'},    
    secondary: {main: '#FF7A00', 
      contrastText: '#FFEFCF'},    
      text: {primary: '#D44000', 
        secondary: blueGrey[900], 
        contrastText: '#FFEFCF'},    
        action: {hover:  blueGrey[100]},    
        background: {default: '#FFEFCF'} },
        
        typography: { fontFamily: ['Sriracha', 'cursive'], },
        
        overrides: {  },

        
      
      });


  

const recipes = [

  {
    id: 1,
    
  nimi: 'Mustikkamuffinssit',
  kategoria: 'Leivonnainen',
  ainekset: '1 dl Mustikoita; 2 dl jauhoja; 2 kpl kananmunia',
  ohje: 'Tee muffinssit',
  arvostelut: 2,
  tahdet: 8,
  picture:  "./photos/blueberrymuffins.jpg"},

  { 
    id: 2,
   
  nimi: 'Banaanipannukakku',
  kategoria: 'Välipala',
  ainekset: '2 kpl banaaneja; 2 kpl kananmunia',
  ohje: 'Tee pannukakku',
  arvostelut: 3,
  tahdet: 9,
  picture:  "./photos/bananapancake.jpg"}
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
        <Route path='/nayta'>
          <ViewRecipe recipes={recipes} />
        </Route>
        <Route path='/nayta/:id/:nimi/:kategoria'>
          <RecipeItem />
        </Route> 
        <Route path='/haku'>
          <SearchRecipe />
        </Route>
        <Route path='/insp'>
          <Inspiration />
        </Route>
        <Route path='/suosikki'>
          <FrontPage />
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
