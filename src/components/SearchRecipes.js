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

const difficulty = [
    { value: 0, label: '0'},
    { value: 1, label: '1'},
    { value: 2, label: '2'}, 
    { value: 3, label: '3'},
    { value: 4, label: '4'},
    { value: 5, label: '5'},
];


function SearchRecipe() {
    
    const [checked, setChecked, value, setValue] = useState(true);

    const handleChange = (event) => {
        setState({
          ...state,
          [event.target.name]: event.target.checked,
        });
      };

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

        <FormLabel sx={{ color: 'text.primary', fontSize: 34, fontWeight: 'medium' }}> Reseptihaku</FormLabel>

        <FormLabel component="form">Hae reseptejä kategorian, erityisruokavalion tai reseptin nimen mukaan</FormLabel>
        <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '70ch' },
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
        <Button variant='outlined'  sx={ {marginRight: 2, marginTop: 2} }>Hae</Button>
       </div>

     
    </Box>

        <FormControl component="fieldset">
  <FormLabel component="legend">Valitse kategoria</FormLabel>
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
    <Button variant='outlined'  sx={ {marginRight: 2} }>Hae</Button>
  </RadioGroup>
</FormControl>   

            <Box sx={{ display: 'flex' }}>
      <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
        <FormLabel component="legend">Hae erityisruokavalion perusteella</FormLabel>
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

<Button variant='outlined'  sx={ {marginRight: 2} }>Hae</Button>

        </FormGroup>

    
      </FormControl>
     
    </Box>

<FormControl component="fieldset">
  <FormLabel component="time">Hae reseptejä valmistusajan mukaan</FormLabel>
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

    <Button variant='outlined'  sx={ {marginRight: 2} }>Hae</Button>

  </RadioGroup>
</FormControl>  

        </form>
    </Paper>
    ) 
}

export default SearchRecipe;