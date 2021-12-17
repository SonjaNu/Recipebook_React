import React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Typography from '@mui/material/Typography';

export default function Cakes() {


 
  return (
    <Box sx={{ width: 1300, height: 1000, paddingLeft: 7, paddingRight: 7, }}>

<Typography component="div">
<Box sx={{ color: 'text.primary', fontSize: 34, fontWeight: 'medium', textAlign: 'center', paddingTop: 5, m: 1 }}>Piirakat</Box>
      
      <Box sx={{ textAlign: 'center', m: 1, marginTop: '1cm' }}>
      Piirakka voi olla makea tai suolainen, vegaaninen tai gluteeniton. 
      Se sopii vieraille tarjottavaksi, isompiinkin juhliin ja toisaalta myös pikkunälkään, lounaaksi tai piknikillä tarjottavaksi.


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
  img: "./photos/pie2.jpg",
  title: 'leivos',
  nameofphoto: 'Leivonnaiset',
  },
 
  {
  img: "./photos/pie3.jpg",
  title: 'starter',
  nameofphoto: 'Alkupalat / Kevyet ateriat',
  },
  
  {
  img: "./photos/pie4.jpg",
  title: 'snakcs',
  nameofphoto: 'Naposteltavat',
  },
  
  {
  img: "./photos/pie5.jpg",
  title: 'bread',
  nameofphoto: 'Leivät',
  },
 
  ];