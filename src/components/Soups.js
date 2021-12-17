import React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Typography from '@mui/material/Typography';

export default function Cakes() {


 
  return (
    <Box sx={{ width: 1300, height: 1000, paddingLeft: 7, paddingRight: 7, }}>

<Typography component="div">
<Box sx={{ color: 'text.primary', fontSize: 34, fontWeight: 'medium', textAlign: 'center', paddingTop: 5, m: 1 }}>Keitot</Box>
      
      <Box sx={{ textAlign: 'center', m: 1, marginTop: '1cm' }}>
      Keitot ovat riittoista arkiruokaa parhaimmillaan, mutta hienostuneitakin reseptejä löytyy paljon. 
      Keitot sopivat jokaiseen vuodenaikaan. 
      Talvella keitto lämmittää mukavasti kylminä pakkaspäivinä, kesällä maistuu puolestaan kevyet, tuoreista kauden raaka-aineita valmistetut keitot ja syksyn tullen herkutellaan sienisadon antimilla. 
      
      </Box>
     
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
  img: "./photos/soup.jpg",
  title: 'leivos',
  nameofphoto: 'Leivonnaiset',
  },
 
  {
  img: "./photos/soup2.jpg",
  title: 'starter',
  nameofphoto: 'Alkupalat / Kevyet ateriat',
  },
  
  {
  img: "./photos/soup3.jpg",
  title: 'snakcs',
  nameofphoto: 'Naposteltavat',
  },
  
  {
  img: "./photos/soup4.jpg",
  title: 'bread',
  nameofphoto: 'Leivät',
  },
 
  ];