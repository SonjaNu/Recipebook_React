import React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Typography from '@mui/material/Typography';

export default function Cakes() {


 
  return (
    <Box sx={{ width: 1300, height: 1000, paddingLeft: 7, paddingRight: 7, }}>

<Typography component="div">
<Box sx={{ color: 'text.primary', fontSize: 34, fontWeight: 'medium', textAlign: 'center', paddingTop: 5, m: 1 }}>Alkupalat</Box>
      
      <Box sx={{ textAlign: 'center', m: 1, marginTop: '1cm' }}>
      Herkulliset alkupalat tekevät ateriasta juhlavamman, ne herättävät ruokahalua ja toki myös täyttävät vatsaa. 
      Tosin alkupalojen koosta voidaan olla kahta mieltä. Toisten mielestä alkupala on vain hyvin pieni pala, joka saa vain nälän heräämään. 
      Toisten mielestä alkupalan pitää jo vähän täyttää vatsaa, jotta jaksaa odottaa pääruoan valmistumista.
      Alkupalat ovat monesti kylmiä, jolloin ne voidaan valmistaa hyvissä ajoin, mutta yhtä hyvin alkupalat voivat olla lämpimiä. 
      Eritoten talvella lämmin alkupala, esimerkiksi pieni piiras tai keitto tekee hyvää. 
      Kesällä taas raikkaampi vaihtoehto, kuten salaatti ja pieni leipä, bruschettat tai muut pienet palat ovat usein riittäviä. 
      Mikäli kyseessä on teema, vaikkapa italialainen ruoka, alkupalat antavat viitteitä siitä, mitä on odotettavissa. 
      Alkupaloja suunnitellessa kannattaa muutenkin huomioida, että ne sulautuvat pääruuan kanssa harmoniseksi kokonaisuudeksi.
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
  img: "./photos/starter2.jpg",
  title: 'leivos',
  nameofphoto: 'Leivonnaiset',
  },
 
  {
  img: "./photos/starter.jpg",
  title: 'starter',
  nameofphoto: 'Alkupalat / Kevyet ateriat',
  },
  
  {
  img: "./photos/starter3.jpg",
  title: 'snakcs',
  nameofphoto: 'Naposteltavat',
  },
  
  {
  img: "./photos/starter4.jpg",
  title: 'bread',
  nameofphoto: 'Leivät',
  },
 
  ];