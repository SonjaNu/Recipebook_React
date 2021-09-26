import React, {useState} from 'react';
import '../App.css';



function CreateRecipe () {
    const[recipe, setValues] = useState({nimi:'', ainekset:'', ohje:'' });
    const[virhe, setVirhe ] = useState('');
    

    const muuta = (e) => {
        setValues( 
            { ...recipe, [e.target.name]: e.target.value }
        );
        setVirhe('');
    }

    const lisaa = (e) => {
        if (recipe.nimi.length === 0 || recipe.ainekset.length === 0 ||
            recipe.ohje.length === 0) {
            setVirhe('Täytä kaikki kentät!')
        }
    }

    return(
    <div>
        <form method='post'>
        <fieldset>
            <h2>Lisää uusi resepti</h2>
            <label>
                <h3 htmlFor='nimi'>Nimi</h3>
                <input type='text' name='nimi' onChange={ (e) => muuta(e) } />
            </label>

            <label>
                <h3 htmlFor='ainekset'>Ainekset </h3>
                <textarea id="aines" name="ohje" rows="20" cols="50"  onChange={ (e) => muuta(e) }></textarea>
            </label>  

            <label>
                <h3 htmlFor='ohje'>Ohje </h3>
                <textarea id="ohje" name="ohje" rows="20" cols="50"  onChange={ (e) => muuta(e) }></textarea>
            </label>
        
            <label>
                <h3 for="aika">Valmistusaika </h3> 
                <select id="aika"
                name="aika">
                <option
                value="20">&lt; 20
                min</option>
                <option
                selected="selected" value="2040">20-40
                min</option>
                <option value="4060">40-60
                min</option>
                <option value="6090">60-90
                min</option>
                <option value="90">&gt;
                90
                min</option>
                </select>
            </label>

            <h3>Valitse kategoria:</h3>
                
                <input type="checkbox" id="salaatti" />
                <label for="salaatti">salaatti</label>
                <br/>
                <input type="checkbox" id="naposteltavat" />
                <label for="naposteltavat">naposteltavat</label>
                <br/>
                <input type="checkbox" id="paaruoka" />
                <label for="paaruoka">pääruoka</label>
                <br/>
                <input type="checkbox" id="jalkiruoka" />
                <label for="jalkiruoka">jälkiruoka</label>
                <br/>
                <br/>

                <label>
                <button type='button' onClick={ (e) => lisaa(e) }>Lisää</button> 
                
                </label>
        
        </fieldset> 


        
            
        </form>
        <p>{ virhe }</p>
    </div>
    );
}
export default CreateRecipe;