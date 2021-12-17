import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import Box from '@mui/material/Box';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import HomeIcon from '@mui/icons-material/Home';
import axios from 'axios';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import AttachmentIcon from '@mui/icons-material/Attachment';
import AddIcon from '@mui/icons-material/Add';


const url = 'http://localhost:8080';


function CreateRecipe() {

  const [recipe, setValues] = useState({
    id: '',
    nimi: '', 
    kategoria: '',
    ainekset: '',
    ohje: '',
    allergia: '',
    valmistusaika: '', 
    vaikeus: '', 
    arvostelut: '', 
    tahdet: '',
    picture: []
  });

  const [viesti, setViesti] = useState('');


  const muuta = (e) => {
    setValues({
      ...recipe,
      [e.target.name]: e.target.value

     

    });
    
    console.log(e.target.value);
  };


  const muutaKuva = (e) => {
    setValues({
      ...recipe,
      picture: e.target.files[0]
    });

    setViesti('');
  }


  const history = useHistory();


  const addRecipe = (e) => {
    // Kun on kuva
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
      formData.append('picture', recipe.picture);
  
     
      axios.post(url + '/recipe/add', formData)
        .then(response => {
          // Jos lisäys onnistui eli back palautti statuksen 200
            if (response.status === 200) {

              setViesti('Lisättiin');

              history.push("/nayta");  //palataan kaikki reseptit -sivulle
              
              
            } else {
                setViesti('Lisäys ei onnistunut');
              }
        })
    }

    let kuvaNimi = '';
    if (recipe.picture !== null) {
      kuvaNimi = recipe.picture.name;
    }
    
    return (
    <Paper sx={ {paddingTop: 2, marginLeft: 4, marginRight: 4, paddingRight: 2, paddingLeft: 2, marginBottom: 2, paddingBottom: 1} }>
     
        <form>

          <Box sx={{paddingBottom: 3}} >

        <FormLabel sx={{ color: 'text.primary', fontSize: 30, fontWeight: 'medium' }}> Lisää uusi resepti</FormLabel>

        <FormLabel component="form">Laita ; aina, kun haluat rivinvaihdon. Esimerkiksi: 3 dl jauhoja; 1 kananmuna tai Paista 200 asteessa.; Tee kuorrutus.</FormLabel>
        </Box>

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
          defaultValue="Reseptin nimi"
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
          defaultValue="Luettelo aineksista"
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
          rows={4}
          defaultValue="Lisätietoja"
          value={ recipe.arvostelut }
          onChange={ (e) => muuta(e) }
        />

         {/*Valitse kategoria */ }

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



 {/*Valitse valmistusaika */ }

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


     {/*Valitse vaikeustaso */ }

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

                   
 {/*Valitse tähtimäärä (--> rating read only) */ }

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

 {/*Lisää kuva */ }

      <Input accept='photos/*' name='picture' id='picture' type='file'
        onChange={ (e) => muutaKuva(e) } sx={{display: 'none'}} />

      <InputLabel htmlFor='picture'>
        <Typography sx={{ display:'inline'}}>Kuva</Typography>
        <Button component='span'>
            <AttachmentIcon />
        </Button>
        <Typography sx={{ display:'inline'}}>{ kuvaNimi }</Typography>
      </InputLabel>
     
      </Box>   
<FormHelperText>Halutessasi, voit liittää reseptiin kuvan</FormHelperText>

<Box sx={{ paddingTop: 3}}> 
        <Button variant='outlined' color='secondary'  component={ Link } to='/nayta' startIcon={ <HomeIcon /> }>Peruuta</Button>
            <Button onClick={ (e) => addRecipe(e) } variant='outlined' sx={{marginLeft: 5}} startIcon={<AddIcon />}  >Lisää resepti</Button>
            
            </Box>   
        </form>
    </Paper>
    ) 
}

export default CreateRecipe;