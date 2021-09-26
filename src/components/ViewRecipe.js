import React, {useState} from 'react';

function ViewRecipes (props) {

    const[poisto, setPoisto] = useState('');

    const poista = (e) => {
       
        //  setPoisto('Resepti poistetaan!')
      
  }

    return (
        <div>
            {
              props.recipes.map(recipe => {
                  return (
                      <p key={recipe.id}>
                          Nimi: { recipe.nimi }<br />
                          Ainekset: { recipe.ainekset }<br />
                          Ohje: { recipe.ohje }<br />
                          <button type='button' onClick={ (e) => poista(e) }>Poista</button>
                      </p>
                      
                  )
              })  
            }
        </div>
    )
}

export default ViewRecipes;