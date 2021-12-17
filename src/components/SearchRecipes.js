import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import FormLabel from '@mui/material/FormLabel';
import Box from '@mui/material/Box';
import axios from 'axios';


const url = 'http://localhost:8080';

function SearchRecipe() {


  const [allData,setAllData] = useState([]);
  const [filteredData,setFilteredData] = useState(allData);
  
  const handleSearch = (event) =>{
    let value = event.target.value.toLowerCase();
    let result = [];
    console.log(value);
    result = allData.filter((data) => {
      return  data.nimi.toLowerCase().search(value) != -1   
             
    });
    setFilteredData(result);
  }

 

  useEffect(() => {
    axios.get(url + '/recipe/all')
    .then(response => {console.log(response.data)
    setAllData(response.data);
    setFilteredData(response.data);
    })
    .catch(error => {console.log('Error getting data: ' + error);
    })
    }, []);

  
    return (
    <Paper sx={ {paddingTop: 2, marginLeft: 4, marginRight: 4, paddingLeft: 2, marginBottom: 2, paddingBottom: 1} }>
        <form>

        <FormLabel sx={{ color: 'text.primary', fontSize: 30, fontWeight: 'medium' }}> Hae reseptejä</FormLabel>

        <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '70ch' }, paddingTop: 4,
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
          onChange={(event) =>handleSearch(event)}
        />
      
       </div>

    </Box>
     
    {filteredData.map((value,index)=>{
      return(
        <Box key={value.id} sx={{marginLeft: 2}}>
       <Link to ={'/hae/' + value.id +  '/' + value.nimi + '/' + value.kategoria + '/' + value.allergia + '/' + value.ainekset + '/' + value.ohje + '/' + value.valmistusaika + '/' + value.vaikeus + '/' + value.arvostelut + '/' + value.picture}>{value.nimi}</Link>
        </Box>
        )
        })}

        </form>
    </Paper>
    ) 
}

export default SearchRecipe;