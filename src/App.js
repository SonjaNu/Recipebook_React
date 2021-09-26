import React from 'react';
import CreateRecipe from './components/CreateRecipe';
import ViewRecipe from './components/ViewRecipe';
import './App.css';
  

const recipes = [

  {id: 1,
  nimi: 'Mustikkamuffinssit',
  ainekset: '1 dl Mustikoita; 2 dl jauhoja; 2 kpl kananmunia',
  ohje: 'Tee muffinssit'},

  {id: 2,
  nimi: 'Banaanipannukakku',
  ainekset: '2 kpl banaaneja; 2 kpl kananmunia',
  ohje: 'Tee pannukakku'}
];

function App() {

  return(
    <div className="wrapper">
      <h1>Reseptikirja</h1>
      
      
      <CreateRecipe />

      <h2>Lista resepteistä</h2>
      <ViewRecipe recipes={ recipes }/>
    </div>
  );
}

export default App;
