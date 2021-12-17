import React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Typography from '@mui/material/Typography';

export default function Breads() {

  return (
    <Box sx={{ width: 1300, height: 1000, paddingLeft: 7, paddingRight: 7, }}>

<Typography component="div">
<Box sx={{ color: 'text.primary', fontSize: 34, fontWeight: 'medium', textAlign: 'center', paddingTop: 5, m: 1 }}>Leivät</Box>
      
      <Box sx={{ textAlign: 'center', m: 1, marginTop: '1cm' }}>
      Mikä voisikaan olla herkullisempaa kuin itse tehty ja vasta uunista nostettu, rapea ja lämpöinen leipä? 
      Erilaiset leivät ovatkin olennainen osa niin arjen kuin juhlan syömistä: saaristolaisleipää leivotaan vuoden juhlahetkiin ja herkullisia sämpylöitä arkeen. 
      Leivät valmistuvat myös gluteenittomina ja laktoosittomina, ja näin kaikki voivat nauttia herkullisesta leivän mausta. 
      Foccaciat, peltileivät ja crackerit toimivat jo sellaisinaan pieninä herkkupaloina, ja itsetehdyn joululimpun tai mallasleivän voi viedä vaikkapa lahjaksi. 
      Tuore, itse leivottu leipä ei kaipaa muuta kuin nokareen voita päälle.</Box>
     
    </Typography>

   <Box sx={{paddingLeft: 10, paddingRight: 40}}>

    <ImageList sx={{ width: 1000, height: 550}} cols={4} rowHeight={164}>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=464&h=464&fit=crop&auto=format`}
            srcSet={`${item.img}?w=464&h=464&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>

    </Box>   
      
</Box>
);
}

const itemData = [
  {
  img: "./photos/bread2.jpg",
  title: 'leivos',
  nameofphoto: 'Leivonnaiset',
  },
 
  {
  img: "./photos/bread3.jpg",
  title: 'starter',
  nameofphoto: 'Alkupalat / Kevyet ateriat',
  },
  
  {
  img: "./photos/bread4.jpg",
  title: 'snakcs',
  nameofphoto: 'Naposteltavat',
  },
  
  {
  img: "./photos/bread.jpg",
  title: 'bread',
  nameofphoto: 'Leivät',
  },
 
  ];