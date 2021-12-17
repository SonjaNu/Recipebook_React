import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";
import { useParams } from 'react-router';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Button from '@mui/material/Button';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import Box from '@mui/material/Box';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import HomeIcon from '@mui/icons-material/Home';
import axios from 'axios';
import CheckIcon from '@mui/icons-material/Check';

const url = 'http://localhost:8080';

function EditRecipe(props) {

    //jos näillä saisi asetetut arvot kenttiin - ei toimi... vertaa RecipeItem
    let { id } = useParams();
    let { nimi } = useParams();
    let { kategoria } = useParams();
    let { ainekset } = useParams();
    let { ohje } = useParams();
    let { allergia } = useParams(); 
    let { valmistusaika } = useParams(); 
    let { vaikeus } = useParams(); 
    let { arvostelut } = useParams(); 
    let { tahdet } = useParams(); 
 
  const [recipe, setValues] = useState({
    id: id,
    nimi: nimi, 
    kategoria: kategoria,
    ainekset: ainekset,
    ohje: ohje,
    allergia: allergia,
    valmistusaika: valmistusaika, 
    vaikeus: vaikeus, 
    arvostelut: arvostelut, 
    tahdet: tahdet,
  });

  const [viesti, setViesti] = useState('');

  const muuta = (e) => {
    setValues({
      ...recipe,
      [e.target.name]: e.target.value
      
    });
    setViesti('');
    console.log(e.target.value);
  };


  const history = useHistory();

  const addRecipe = (e) => {

      const formData = new FormData();
      formData.append('nimi', recipe.nimi);
      formData.append('kategoria', recipe.kategoria);
      formData.append('ainekset', recipe.ainekset);
      formData.append('ohje', recipe.ohje);
      formData.append('allergia', recipe.allergia);
      formData.append('valmistusaika', recipe.valmistusaika);
      formData.append('vaikeus', recipe.vaikeus);
      formData.append('arvostelut', recipe.arvostelut);
      formData.append('tahdet', recipe.tahdet);
  
    
      axios.post(url + '/recipe/edit/' + recipe.id, formData)
        .then(response => {
          // Jos lisäys onnistui eli back palautti statuksen 200
            if (response.status === 200) {
              history.push("/nayta");  //palataan kaikki reseptit -sivulle
                setViesti('Muokkaus onnistui');
            } else {
                setViesti('Muokkaus ei onnistunut');
              }
        })
    }
     
   
    return (
    <Paper sx={ {paddingTop: 2, marginLeft: 4, marginRight: 4, paddingRight: 2, paddingLeft: 2, marginBottom: 2, paddingBottom: 1} }>
     
        <form>


        <FormLabel sx={{ color: 'text.primary', fontSize: 34, fontWeight: 'medium' }}> Muokkaa reseptin tietoja</FormLabel>

        <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '100ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
       
          id="name"
          label="Nimi"
          name='nimi'
          multiline
          rows={1}
          defaultValue={nimi} 
          value={ recipe.nimi }
          onChange={ (e) => muuta(e) }
        />
       </div>
<div>
        <TextField
       sx={{marginTop: '5cm'}}
          id="needs"
          label="Ainekset"
          name='ainekset'
          multiline
          rows={8}
          defaultValue={ainekset} 
          value={ recipe.ainekset }
          onChange={ (e) => muuta(e) }
        />
       </div>

       <div>
        <TextField
        margin='normal'
          id="Directions"
          label="Ohje"
          name='ohje'
          multiline
          rows={10}
          defaultValue="Työohje"
          value={ recipe.ohje }
          onChange={ (e) => muuta(e) }
        />
       </div>

       <div>
        <TextField
       sx={{marginTop: '5cm'}}
          id="needs"
          label="Erityisruokavalio"
          name='allergia'
          multiline
          rows={3}
          defaultValue="Tiedot erityisruokavaliosta"
          value={ recipe.allergia }
          onChange={ (e) => muuta(e) }
        />
       </div>

       <TextField
        margin='normal'
          id="arvostelut"
          label="Lisätietoja reseptistä"
          name='arvostelut'
          multiline
          rows={2}
          defaultValue="Lisätietoja reseptistä"
          value={ recipe.arvostelut }
          onChange={ (e) => muuta(e) }
        />


         <FormControl component="fieldset">
        <FormLabel component="legend" sx={{marginTop: '1cm'}} >Valitse kategoria</FormLabel>
      <RadioGroup
        row aria-label="category-radio-buttons-group"
        name="kategoria"
        value={recipe.kategoria}
        onChange={ (e) => muuta(e) }
       
      >
    <FormControlLabel value="Leivonnaiset" control={<Radio />} label="Leivonnaiset" />
    <FormControlLabel value="Naposteltavat" control={<Radio />} label="Naposteltavat" />
    <FormControlLabel value="Makeat piirakat" control={<Radio />} label="Makeat piirakat" />
    <FormControlLabel value="Suolaiset piirakat" control={<Radio />} label="Suolaiset piirakat" />
    <FormControlLabel value="Salaatit" control={<Radio />} label="Salaatit" />
    <FormControlLabel value="Keitot" control={<Radio />} label="Keitot" />
    <FormControlLabel value="Arkiruuat" control={<Radio />} label="Arkiruuat" />
    <FormControlLabel value="Alkupalat/Kevyet ateriat" control={<Radio />} label="Alkupalat/Kevyet ateriat" />
    <FormControlLabel value="Kakut" control={<Radio />} label="Kakut" />
    <FormControlLabel value="Cocktailit" control={<Radio />} label="Cocktailit" />
    <FormControlLabel value="Smoothiet" control={<Radio />} label="Smoothiet" />  
    <FormControlLabel value="Leivät" control={<Radio />} label="Leivät" />
    <FormControlLabel value="Jälkiruuat" control={<Radio />} label="Jälkiruuat" />
    <FormControlLabel value="Teemaruuat/herkut" control={<Radio />} label="Teemaruuat/herkut" />
      </RadioGroup>
    </FormControl>


 <FormControl component="fieldset">
        <FormLabel component="legend" sx={{marginTop: '1cm'}} >Valitse aktiivinen valmistusaika</FormLabel>
      <RadioGroup
        row aria-label="time-radio-buttons-group"
        name="valmistusaika"
        value={recipe.valmistusaika}
        onChange={ (e) => muuta(e) }
       
      >
    <FormControlLabel value="10-20 min" control={<Radio />} label="10-20 min" />
    <FormControlLabel value="20-30 min" control={<Radio />} label="20-30 min" />
    <FormControlLabel value="30-40 min" control={<Radio />} label="30-40 min" />
    <FormControlLabel value="40-50 min" control={<Radio />} label="40-50 min" />
    <FormControlLabel value="noin tunti" control={<Radio />} label="noin tunti" />
    <FormControlLabel value="1 h 30 min" control={<Radio />} label="1 h 30 min" />
    <FormControlLabel value="2 tuntia" control={<Radio />} label="2 tuntia" />
    <FormControlLabel value="yli 2 tuntia" control={<Radio />} label="yli 2 tuntia" />
  
      </RadioGroup>
    </FormControl>
   

          <FormControl component="fieldset">
        <FormLabel component="legend" sx={{marginTop: '1cm'}} >Valitse vaikeustaso</FormLabel>
      <RadioGroup
       row aria-label="challenging-radio-buttons-group"
        name="vaikeus"
        value={recipe.vaikeus}
        onChange={ (e) => muuta(e) }
       
      >
    <FormControlLabel value="erittäin helppo" control={<Radio />} label="erittäin helppo" />
    <FormControlLabel value="helppo" control={<Radio />} label="helppo" />
    <FormControlLabel value="keskivaikea" control={<Radio />} label="keskivaikea" />
    <FormControlLabel value="vaikea" control={<Radio />} label="vaikea" />
    <FormControlLabel value="erittäin vaikea" control={<Radio />} label="erittäin vaikea" />
   
      </RadioGroup>
    </FormControl>   
         

<FormControl component="fieldset">
        <FormLabel component="legend" sx={{marginTop: '1cm'}} >Valitse tähtimäärä</FormLabel>
      <RadioGroup
        row aria-label="stars-radio-buttons-group"
        name="tahdet"
        value={recipe.tahdet}
        onChange={ (e) => muuta(e) }
       
      >
    <FormControlLabel value={1} control={<Radio />} label="1 tähti" />
    <FormControlLabel value={2} control={<Radio />} label="2 tähteä" />
    <FormControlLabel value={3} control={<Radio />} label="3 tähteä" />
    <FormControlLabel value={4} control={<Radio />} label="4 tähteä" />
    <FormControlLabel value={5} control={<Radio />} label="5 tähteä" />
    
      </RadioGroup>
    </FormControl>              
    </Box>

    <Box sx={{paddingTop: 3}}> 

           <Button variant='outlined' color='secondary' component={ Link } to='/nayta' startIcon={ <HomeIcon /> }>Peruuta</Button>
            <Button onClick={ (e) => addRecipe(e) } variant='outlined'  sx={ {marginLeft: 100, marginRight: 2} } startIcon={ <CheckIcon /> }>Hyväksy muutokset</Button>
           
           </Box>
        </form>
    </Paper>
    ) 
}

export default EditRecipe;