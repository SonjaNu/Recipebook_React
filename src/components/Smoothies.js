import React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Typography from '@mui/material/Typography';

export default function Cakes() {


 
  return (
    <Box sx={{ width: 1300, height: 1000, paddingLeft: 7, paddingRight: 7, }}>

<Typography component="div">
<Box sx={{ color: 'text.primary', fontSize: 34, fontWeight: 'medium', textAlign: 'center', paddingTop: 5, m: 1 }}>Smoothiet</Box>
      
      <Box sx={{ textAlign: 'center', m: 1, marginTop: '1cm' }}>
      Herkullinen smoothie valmistuu hetkessä tehosekoittimella, ja vaihtoehtoja löytyy jokaiseen makuun. 
      Sekoita herkullinen, virkistävä smoothie aamiaiseksi tai välipalaksi. Perinteinen smoothie on kylmä ja siitä löytyy makuja tuoreista hedelmistä ja jogurtista.

Smoothiessa voi hyvin käyttää niin tuoreita kuin pakastemarjoja. 
Myös pakastettu banaani sopii erinomaisesti smoothien joukkoon. 
Hedelmä- tai marjapohjaiseen smoothieen lisätään usein proteiinipitoista jogurttia tai rahkaa, jolloin siitä tulee täyttävämpi.
Jälkiruoaksi sopivat smoothiet, joissa on käytetty esimerkiksi valkosuklaata tai kaakaojauhetta.
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
  img: "./photos/smoothie2.jpg",
  title: 'leivos',
  nameofphoto: 'Leivonnaiset',
  },
 
  {
  img: "./photos/smoothie3.jpg",
  title: 'starter',
  nameofphoto: 'Alkupalat / Kevyet ateriat',
  },
  
  {
  img: "./photos/smoothie4.jpg",
  title: 'snakcs',
  nameofphoto: 'Naposteltavat',
  },
  
  {
  img: "./photos/smoothie5.jpg",
  title: 'bread',
  nameofphoto: 'Leivät',
  },
 
  ];