import React, {useState} from 'react';
import { Link } from 'react-router-dom';


import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';
import Switch from '@mui/material/Switch';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormHelperText from '@mui/material/FormHelperText';
import Box from '@mui/material/Box';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import IconButton from '@mui/material/IconButton';
import HomeIcon from '@mui/icons-material/Home';



const difficulty = [
    { value: 0, label: '0'},
    { value: 1, label: '1'},
    { value: 2, label: '2'}, 
    { value: 3, label: '3'},
    { value: 4, label: '4'},
    { value: 5, label: '5'},
];


function CreateRecipe() {
    
    const [checked, setChecked, value, setValue] = useState(true);

    const handleChange = (event) => {
        setState({
          ...state,
          [event.target.name]: event.target.checked,
        });
      };


   /*Allergiatiedot */
    const [state, setState] = React.useState({
       vehna: true,
       maidoton: false,
        glut: false,
        sokeri: false,
        kasvi: false,
       vege: false,
        muna: false,
      });
      const { vehna, maidoton, glut, sokeri, kasvi, vege, muna } = state;
      const error = [vehna, maidoton, glut, sokeri, kasvi, vege, muna].filter((v) => v).length < 1;


    return (
    <Paper sx={ {marginTop: 2, marginLeft: 2, padding: 2} }>
     
        <form>

        <FormLabel sx={{ color: 'text.primary', fontSize: 34, fontWeight: 'medium' }}> Lisää uusi resepti</FormLabel>

        <FormLabel component="form">Erottele ainekset puolipisteellä, esim. 3 dl jauhoja; 1 dl sokeria; jne.</FormLabel>
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
          multiline
          rows={1}
          defaultValue="Reseptin nimi"
        />
       </div>
<div>
        <TextField
       sx={{marginTop: '5cm'}}
          id="needs"
          label="Ainekset"
          multiline
          rows={8}
          defaultValue="Luettelo aineksista"
        />
       </div>

       <div>
        <TextField
        margin='normal'
          id="Directions"
          label="Ohje"
          multiline
          rows={10}
          defaultValue="Työohje"
        />
       </div>
     
    </Box>

        <FormControl component="fieldset">
  <FormLabel component="legend" sx={{marginTop: '1cm'}} >Valitse kategoria</FormLabel>
  <RadioGroup
    row aria-label="kategoria"
    defaultValue="leivos"
    name="radio-buttons-group"
  >
   <FormControlLabel value="pastry" control={<Radio />} label="Leivonnaiset" />
    <FormControlLabel value="snacks" control={<Radio />} label="Naposteltavat" />
    <FormControlLabel value="sweetpie" control={<Radio />} label="Makeat piirakat" />
    <FormControlLabel value="pie" control={<Radio />} label="Suolaiset piirakat" />
    <FormControlLabel value="salad" control={<Radio />} label="Salaatit" />
    <FormControlLabel value="soup" control={<Radio />} label="Keitot" />
    <FormControlLabel value="everydayfood" control={<Radio />} label="Arkiruuat" />
    <FormControlLabel value="starter" control={<Radio />} label="Alkupalat/Kevyet ateriat" />
    <FormControlLabel value="cake" control={<Radio />} label="Kakut" />
    <FormControlLabel value="cocktail" control={<Radio />} label="Cocktailit" />
    <FormControlLabel value="smoothie" control={<Radio />} label="Smoothiet" />
    <FormControlLabel value="theme" control={<Radio />} label="Teemaruuat/herkut" />
    <FormControlLabel value="bread" control={<Radio />} label="Leivät" />
    <FormControlLabel value="dessert" control={<Radio />} label="Jälkiruuat" />
  </RadioGroup>
</FormControl>   



 
            <Box sx={{ display: 'flex' }}>
      <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
        <FormLabel component="legend">Valitse allergiatiedot</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox checked={vehna} onChange={handleChange} name="vehna" />
            }
            label="Ei sisällä vehnää"
          />
          <FormControlLabel
            control={
              <Checkbox checked={maidoton} onChange={handleChange} name="maidoton" />
            }
            label="Maidoton"
          />
          <FormControlLabel
            control={
              <Checkbox checked={glut} onChange={handleChange} name="glut" />
            }
            label="Gluteeniton"
          />

        <FormControlLabel
            control={
              <Checkbox checked={sokeri} onChange={handleChange} name="sokeri" />
            }
            label="Sokeriton"
          />

        <FormControlLabel
            control={
              <Checkbox checked={kasvi} onChange={handleChange} name="kasvi" />
            }
            label="Kasvisruoka"
          />

        <FormControlLabel
            control={
              <Checkbox checked={vege} onChange={handleChange} name="vege" />
            }
            label="Vegaaninen"
          />

        <FormControlLabel
            control={
              <Checkbox checked={muna} onChange={handleChange} name="muna" />
            }
            label="Kananmunaton"
          />
        </FormGroup>

        <FormControl
        required
        error={error}
        component="fieldset"
        sx={{ m: 3 }}
        variant="standard"
      >
       
        <FormHelperText>Valitse vähintään yksi!</FormHelperText>
      </FormControl>
      </FormControl>
     
    </Box>

    <Button
  variant="contained"
  component="label"
>
  Lataa kuva koneeltasi
  <input
    type="file"
    hidden
  />
</Button> 
<FormHelperText>Halutessasi, voit liittää reseptiin kuvan</FormHelperText>


<FormControl component="fieldset">
  <FormLabel component="time" sx={{marginTop: '1cm'}} >Valitse aktiivinen valmistusaika</FormLabel>
  <RadioGroup
    row aria-label="time"
    defaultValue="10-20 min"
    name="radio-buttons-group"
  >
    <FormControlLabel value="leivos" control={<Radio />} label="10-20 min" />
    <FormControlLabel value="napostelu" control={<Radio />} label="20-30 min" />
    <FormControlLabel value="mapiiras" control={<Radio />} label="30-40 min" />
    <FormControlLabel value="spiiras" control={<Radio />} label="40-50 min" />
    <FormControlLabel value="salaatti" control={<Radio />} label="noin tunti" />
    <FormControlLabel value="keitto" control={<Radio />} label="1 h 30 min" />
    <FormControlLabel value="arki" control={<Radio />} label="2 tuntia" />
    <FormControlLabel value="paa" control={<Radio />} label="yli 2 tuntia" />

  </RadioGroup>
</FormControl>  

            <Typography sx={{marginTop: '1cm'}} >Vaikeusaste</Typography>
            <FormHelperText>Arvioi reseptin vaikeusaste asteikolla 0-5, jossa 0 on erittäin helppo ja 5 erittäin vaikea</FormHelperText>
            <Slider
                valueLabelDisplay='auto'
                step={ 0.25 }
                defaultValue={ 2.5 }
                min={ 0 }
                max={ 5 }
                marks={ difficulty }
                
            />

            <Typography gutterBottom  sx={{marginTop: '1cm'}} >Lisää suosikkeihin
                <Switch
                    checked={ checked }
                    onChange={ handleChange }
                    value='checked'
                />
            </Typography>

            <Button variant='outlined'  sx={ {marginLeft: 115, marginRight: 2} }>Lisää resepti</Button>
            <Button variant='outlined' color='secondary' component={ Link } to='/' startIcon={ <HomeIcon /> }>Peruuta</Button>
        </form>
    </Paper>
    ) 
}

export default CreateRecipe;